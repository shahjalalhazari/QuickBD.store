/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            // FOR QUICKBD DOMAIN
            {
                protocol: 'https',
                hostname: 'quickbd-store',
            },
            // FOR SUB-DOMAINS
            {
                protocol: 'https',
                hostname: '**.quickbd-store',
            },
            // FOR CDNs
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: '**.amazonaws.com', // All AWS S3 buckets
            },
            // LOCAL DEVELOPMENT
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
            },
        ],
    },
};

export default nextConfig;
