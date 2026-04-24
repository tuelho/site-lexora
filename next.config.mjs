/** @type {import('next').NextConfig} */
const isCloudflarePages = process.env.CF_PAGES === '1'
const nextConfig = {
  ..(isCloudflarePages ? { output: 'export' } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
