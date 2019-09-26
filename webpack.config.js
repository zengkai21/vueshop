const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
       rules:[
           {test:/\.css$/,use:['style-loader','css-loader']},
           {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
           {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},//处理图片路径的loader  limit 给定的值是图片的大小，单位是byte，
           //如果我们引用的图片大于或等于limit值，则不会被转为base64格式的字符串，如果小于给定的limit值，则会被转为base64 的字符串
           {test:/\.ttf|eot|svg|woff|woff2$/,use:'url-loader'}, //处理字体文件的loader
           {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel 来转换高级的Es语法
           {test:/\.vue$/,use:'vue-loader'}//处理.vue 文件的loader
       ]
    },
    resolve:{
        alias:{//修改 Vue被导入时候的包的路径 当main.js 使用 import Vue from 'vue'的时候
            "vue$":'vue/dist/vue.js'
        }
    }
}