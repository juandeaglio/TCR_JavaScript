const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config'); // Adjust this path if necessary

module.exports = merge(commonConfig, {
    mode: 'production',
});