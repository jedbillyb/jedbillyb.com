/**
 * Cloudflare Pages SPA routing function
 * Serve index.html for all non-static routes to enable client-side routing
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Static assets and known files to skip
  if (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/api/") ||
    /\.(js|css|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i.test(pathname) ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    pathname === "/_routes.json"
  ) {
    return next();
  }

  // Rewrite to index.html for SPA routing
  const indexUrl = new URL("/index.html", url);
  return next(new Request(indexUrl, request));
}
