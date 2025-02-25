/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "bmgd-landing",
			removal: input.stage === "production" ? "retain" : "remove",
			home: "aws",
			profile: "xproject-vinhn",
			providers: {
				aws: {
					region: "ap-northeast-1",
				},
			},
		};
	},
	async run() {
		await import("./infra/web");
	},
});
