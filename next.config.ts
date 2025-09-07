import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      }
    }
  },
  images: {
    domains: ["res.cloudinary.com"], // allow Cloudinary
  },
};

export default nextConfig;
