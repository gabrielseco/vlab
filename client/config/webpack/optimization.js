const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      default: {
        enforce: true,
        priority: 1
      },
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 2,
        name: 'vendors',
        enforce: true,
        chunks: 'all'
      }
    }
  }
};

module.exports = optimization;
