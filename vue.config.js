const webpack = require("webpack");
const WebpackBundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const UglifyJsPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
// const LodashModuleReplacementPlugin = require("lodash-webpack-plugin"); // lodash 优化
const IsPro = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  publicPath: "./", // 打包配置，解决页面空白的配置方案。
  productionSourceMap: false, // 不打包.map文件
  configureWebpack: (config) => {
    if (IsPro) {
      config.plugins.push(
        new UglifyJsPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_debugger: true, // 注释console
              drop_console: true,
              pure_funcs: ["console.log"] // 移除console
            }
          },
          extractComments: false, // 是否将注释提取到一个单独的文件中
          sourceMap: false,
          parallel: true
        }),
        new WebpackBundleAnalyzerPlugin(), // webpack 资源大小查看
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/),
        new CompressionPlugin({
          compressionOptions: { level: 9 },
          threshold: 10240, // 压缩超出10240字节大小
          algorithm: "gzip",
          deleteOriginalAssets: true // 是否删除源文件
        })
      );
      config.optimization = {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vue: {
              name: "vue",
              test: /[\\/]node_modules[\\/]vue[\\/]/,
              priority: -10
            },
            vuex: {
              name: "vuex",
              test: /[\\/]node_modules[\\/]vuex[\\/]/,
              priority: -10
            },
            "vue-router": {
              name: "vue-router",
              test: /[\\/]node_modules[\\/]vue-router[\\/]/,
              priority: -10
            },
            vendors: {
              name: "vendors",
              test: /[\\/]node_modules[\\/]/,
              priority: -20
            }
            // "ant-design-vue": {
            //   name: "ant-design-vue",
            //   test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            //   reuseExistingChunk: true,
            //   enforce: true
            // }
          }
        }
      };
    }
  },
  chainWebpack: (config) => {
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );
    config.resolve.alias.set("@", resolve("src"));
    // 删除预加载
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  },
  css: {
    // modules: false,
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true
  }
};
