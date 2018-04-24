"use strict";

/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description Using Next Generation Vanilla JS & JS Modules today with Webpack 3 & Babel!
 *
 * @license MIT
 * @copyright xgqfrms 2016-forever || 2018-present
 * @update 2018.1.29
 *
 */

// import { export } from "module-name";

/* "module": "webpack.config.mjs", ??? */
// import path from "path";
// import webpack from "webpack";
// import UglifyJSPlugin from "uglifyjs-webpack-plugin";
// import HtmlWebpackPlugin from "html-webpack-plugin";

// vendor & package.dependencies
const npm_packages = require("./package.json");


const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");// template
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");// extract css files
const CopyWebpackPlugin = require("copy-webpack-plugin");// copy folder

// set process.env.NODE_ENV && npm run dev
if (process.env.NODE_ENV !== "production") {
    console.log(`😃, Looks like we are in development mode!`);
    console.log(`npm_packages = \n`, JSON.stringify(npm_packages.dependencies, null, 4));
}else{
    console.log(`Tada, 🎉, we are in production mode!`);
}

// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-one.scss');
const extractSCSS = new ExtractTextPlugin({
    filename: (getPath) => {
        // relative path
        return getPath('css/[name].css?[hash:8]');
        // return getPath('css/[name].[hash:16].css?[hash:8]');// hash
        // js/../css & bug ???
        // return getPath('../css/[name].css');
        // return getPath('../css/[name].[hash:16].css').replace('js/../css', './css');
        // return getPath('/css/[name].[hash:16].css').replace('/css', '/css');
        // return getPath('../css/[name].css').replace('js/css', 'css');// relative path
    },
    // allChunks: true,
});
// const extractSASS = new ExtractTextPlugin('css/[name].css');

const BASE_URI = {
    MODULES: './src/modules/',
    ES5: './src/es5/',
    APP: './src/index.js',
    SERVER: './src/server.js',
    NIM: './src/modules/no-import-module',
};

const MODULES_OBJ = [
    "module01",
    "module02",
    // "module03",
];

let entry_obj = {};
MODULES_OBJ.forEach(
    (item, i) => {
        entry_obj[item] = `${BASE_URI.MODULES}/${item}`;
    }
);

entry_obj["index"] = `${BASE_URI.APP}`;
// entry_obj["server"] = `${BASE_URI.SERVER}`;
entry_obj["no-import-module"] = `${BASE_URI.NIM}`;


module.exports = {
    entry: Object.assign({}, entry_obj),
    output: {
        path: path.resolve(__dirname, "build/"),
        // path: path.resolve(__dirname, "build/js/"),
        // filename: '[name].min.js',
        filename: "js/[name].min.js?[hash:8]",// hash version
        // filename: "js/[name].[hash:16].min.js?[hash:8]",// hash version
        // [hash] & [chunkhash] can using [hash:16] (default 20)。
        // filename: "[chunkhash].bundle.js",
        // publicPath: '/'
        // pathinfo: true,
        // sourceMapFilename:  [name], [id], [hash] & [chunkhash], // default "[file].map"。
    },
    resolve: {
        // auto resolve files's extensions
        extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".scss",
            ".sass",
            ".css"
        ],
    },
    module: {
        // loaders
        rules: [
            {
                // test: /\.js$/,
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                // exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                        },
                    }
                ],
            },
            {
                // test: /\.scss$/,
                test: /\.((s*)css|sass)$/,
                // test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                // url: true,
                                minimize: true,
                                sourceMap: true,
                                modules: true,
                                localIdentName: "[local]",// class name no hash!
                                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                // camelCase: true,
                                // importLoaders: 1,
                                // 0 => none loader(default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                                // alias: {
                                //     "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                                // },
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                // includePaths: [
                                //     path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                                // ],
                            }
                        }
                    ],
                    // allChunks: true,
                    publicPath: "./public",// not work ant all
                }),
            },
            {
                test: /\.(png|jp(e*)g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,// 8KB ? 8192 : 8000
                    // name: "imgs/[name]",
                    name: "imgs/[hash]-[name].[ext]",// imgs
                }
            },
        ],
    },
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true,
            // {Boolean|RegExp|Function<(node, comment) -> {Boolean|Object}>}
            // test: /\.js$/i,// test: /\.js($&#124;\?)/i
            // include: /\/includes/,
            // exclude: /\/excludes/,
            // parallel: true,
            // parallel: {
            //     cache: true,
            //     workers: 2, // for e.g
            // },
            // uglifyOptions: {
            //     ie8: true,// ie8: false,
            //     ecma: 5,//ecma: 8,
            //     parse: {...options},
            //     mangle: {
            //         ...options,
            //         properties: {
            //             // mangle property options
            //         }
            //     },
            //     output: {
            //         comments: false,
            //         beautify: false,
            //         ...options
            //     },
            //     compress: {...options},
            //     warnings: false
            // },
            // warningsFilter: (src) => true
        }),
        extractSCSS,
        // extractSASS,
        new HtmlWebpackPlugin({
            title: 'using ES6 today with webpack3 & babel!',
            // filename: '../index.html',// relative path
            filename: './index.html',
            template: './src/index.html',
            // favicon: "",
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                minifyCSS: true,
                minifyJS: true,
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeEmptyElements: true,
                quoteCharacter: true,
                // useShortDoctype: true,
                removeTagWhitespace: true,
            },
            hash: true,// all files & path hash
        }),
        // new CleanWebpackPlugin(['build']),// rm-rf
        new CopyWebpackPlugin([
            {
                from: "src/imgs",
                to: "imgs"
            }
        ]),
    ],
};
