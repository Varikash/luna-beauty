import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * `/masters` was linked from the header and footer menus for a long time and
   * has never been a route. The menu item is gone now, but keep the path
   * working for anyone holding an old link — the team lives in the OurMasters
   * section on /about.
   */
  async redirects() {
    return [
      {
        source: "/masters",
        destination: "/about#masters",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
