/**
 * https://github.com/postcss/postcss
 */
module.exports = {
  plugins: [
    /**
     * 给CSS自动添加 -webkit- 前缀
     */
    require('autoprefixer'),
    /**
     * 将一些现代的写法转换成流行浏览器可以看懂的 eg:
     * #12345678 => rgba(18, 52, 86, 0.47059)
     */
    require('postcss-preset-env'),
    require('postcss-sprites')({
      spritePath: './src/assets/sprites/',
      filterBy(image) {
        if (!/\.sprite$/.test(image.url)) {
          return Promise.reject();
        }

        return Promise.resolve();
      },
      groupBy(image) {
        const path = image.path.replace(__dirname).split('/');
        const type = path[2];
        const name = path[3];
        // 单个页面(path)，单个组件(component) 雪碧图分组
        if (!type || !name) {
          return Promise.reject(new Error('Not a shape image.'));
        }

        return Promise.resolve(`${type}.${name}`);
      }
    })
  ]
};
