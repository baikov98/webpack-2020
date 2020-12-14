const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
//const IonRangeSlider = require('ion-rangeslider')
const webpack = require('webpack')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const makeHtml = (name) => 
     ({
        filename: `${name}.html`,
        template: `./${name}.pug`,
        minify: {
            collapseWhitespace: isProd
        }     
    })
const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}
const optimization = () => {
    const config =  {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
    }, 'css-loader' ]
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const babelOptions = preset => {
    const opts = 
        {
         presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-proposal-class-properties'
                    ]
        }
          if (preset) {
              opts.presets.push(preset)
          }
     return opts
};

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.pug',
            minify: {
                collapseWhitespace: isProd
            }
                      
        }),
        //new HTMLWebpackPlugin(makeHtml('page')),
        new CleanWebpackPlugin(),
        //new IonRangeSlider(),
        new CopyWebpackPlugin(
            [
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
                { from: path.resolve(__dirname, 'src/fsd/blocks/main-logo/main-logo.svg'), to: path.resolve(__dirname, 'dist') },
                { from: path.resolve(__dirname, 'src/fsd/blocks/gray-logo/gray-logo.svg'), to: path.resolve(__dirname, 'dist') }
            ]
        ),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
    ]
    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './entry.js'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(),
    devServer: {
        host: '192.168.0.95',
        port: 8080,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
              },
        ]
    }
}



