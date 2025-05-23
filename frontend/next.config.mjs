/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.steamstatic.com",
				port: "",
			},
			{
				protocol: "http",
				hostname: "media.steampowered.com",
				port: "",
			}
		]
	},
	output: "standalone"
};

export default nextConfig;