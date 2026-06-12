/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,  // ← Ignora errores de TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true, // ← Ignora errores de ESLint
  },
}

module.exports = nextConfig