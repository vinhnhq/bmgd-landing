module.exports = {
  apps: [{
    name: 'bmgd-landing',
    script: 'bun run start',
    interpreter: '/usr/bin/env',
    env: {
      NODE_ENV: 'production',
      PORT: 3100
    }
  }]
}
