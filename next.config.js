/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React StrictMode for better development experience
  reactStrictMode: true,

  // Configure image domains for optimization
  images: {
    domains: [
      'images.unsplash.com', 
      'plus.unsplash.com',
      'lh3.googleusercontent.com', // Google profile images
      'avatars.githubusercontent.com', // GitHub profile images
      'platform-lookaside.fbsbx.com', // Facebook profile images
    ],
  },

  // Experimental features
  experimental: {
    // Keep these experimental features enabled if needed
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
