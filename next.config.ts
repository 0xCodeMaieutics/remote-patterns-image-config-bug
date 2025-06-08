/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    position: "bottom-right",
  },
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/**/*"),
      // new URL("https://avatars.githubusercontent.com/u/**/*?v=4"), // works
    ],
  },
};

export default nextConfig;
