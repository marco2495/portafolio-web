/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portafolio-web',
    assetPrefix: '/portafolio-web',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    output: 'export',
};

export default nextConfig;
