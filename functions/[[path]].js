/**
 * Cloudflare Pages SPA catch-all function
 * Routes all requests to index.html unless they match static assets
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // List of static asset patterns to exclude
  const staticPatterns = [
    /^\/assets\//,
    /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map)$/i,
    /^\/robots\.txt$/,
    /^\/favicon\.ico$/,
    /^\/_routes\.json$/,
  ];

  // Check if the pathname matches any static pattern
  const isStatic = staticPatterns.some((pattern) => pattern.test(pathname));

  if (isStatic) {
    // Serve static files normally
    return context.next();
  }

  // For all other routes, rewrite to index.html (SPA routing)
  return context.env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
}
