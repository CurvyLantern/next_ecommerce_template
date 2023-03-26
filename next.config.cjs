/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.pexels.com',
				port: '',
				pathname: '/photos/**',
			},
		],
	},
};

module.exports = nextConfig;
