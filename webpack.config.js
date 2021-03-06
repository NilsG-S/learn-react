const prod = require('./webpack/prod.js');
const dev = require('./webpack/dev.js');

function config(env) {
  switch (env) {
    case 'prod':
      process.env.NODE_ENV = 'production';
      return prod;
    case 'dev':
      process.env.NODE_ENV = 'development';
      return dev;
    default:
      process.env.NODE_ENV = 'production';
      return prod;
  }
}

module.exports = config;
