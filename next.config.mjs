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
