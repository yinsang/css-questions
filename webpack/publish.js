const glob = require('glob');
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildArgv = process.env.BUILD_ARGV_STR ? require('yargs-parser')(process.env.BUILD_ARGV_STR) : {};

const ENV_TYPE = buildArgv.def_publish_env ? buildArgv.def_publish_env : 'local';

const PUBLIC_PATH_BY_ENV = {
  local: '/',
  daily: 'https://dev.g.alicdn.com/bloom-pages/css-questions-184/',
  pre: 'https://dev.g.alicdn.com/bloom-pages/css-questions-184/',
  prod: 'https://g.alicdn.com/bloom-pages/css-questions-184/'
};

const resolve = dir => path.resolve(__dirname, '../', dir);

const baseConfig = require('./base.js');

// 入口分析 main.js index.html
const pages = glob.sync('src/pages/*/main.js').filter(page => page.split('/')[2] !== 'common');
const htmlPlugins = pages.map(page => {
  const name = page.split('/')[2];

  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/pages/${name}/index.html`,
    chunks: ['common', name] // 'common',
  });
});

module.exports = async () => {
  const envType = ENV_TYPE;
  console.log('[publish] 当前构建环境: ', envType);

  const publicPath = PUBLIC_PATH_BY_ENV[envType] || PUBLIC_PATH_BY_ENV.prod;
  console.log(`[publish] publicPath: ${publicPath}`);

  const configObj = webpackMerge(baseConfig(), {
    mode: 'production',
    output: {
      path: resolve('dist'),
      filename: 'js/[name].[chunkhash:5].js',
      chunkFilename: 'js/[name].[chunkhash:5].js',
      publicPath
    },
    plugins: [
      ...htmlPlugins
    ]
  });

  return configObj;
};
