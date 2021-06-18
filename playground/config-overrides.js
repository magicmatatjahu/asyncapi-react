const path = require('path');

module.exports = function override(config, env) {
  config.resolve = Object.assign({}, config.resolve, {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  });
  config.module.rules.push({
    test: /.worker\.js$/,
    use: { loader: 'worker-loader' },
  });
  return config;
};
