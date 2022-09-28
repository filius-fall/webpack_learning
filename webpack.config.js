const path = require('path')
const htmlWebpack = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : path.resolve(__dirname,'src/index.js'),
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'

    },
    module:{
        rules:[
            {
                test : /\.scss$/,
                use : ['style-loader','css-loader','sass-loader'],
            },
        ]
    },
    plugins: [
        new htmlWebpack({
            title:'Webpack Tutorial',
            filename : 'index.html',
            template : 'src/template.html'
        })
    ]
}