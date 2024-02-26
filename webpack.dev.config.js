const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config'); // Adjust this path if necessary

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true,
    },
    entry: './test/integration/playwright/test_index.tsx',
});