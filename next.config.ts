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
				"http://54.92.30.29:3100",
				"https://staging.baominhgiadinh.com.vn",
			],
		},
	},
	output: "standalone",
};
export default nextConfig;
