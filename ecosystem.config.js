module.exports = {
  apps: [{
    name: 'bmgd-landing',
    script: '.next/standalone/server.js',
    interpreter: '/usr/bin/env',
    env: {
      NODE_ENV: 'production',
      PORT: 3100
    }
  }]
}
