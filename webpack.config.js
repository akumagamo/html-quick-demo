    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
    const path = require('path');

    module.exports = {
        entry: path.resolve(__dirname, "scripts/app.js"),
        output: {
            path: path.resolve(__dirname, './dist'),
        },
        module:{
            rules: [{
                test: /\.(mp4|png)/,
                type: 'asset/inline'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new HtmlInlineScriptPlugin(),
        ],
    };