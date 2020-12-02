const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* const APP_NAME = 'Some app name' **/
const APP_NAME = '';

const DEBUG_HOST = 'cpt.local';
const DEBUG_PORT = '8086';

const BASE_DIR = process.env.BASE_DIR || '';
const BASE_URL = process.env.BASE_URL || '/api';
// const BASE_URL = process.env.BASE_URL || 'http://10.3.89.69:8000/';
// const DEV_PROXY = process.env.DEV_PROXY || 'https://10.1.2.29';
const DEV_PROXY = process.env.DEV_PROXY || 'http://10.3.89.69:8000';
const MODULES_PATH = path.resolve(__dirname, 'node_modules');

const sourceFolder = 'src';

/* EXTERNAL LIBRARIES **/
const EXTERNALS_TO_TRANSPILE = [path.resolve(MODULES_PATH, 'debug')];

/* Determine favicon path in your project **/
const FAVICON_PATH = undefined;

const getWebpackPlugins = (isProduction, analyze) => {
  const IS_DEV_BUILD = !isProduction;
  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
      title:
        APP_NAME ||
        'You should use variable APP_NAME in webpack.config.js for your project',
      favicon: (FAVICON_PATH && path.resolve(__dirname, FAVICON_PATH)) || '',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),
    new webpack.DefinePlugin({
      webpack: {
        isProduction,
        APP_NAME: JSON.stringify(APP_NAME),
        BASE_URL: JSON.stringify(BASE_URL),
        IS_DEV_BUILD: JSON.stringify(IS_DEV_BUILD),
      },
    }),
    new webpack.ProvidePlugin({
      debug: path.resolve(path.join(__dirname, './src/utils/debug')),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    }),
  ];

  if (analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 8886,
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
};

const getWebpackConfig = (env, { analyze, mode }) => {
  const isProduction = mode === 'production';

  return {
    entry: './src/index.tsx',
    mode,
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: `js/[name].[${isProduction ? 'chunkhash' : 'hash'}].bundle.js`,
      chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src', 'assets'),
        components: path.resolve(__dirname, 'src', 'components'),
        context: path.resolve(__dirname, 'src', 'context'),
        utils: path.resolve(__dirname, 'src', 'utils'),
        generatedApi: path.resolve(__dirname, 'src', 'generated'),
        store: path.resolve(__dirname, 'src', 'store'),
        pages: path.resolve(__dirname, 'src', 'pages'),
        hooks: path.resolve(__dirname, 'src', 'hooks'),
        services: path.resolve(__dirname, 'src', 'services'),
      },
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, sourceFolder), 'node_modules'],
    },
    optimization: {
      runtimeChunk: isProduction ? 'multiple' : undefined,
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: false,
            chunks: 'all',
            priority: -1,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: [path.resolve(MODULES_PATH)],
          // include: EXTERNALS_TO_TRANSPILE,
          loader: 'babel-loader',
          options: {
            cacheDirectory: './babelCache',
            sourceMaps: !isProduction,
          },
        },
        {
          test: /\.[jt]sx?$/,
          include: EXTERNALS_TO_TRANSPILE,
          loader: 'babel-loader',
          options: {
            cacheDirectory: './babelCache',
            sourceMaps: !isProduction,
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            {
              loader: 'css-loader',
              options: { importLoaders: 2, sourceMap: !isProduction },
            },
          ],
        },
        {
          test: /\.(png|svg|woff2?)/,
          loader: 'file-loader',
        },
      ].filter(Boolean),
    },
    devServer: {
      host: DEBUG_HOST,
      port: DEBUG_PORT,
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      proxy: {
        [BASE_URL]: {
          target: DEV_PROXY,
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/api': '' },
        },
      },
    },
    plugins: getWebpackPlugins(isProduction, analyze),
  };
};

module.exports = getWebpackConfig;
