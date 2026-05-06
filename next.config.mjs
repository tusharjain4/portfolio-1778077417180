/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // remotePatterns are not needed if using plain <img> for external URLs.
  // If you later decide to use next/image with external URLs, add them here.
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'via.placeholder.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'api.iconify.design',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
};

export default nextConfig;