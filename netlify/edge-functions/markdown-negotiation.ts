import type { Context } from "@netlify/edge-functions";

// Markdown content negotiation for the homepage.
//
// When a client asks for Markdown (`Accept: text/markdown` — the convention AI
// agents/crawlers use), serve the Markdown edition at /index.md instead of the
// full HTML page. Markdown costs an LLM far fewer tokens than the rendered page,
// so agents can read and cite the argument more cheaply. Browsers send
// `Accept: text/html`, so humans get the normal page untouched.
//
// `Vary: Accept` is set on both branches so shared caches keep the HTML and
// Markdown representations apart. Runs only on `/` (see config below); the raw
// /index.md URL stays available as a fallback for clients that can't negotiate.
export default async (request: Request, context: Context) => {
  const accept = request.headers.get("accept") ?? "";

  if (/\btext\/markdown\b/.test(accept)) {
    const res = await context.rewrite(new URL("/index.md", request.url));
    const headers = new Headers(res.headers);
    headers.set("content-type", "text/markdown; charset=utf-8");
    headers.set("vary", "Accept");
    return new Response(res.body, { status: res.status, headers });
  }

  const res = await context.next();
  const headers = new Headers(res.headers);
  headers.set("vary", "Accept");
  return new Response(res.body, { status: res.status, headers });
};

export const config = { path: "/" };
