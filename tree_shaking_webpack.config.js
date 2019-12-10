const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle_tree_shaking.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
  /**
   * mode: ''development',
   *optimization: {
   *usedExports: true,
   *},'
   */
};