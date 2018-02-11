const {
  IS_PRODUCTION,
  paths,
  stats,
} = require('./config');

const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.source,
  historyApiFallback: true,
  compress: IS_PRODUCTION,
  inline: !IS_PRODUCTION, // Change to false for IE10 dev mode
  hot: !IS_PRODUCTION,
  host: '127.0.0.1',
  disableHostCheck: true, // To enable local network testing
  overlay: true,
  stats,
};

module.exports = {
  devServer,
};
