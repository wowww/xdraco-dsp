const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  publicPath: '/',
  assetsDir: 'static',
  pages: {
    all: {
      entry: 'src/app/main.js',
      template: 'public/all.html',
      filename: 'index.html',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('html')
      .test(/\.htm$/)
      .use('html-loader')
      .loader('html-loader');

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'preserve';
        options.compilerOptions.preserveWhitespace = false;
        return options;
      });
  },
  configureWebpack: {
    // plugins: [
    //   new StyleLintPlugin({
    //     files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    //     fix: false, //
    //     cache: true, //
    //     emitErrors: true,
    //     failOnError: false,
    //   }),
    // ],
    devtool: 'source-map',
  },
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
    },
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['dsp.xdraco.local'],
    port: 8081,
  },
};
