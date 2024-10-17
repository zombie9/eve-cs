/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.evetech.net',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
