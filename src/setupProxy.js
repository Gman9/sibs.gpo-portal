/* eslint-disable @typescript-eslint/no-var-requires */
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://172.19.40.160:8443/online-payment-gateway',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api/',
            },
        }),
    );
    app.use(morgan('combined'));
};
