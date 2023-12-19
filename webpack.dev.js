const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common'); // Adjust this path if necessary

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    // other development-specific settings...
});