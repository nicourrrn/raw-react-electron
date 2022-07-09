const liveServer = require('live-server');

const params = {
  port: 8000,
  root: 'dist',
  file: './dist/index.html',
  wait: 500,
}

liveServer.start(params);