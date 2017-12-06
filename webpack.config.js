var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            // css处理不进行分离
            { test: /\.css$/, use: ['style-loader', 'css-loader', "postcss-loader"] },
            // css编译 单独分离出css文件
            // {
            //     test: /\.css$/,
            //     use: extractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: ["css-loader","postcss-loader"]
            //     })
            // },
            // 图片处理
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        'limit': 500,
                        outputPath: 'images/',
                    }
                }]
            },
            // less 编译
            {
                test: /\.less$/,
                // 不分离编译的css文件
                use: ['style-loader', 'css-loader', "postcss-loader", 'less-loader']
                // 分离css文件
                // use: extractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: ['css-loader',"postcss-loader", 'less-loader']
                // })
            },
            // scss 编译
            {
                test: /\.scss$/,
                // 编译scss 不分离文件
                use: ['style-loader', 'css-loader', "postcss-loader", 'sass-loader']
                // 分离css文件
                // use:extractTextPlugin.extract({
                //     fallback:'style-loader',
                //     use:['css-loader',"postcss-loader",'sass-loader']
                // })
            },
        ]
    }, plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: "./build",
        historyApiFallback:true,
        port:3000,
        inline:true,
        hot:true
    }

};
