/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // humsi.org/uscd is the U.S. Climate-Related Displacement map, a separate
  // app on Railway (project "uscd") that serves all its pages under /uscd.
  // Visitors stay on humsi.org; these two rules pass the requests through.
  // humsi.org/cdadmin is the short address for the climate map's review queue
  // (Julia, Nov 19 2026). It sends the browser to /uscd/admin, which the
  // rules below pass to the map's own app; that app asks for the password.
  async redirects() {
    return [{ source: "/cdadmin", destination: "/uscd/admin", permanent: false }]
  },
  async rewrites() {
    const map = "https://web-production-e0b797cb.up.railway.app"
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
