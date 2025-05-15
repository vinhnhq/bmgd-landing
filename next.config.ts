import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: [
				"https://baominhgiadinh.com.vn",
				"http://localhost:3000",
				"http://localhost:3100",
				"https://localhost:3100",
				"http://172.31.43.22:3100",
				"https://stag.baominhgiadinh.com.vn",
			],
		},
	},
};
export default nextConfig;
