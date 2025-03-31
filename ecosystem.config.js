module.exports = {
  apps: [{
    name: 'bmgd-landing',
    script: 'bun run start',
    interpreter: 'bash',
    env: {
      NODE_ENV: 'production',
      PORT: 3100
    }
  }]
}
