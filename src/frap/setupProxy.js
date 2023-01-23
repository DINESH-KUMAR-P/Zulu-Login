const{ createProxyMiddleware } = require("http-proxy-middleware")

module.exports = login => {
    login.use(
        createProxyMiddleware('/api/method/login',
        {
            target:'http://zulu.mazeworkssolutions.com',
            changeOrigin: true
        }
        )
    )
}