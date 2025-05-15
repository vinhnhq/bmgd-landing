module.exports = {
	apps: [
		{
			name: "bmgd-landing",
			script: "npm",
			args: "start",
			exec_mode: "cluster",
			instances: "1",
			autorestart: true,
			env: {
				NODE_ENV: "production",
				PORT: 3100,
			},
		},
	],
};
