import type { Context } from "@netlify/edge-functions";

// Markdown content negotiation for the homepage.
//
// When a client genuinely prefers Markdown (`Accept: text/markdown` — the
// convention AI agents/crawlers use), serve the Markdown edition at /index.md
// instead of the full HTML page. Markdown costs an LLM far fewer tokens than
// the rendered page, so agents can read and cite the argument more cheaply.
// Browsers always declare `text/html` as their top preference, so humans get
// the normal page untouched.
//
// `Vary: Accept` is set so shared caches keep the HTML and Markdown
// representations apart. Runs only on `/` (see config below); the raw
// /index.md URL stays available as a fallback for clients that can't negotiate.

// ---------------------------------------------------------------------------
// Accept-header q-value parsing
// ---------------------------------------------------------------------------

// Parse a single Accept entry ("text/html;q=0.9") into its media type and
// numeric q weight. We only care about the q parameter — other parameters
// (charset, boundary, …) are irrelevant for routing. A malformed or missing q
// is treated as 1 per RFC 9110 §12.4.2.
function parseEntry(entry: string): { type: string; q: number } {
  const parts = entry.trim().split(";");
  const type = parts[0].trim().toLowerCase();
  let q = 1;
  for (let i = 1; i < parts.length; i++) {
    const param = parts[i].trim();
    if (param.startsWith("q=")) {
      const v = parseFloat(param.slice(2));
      // Treat NaN or out-of-range as 1 (malformed → give benefit of the doubt).
      q = Number.isFinite(v) && v >= 0 && v <= 1 ? v : 1;
      break;
    }
  }
  return { type, q };
}

// Return the effective q-weight the client assigns to a given concrete media
// type. Resolution order per RFC 9110 §12.5.1:
//   1. Exact type match  (e.g. "text/markdown")
//   2. Wildcard subtype  (e.g. "text/*")
//   3. Full wildcard     (e.g. "*/*")
//   4. Type not mentioned → 0 (client does not accept it)
//
// We use this instead of a bare regex so that a browser sending
// "text/html,text/markdown" doesn't accidentally get downgraded: the browser
// sends both at q=1, which is a tie, and we treat ties as "prefer HTML".
function acceptQuality(accept: string, type: string): number {
  if (!accept) return 0;

  const target = type.toLowerCase();
  const [targetMain] = target.split("/");

  let exact: number | null = null;
  let wildcardSub: number | null = null; // "text/*" matching our subtype
  let wildcardAll: number | null = null; // "*/*"

  for (const raw of accept.split(",")) {
    const { type: t, q } = parseEntry(raw);
    if (t === target) {
      exact = q;
    } else if (t === `${targetMain}/*`) {
      wildcardSub = q;
    } else if (t === "*/*") {
      wildcardAll = q;
    }
  }

  // Exact match wins; fall back through wildcards; absent → 0.
  if (exact !== null) return exact;
  if (wildcardSub !== null) return wildcardSub;
  if (wildcardAll !== null) return wildcardAll;
  return 0;
}

// ---------------------------------------------------------------------------
// Vary header helper
// ---------------------------------------------------------------------------

// Append a token to the existing Vary header value rather than overwriting it.
// Overwriting would erase upstream tokens like Accept-Encoding, causing CDNs to
// potentially serve wrong-encoding responses to clients. We deduplicate
// case-insensitively so we never repeat a token already present.
function appendVary(headers: Headers, token: string): void {
  const existing = headers.get("vary") ?? "";
  const tokens = existing
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
  if (!tokens.includes(token.toLowerCase())) {
    headers.set("vary", existing ? `${existing}, ${token}` : token);
  }
}

// ---------------------------------------------------------------------------
// Edge handler
// ---------------------------------------------------------------------------

export default async (request: Request, context: Context) => {
  const accept = request.headers.get("accept") ?? "";

  // Compute client preference weights. For HTML we take the maximum of
  // text/html and application/xhtml+xml because browsers send both and either
  // signals "I want a rendered page, not raw markup."
  const qMarkdown = acceptQuality(accept, "text/markdown");
  const qHtml = Math.max(
    acceptQuality(accept, "text/html"),
    acceptQuality(accept, "application/xhtml+xml"),
  );

  // Serve Markdown only when the client *strictly* prefers it. A tie (including
  // both at q=0) means we cannot prove the client prefers Markdown, so we
  // default to the safe human path. This ensures browsers — which include
  // text/markdown among many types — are never downgraded to raw Markdown.
  if (qMarkdown > qHtml) {
    const res = await context.rewrite(new URL("/index.md", request.url));

    // If the Markdown edition is missing or broken, fall through to the normal
    // HTML page rather than serving a 404 body mislabeled as text/markdown. A
    // degraded-but-live HTML page is always better than a broken document.
    if (!res.ok) {
      return context.next();
    }

    const headers = new Headers(res.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    appendVary(headers, "Accept");
    return new Response(res.body, { status: res.status, headers });
  }

  // HTML path: no response wrapping here. The static header rule in
  // netlify.toml sets `Vary: Accept` on `/` for HTML responses, so we don't
  // re-wrap the response in the edge function just to stamp one header —
  // that would make every human pageview depend on the edge runtime
  // unnecessarily. The edge function's job is to serve the Markdown branch;
  // for HTML it simply steps aside.
  return context.next();
};

export const config = { path: "/" };
