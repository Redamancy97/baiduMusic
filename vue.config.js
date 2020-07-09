module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3050,
        hot: true,
        proxy: {
            "/taihe-api": {
                target: "http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/taihe-api/': ''
                }
            },
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
        },
    },
}