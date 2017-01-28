var options = require('./webpack.base.js');
    options.entry = './src';
    options.output = {
      library: 'VueStar',
      libraryTarget: 'umd',
      filename: 'VueStar.js',
      path: './dist'
    };
    options.externals = {
      vue: 'Vue'
    };
module.exports = options;
