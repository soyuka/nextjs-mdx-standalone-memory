const withMDX = require('@next/mdx')({})

/** @type {import("next").NextConfig} */
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	output: "standalone",
	trailingSlash: true,
	reactStrictMode: true,
})
