/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "accounts.google.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply CSP to all routes, adjust as needed
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://drive.google.com https://accounts.google.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
