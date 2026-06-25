/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.jrrecyclingsolutionsltd.com.bd",
      },
    ],
  },
};

export default nextConfig;
