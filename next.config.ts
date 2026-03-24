import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Next.js from appending/removing trailing slashes (which causes 308 redirects
  // that Google Search Console flags as "Redirect error").
  trailingSlash: false,

  async redirects() {
    return [
      // Redirect www → non-www (permanent 301 so Google consolidates link equity)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mirainetics.com" }],
        destination: "https://mirainetics.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Add canonical URL header on every page so crawlers always know the
        // preferred form even if they happen to land on a variant.
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
