const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const packageJson = require('../package.json');

const resolve = dir => path.resolve(__dirname, '../', dir);

// 入口分析 main.js
const pages = glob.sync('src/pages/*/main.js');
const entry = pages.reduce((acc, page) => {
  const name = page.split('/')[2];
  acc[name] = resolve(page);
  return acc;
}, {});

const getRouteBasePath = (params) => {
  const getPath = (params.module.issuer.context).split('/');
  return JSON.stringify(`/blm/${packageJson.name}/${getPath.pop()}`);
};

module.exports = () => ({
  target: 'web',
  entry,
  stats: 'minimal', // 统计信息[只在发生错误或有新的编译时输出]
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[chunkhash:5].js',
    chunkFilename: 'js/[name].[chunkhash:5].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    alias: {
      // 模块别名列表
      '@': resolve('src'),
      '@components': '@/components',
      '@helpers': '@/helpers',
      '@configs': '@/configs',
      '@pages': '@/pages',
      '@styles': '@/styles',
      '@assets': '@/assets'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/pages/common/var.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            /* 小于 2KB 的资源进行转换为 base64 格式 */
            options: {
              limit: 2048
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/'
    }),
    new webpack.DefinePlugin({
      WEB_VERSION: JSON.stringify((process.env.BUILD_GIT_BRANCH || '').split('/')[1]),
      ROUTE_BASE_PATH: webpack.DefinePlugin.runtimeValue(getRouteBasePath)
    }),
    new CaseSensitivePathsPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 初始化的时候最多有N个请求 module (common + 页面级别)
      maxInitialRequests: 2,
      // // N个以上chunk共享才分离
      minChunks: 2
    }
  }
});
