/**
 * @file 额 webpack1.x没找到设置script属性的插件，顺手写了一个用，动态增加script的属性，想加啥就自己加吧
 * @author   Memoryza(jincai.wang@foxmail.com)
 * @dateTime
 */

const ConcatSource = require('webpack/lib/ConcatSource');
let params = {};
function WebpackCrossOriginPlugin(option) {
  params = option;
}
WebpackCrossOriginPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
      chunks.forEach(function (chunk) {
        if (chunk.name === 'common') {
          chunk.files.forEach(function (file) {
            compilation.assets[file] = new ConcatSource(compilation.assets[file]
              .source()
              .replace(new RegExp(params.source), params.target));
          });
        }
      });
      callback();
    });
  });
};
module.exports = WebpackCrossOriginPlugin;
