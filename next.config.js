/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'robohash.org',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
