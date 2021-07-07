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
        new CompressionPlugin({
          compressionOptions: { level: 9 },
          threshold: 10240, // 压缩超出10240字节大小
          algorithm: "gzip",
          deleteOriginalAssets: false // 是否删除源文件
        })
      );
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: "chunk-common",
              chunks: "initial",
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            vendors: {
              name: "chunk-vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "initial",
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            },
            antd: {
              name: "chunk-ant-design-vue",
              test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
              chunks: "all",
              priority: 3,
              reuseExistingChunk: true,
              enforce: true
            },
            elementUI: {
              name: "chunk-elementUI-plus",
              priority: 4,
              chunks: "all",
              test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
              enforce: true
            }
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
    // config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
    config.resolve.alias.set("@", resolve("src"));
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
