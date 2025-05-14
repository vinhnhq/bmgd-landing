import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: [
				"https://baominhgiadinh.com.vn",
				"http://localhost:3000",
				"https://localhost:3100",
				"https://staging.baominhgiadinh.com.vn",
			],
		},
	},
};
export default nextConfig;
