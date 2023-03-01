const withTM = require("next-transpile-modules")(["@amcharts/amcharts4"]);

module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
