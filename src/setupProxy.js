const { createProxyMiddleware } = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://localhost:8080/',
            changeOrigin: true
        })
    );
};