const glob = require('glob');
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const portFinderSync = require('portfinder-sync');
const internalIp = require('internal-ip');
const packageJson = require('../package.json');

const baseConfig = require('./base.js')('local');

const resolve = dir => path.resolve(__dirname, '../', dir);
const basePath = `/blm/${packageJson.name}`;

// 入口分析 main.js index.html
const pages = glob.sync('src/pages/*/main.js').filter(page => page.split('/')[2] !== 'common');

const htmlPlugins = pages.map(page => {
  const name = page.split('/')[2];
  const mock = `src/pages/${name}/utils/mock.js`;
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/pages/${name}/index.html`,
    chunks: ['common', name],
    initialData: glob.sync(mock).length ? require(resolve(mock)) : {}
  });
});

// 接口的代理
const devProxyHost = '';
const rewritesFc = () => {
  const rewritesArr = pages.map((page) => {
    const name = page.split('/')[2];
    return {
      /* eslint-disable */
      from: new RegExp(String('^').concat(basePath).concat('/').concat(name)),
      /* eslint-enable */
      to: String('/').concat(name).concat('.html')
    };
  });
  rewritesArr.reverse();
  return rewritesArr;
};
const devPort = portFinderSync.getPort(3000);
module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[hash:5].js',
    path: resolve('dist'),
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: resolve('dist'),
    overlay: true,
    historyApiFallback: {
      rewrites: rewritesFc()
    },
    // 默认打开页面
    open: true,
    port: devPort,
    openPage: `http://${internalIp.v4.sync()}:${devPort}${basePath}/${pages.map(page => page.split('/')[2])[0]}`, // .html
    proxy: {
      '/api': {
        // devProxyHost设置为域名时请注意切换为https协议
        target: `http://${devProxyHost}`,
        changeOrigin: false,
        headers: {
          Host: devProxyHost
        },
        secure: false
      }
    }
  },
  plugins: [
    // 页面
    ...htmlPlugins,
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '0.0.0.0',
      analyzerPort: portFinderSync.getPort(8000),
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ]
});
