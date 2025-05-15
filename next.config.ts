import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: ["baominhgiadinh.com.vn", "localhost:3100", "127.0.0.1:3100", "stag.baominhgiadinh.com.vn"],
		},
	},
};
export default nextConfig;
