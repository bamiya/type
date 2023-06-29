import { createProxyMiddleware } from 'http-proxy-middleware';

// src/setupProxy.js
export default function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://localhost:8080/',
            changeOrigin: true
        })
    );
};