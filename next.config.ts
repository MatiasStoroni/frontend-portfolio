import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  theme:{
    extend:{
      fontFamily:{
        josefin: ["Josefin Sans", "sans-serif"],
      }
    }
  }
};

export default nextConfig;
