/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],
  eslint: {
    dirs: ['src'],
  },
  images:{domains:[ "localhost","images.pexels.com"]}
}
