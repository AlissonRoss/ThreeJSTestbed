// config-overrides.js
const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.mjs$/,
    type: 'javascript/auto'
  }),
  (config) => {
    config.ignoreWarnings = [
      {
        module: /@mediapipe\/tasks-vision\/vision_bundle\.mjs$/,
        message: /Failed to parse source map/
      }
    ];
    return config;
  }
);
