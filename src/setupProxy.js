/* eslint-disable @typescript-eslint/no-var-requires */
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/gpo',
        createProxyMiddleware({
            target: 'http://172.19.40.160:8443/lx19/online-payment-gateway',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/gpo': '/api/',
            },
        }),
    );

    app.use(
        '/gpm',
        createProxyMiddleware({
            target: 'http://172.19.40.160:8443/lx19/mobile-payment-gateway',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/gpm': '/api/',
            },
        }),
    );

    app.use(morgan('combined'));
};
