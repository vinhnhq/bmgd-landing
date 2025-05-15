import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: [
				"https://baominhgiadinh.com.vn",
				"http://localhost:3000",
				"http://localhost:3100",
				"https://stag.baominhgiadinh.com.vn",
			],
		},
	},
};
export default nextConfig;
