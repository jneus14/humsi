/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // humsi.org/uscd is the U.S. Climate-Related Displacement map, a separate
  // app on Railway (project "uscd", service "web") that serves all its pages
  // under /uscd.
  // Visitors stay on humsi.org; these two rules pass the requests through.
  // humsi.org/cdadmin is the short address for the climate map's review queue
  // (Julia, Nov 19 2026). It sends the browser to /uscd/admin, which the
  // rules below pass to the map's own app; that app asks for the password.
  async redirects() {
    return [{ source: "/cdadmin", destination: "/uscd/admin", permanent: false }]
  },
  // The site's own Railway address (….up.railway.app) shows the same pages as
  // humsi.org; search engines are told not to index that copy.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.up\\.railway\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
  async rewrites() {
    // Where the map's app answers. On Railway the site and the map are two
    // services in one project, and USCD_ORIGIN is set on the site's service to
    // the map's private address (http://web.railway.internal:<port>), so these
    // requests never leave Railway's network. Anywhere else (a local run) the
    // map's public address is used. Read when the site is built.
    const map = process.env.USCD_ORIGIN || "https://web-production-e0b797cb.up.railway.app"
    // beforeFiles: these run before this site's own routing, so the map's
    // background page requests (sent when a visitor clicks a link inside the
    // map) are passed through too instead of being answered here with a 404.
    return {
      beforeFiles: [
        { source: "/uscd", destination: `${map}/uscd` },
        { source: "/uscd/:path*", destination: `${map}/uscd/:path*` },
      ],
    }
  },
}

export default nextConfig
