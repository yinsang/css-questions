import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import { viteExternalsPlugin } from 'vite-plugin-externals';

// import react from '@vitejs/plugin-react';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import reactCssModule from 'vite-plugin-react-stylename';
import reactInlineCSSModulePlugins from 'react-inline-css-module/dist/vite-plugin';

// import visualizer from 'rollup-plugin-visualizer';

const generateScopedName = '[name]__[local]___[hash:base64:5]';
const path = require('path');
// https://vitejs.dev/config/
const plugins = [];
if (process.env.NODE_ENV === 'production') {
  // 打包依赖展示
  // https://dev.g.alicdn.com/bloom-pages/css-questions-184/assets/index.41437bad.css
  // plugins.push(
  //     visualizer({
  //         gzipSize: true,
  //         brotliSize: true
  //     })
  // );
}
let base = {};
if (process.env.NODE_ENV === 'production') {
  base = {

    base: 'https://dev.g.alicdn.com/bloom-pages/css-questions-184'
  };
}

export default defineConfig({
  ...base,
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src/questions')
      }
    ]
  },
  plugins: [
    ...plugins,
    // react(),
    // commonjs(),
    // legacy({
    //   targets: ['since 2017']
    // }),
    reactRefresh(),

    reactInlineCSSModulePlugins({ reactVariableName: 'React' })
    // reactCssModule({
    //     generateScopedName,
    //     handleMissingStyleName: 'warn',
    //     filetypes: {
    //         '.scss': {
    //             syntax: 'postcss-scss'
    //         }
    //     }
    // }),
    // viteExternalsPlugin({
    //   'original-fs': 'original-fs'
    // })
  ]
  // server: {
  //     proxy: {
  //         '/api': 'https://oneapi.alibaba-inc.com/mock/kq7p8ivb'
  //     }
  // },
  // css: {
  //     preprocessorOptions: {
  //         scss: { additionalData: `@import "${path.resolve('./src')}/pages/common/styles/variable.scss";` }
  //     }
  // }
});
