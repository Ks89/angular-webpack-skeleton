const webpack                      = require('webpack');
const DefinePlugin                 = require('webpack/lib/DefinePlugin');
const ProvidePlugin                = require('webpack/lib/ProvidePlugin');
const CommonsChunkPlugin           = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin          = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin     = require('webpack/lib/ContextReplacementPlugin');
const NamedModulesPlugin           = require('webpack/lib/NamedModulesPlugin');

const CopyWebpackPlugin            = require('copy-webpack-plugin');
const HtmlWebpackPlugin            = require('html-webpack-plugin');
const autoprefixer                 = require('autoprefixer');
const ngcWebpack                   = require('ngc-webpack');
const ScriptExtHtmlWebpackPlugin   = require('script-ext-html-webpack-plugin');

const helpers                      = require('./helpers');
const TITLE                        = 'My MEAN Website';
const TITLE_ADMIN                  = 'Admin My MEAN Website';
const TEMPLATE_PATH                = './src/index.ejs';
const TEMPLATE_ADMIN_PATH          = './src/admin.ejs';
const TEMPLATE_HTML                = 'index.html';
const TEMPLATE_ADMIN_HTML          = 'admin.html';

const AOT                          = helpers.hasNpmFlag('aot');
const TS_CONFIG                    = AOT ? 'tsconfig-aot.json' : 'tsconfig.json';

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    app: AOT ? './src/main.aot.ts' : './src/main.ts',
    admin: AOT ? './src/admin.aot.ts' : './src/admin.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [helpers.root('src'), helpers.root('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: '@angularclass/hmr-loader'
            //, options: {
            //   pretty: !isProd,
            //   prod: isProd
            // }
          },
          {
            loader: 'ng-router-loader',
            options: {
              loader: 'async-import',
              genDir: 'aot',
              aot: AOT
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: '${TS_CONFIG}'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src', 'styles')]
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [helpers.root('src', 'styles')]
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports?jQuery=jquery'
      }
    ],
    noParse: [
      /node_modules\/@angular\/\*\*\/bundles\//,
      /@angular\/\*\*\/bundles\//
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills'],
      // minChunks: Infinity
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app', 'admin'],
      minChunks: module => /node_modules\//.test(module.resource) // enables tree-shaking
    }),
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
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
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CopyWebpackPlugin([{from: './assets', to: './assets'}]),
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src') // location of your src
    ),
    new ngcWebpack.NgcWebpackPlugin({
      disabled: !AOT,
      tsConfig: helpers.root('tsconfig-aot.json')
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      jquery: 'jquery',
      $: 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether',
      //---------------------------------------------------
      //------------- temporary workaround ----------------
      // https://github.com/shakacode/bootstrap-loader/issues/172#issuecomment-247205500
      //this requires exports-loader installed from npm
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
      //---------------------------------------------------
    }),
    new LoaderOptionsPlugin({
      options: {
        context: __dirname,
        output: { path :  './' },
        postcss: [autoprefixer],
        tslint: {
          emitErrors: false,
          failOnHint: false,
          resourcePath: helpers.root('./src'),
          formattersDirectory: './node_modules/tslint-loader/formatters/'
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
