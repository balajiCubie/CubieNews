/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  output: "export",
  // basePath: "/CubieNews",
  images: {
    loader: 'akamai',
    path: process.env.NEXT_PUBLIC_URL,
  },  
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig
