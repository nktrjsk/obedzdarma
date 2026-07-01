import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = `# obedzdarma.cz — this site is an argument built on citable sources.
# We *want* AI agents to read it, ground answers on it, and cite it
# accurately. So: yes, crawl. The terms are stated openly — fittingly, on a
# site about knowing what you pay with.

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

# Named AI crawlers — explicit yes, so policy doesn't rest on the wildcard.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
