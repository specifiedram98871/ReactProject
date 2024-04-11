/** @type {import('next').NextConfig} */
const nextConfig = {
    NEWS_API_KEY: process.env.NEXT_APP_NEWS_API_KEY || "default_value",
};
export default nextConfig;
