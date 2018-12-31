/* eslint-disable*/
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: "./src/index.ts",
    output: {
    },
    resolve: {
        extensions: [".ts", ".vue"],
        alias: {
            '@': resolve('src'),
            vue$: 'vue/dist/vue.runtime.esm.js'
        }  
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // 'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { 
                    appendTsSuffixTo: [/\.vue$/],
                    onlyCompileBundledFiles: true,
                    compilerOptions: {
                        "declaration": true,
                        "declarationDir": "types",
                    }
                }
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
