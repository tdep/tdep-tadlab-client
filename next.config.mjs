/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", // required for the canvas to work
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }];
        return config;
    },
};

export default nextConfig;
