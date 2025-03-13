const frontend = new sst.aws.StaticSite("bmgd-landing", {
	path: "./",
	build: {
		output: "out",
		command: "bun run build",
	},
});
