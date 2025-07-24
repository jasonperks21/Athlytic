/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      'framer-motion',
      'recharts'
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Bundle optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
          // Separate heavy libraries
          animation: {
            test: /[\\/]node_modules[\\/](gsap|framer-motion)[\\/]/,
            name: 'animation',
            priority: 15,
            reuseExistingChunk: true,
          },
          charts: {
            test: /[\\/]node_modules[\\/]recharts[\\/]/,
            name: 'charts',
            priority: 15,
            reuseExistingChunk: true,
          }
        },
      };
    }

    // Tree shaking optimization
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    return config;
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Enable static optimization
  trailingSlash: false,
};

export default nextConfig;
