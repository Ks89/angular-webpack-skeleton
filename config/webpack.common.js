const webpack                      = require('webpack');
const DefinePlugin                 = require('webpack/lib/DefinePlugin');
const ProvidePlugin                = require('webpack/lib/ProvidePlugin');
const OccurrenceOrderPlugin        = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const LoaderOptionsPlugin          = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin     = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin            = require('copy-webpack-plugin');

const HtmlWebpackPlugin            = require('html-webpack-plugin');
const ExtractTextPlugin            = require('extract-text-webpack-plugin');
const ManifestPlugin               = require('webpack-manifest-plugin');
const InlineManifestWebpackPlugin  = require('inline-manifest-webpack-plugin');
const autoprefixer                 = require('autoprefixer');
const ChunkManifestPlugin          = require('chunk-manifest-webpack-plugin');

const helpers                      = require('./helpers');
const TITLE                        = 'Example';
const TITLE_ADMIN                  = 'Example admin';
const TEMPLATE_PATH                = './src/index.ejs';
const TEMPLATE_ADMIN_PATH          = './src/admin.ejs';
const TEMPLATE_HTML                = 'index.html';
const TEMPLATE_ADMIN_HTML          = 'admin.html';

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts',
    admin: './src/admin.ts'
  },
  resolve: {
    descriptionFiles: ['package.json'],
    extensions: ['.ts', '.js', '.css', '.scss', 'json', '.html']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        exclude: [helpers.root('src', 'app'), helpers.root('src', 'admin')],
        loader: ExtractTextPlugin
          .extract({
            fallbackLoader: "style-loader",
            loader: ['css-loader', 'postcss-loader']
          })
      },
      {
        test: /\.css$/,
        include: [helpers.root('src', 'app'), helpers.root('src', 'admin')],
        loader: 'raw-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ],
    noParse: [/node_modules\/@angular\/\*\*\/bundles\//,
      /@angular\/\*\*\/bundles\//]
  },
  plugins: [
    new ManifestPlugin(),
    new InlineManifestWebpackPlugin(), // TODO check if I can remove this
    new HtmlWebpackPlugin({
      title: TITLE,
      inject: true,
      // chunksSortMode: 'auto', // auto is the default value
      chunks: ['polyfills', 'vendor', 'app'],
      template: TEMPLATE_PATH,
      filename: TEMPLATE_HTML
    }),
    new HtmlWebpackPlugin({
      title: TITLE_ADMIN,
      inject: true,
      chunksSortMode: function (chunk1, chunk2) {
        let orders = ['polyfills', 'vendor', 'admin'];
        let order1 = orders.indexOf(chunk1.names[0]);
        let order2 = orders.indexOf(chunk2.names[0]);
        if (order1 > order2) {
          return 1;
        } else if (order1 < order2) {
          return -1;
        } else {
          return 0;
        }
      },
      chunks: ['polyfills', 'vendor', 'admin'],
      template: TEMPLATE_ADMIN_PATH,
      filename: TEMPLATE_ADMIN_HTML
    }),
    new OccurrenceOrderPlugin(true),
    new ProvidePlugin({
      jQuery: 'jquery',
      jquery: 'jquery',
      $: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether",
      //---------------------------------------------------
      //------------- temporary workaround ----------------
      // https://github.com/shakacode/bootstrap-loader/issues/172#issuecomment-247205500
      //this requires exports-loader installed from npm
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
      //---------------------------------------------------
    }),
    // new CopyWebpackPlugin([{from: './assets', to: './assets'}]),
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src') // location of your src
    ),
    new ChunkManifestPlugin({
      filename: "manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        output: { path :  './' },
        postcss: [autoprefixer],
        tslint: {
          emitErrors: false,
          failOnHint: false,
          resourcePath: helpers.root('./src'),
          formattersDirectory: "./node_modules/tslint-loader/formatters/"
        }
      }
    })
  ],
  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
