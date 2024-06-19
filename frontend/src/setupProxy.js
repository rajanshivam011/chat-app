const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (App) {
  App.use(
    "/api",
    createProxyMiddleware({
      target: "https://mern-chatapp-sr.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
