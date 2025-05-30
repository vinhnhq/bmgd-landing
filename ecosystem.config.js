module.exports = {
	apps: [
		{
			name: "bmgd-landing",
			script: "node_modules/.bin/next",
			args: "start",
			exec_mode: "cluster",
			instances: "1",
			autorestart: true,
			cwd: __dirname,
			env: {
				NODE_ENV: "production",
				PORT: 3100,
			},
		},
	],
};
