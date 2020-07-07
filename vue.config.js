module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3049,
        hot: true,
        proxy: {
            // "/^api":{
            //     target:"http://tingapi.ting.baidu.com",
            //     changeOrigin: true
            // }
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
        },
    },
}