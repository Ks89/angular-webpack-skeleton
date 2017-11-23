/*
 * MIT License
 *
 * Copyright (c) 2017 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// based on https://github.com/gdi2290/angular-starter/blob/master/config/webpack.common.js
// but modified by Stefano Cappa (Ks89)

const helpers = require('./helpers');
const buildUtils = require('./build-utils');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VisualizerPlugin = require('webpack-visualizer-plugin');
// const OfflinePlugin = require('offline-plugin');

const TEMPLATE_PATH = './src/index.ejs';
const TEMPLATE_HTML = 'index.html';
const TEMPLATE_ADMIN_PATH = './src/admin.ejs';
const TEMPLATE_ADMIN_HTML = 'admin.html';

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  const isProd = options.env === 'production';
  const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, options.metadata || {});
  const ngcWebpackConfig = buildUtils.ngcWebpackSetup(isProd, METADATA);
  const supportES2015 = buildUtils.supportES2015(METADATA.tsConfigPath);

  const entry = {
    polyfills: './src/polyfills.ts',
    main: './src/main.ts',
    // admin: './src/admin.ts'
  };

  Object.assign(ngcWebpackConfig.plugin, {
    tsConfigPath: METADATA.tsConfigPath,
    mainPath: entry.main
  });

  return {
    /**
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: entry,

    /**
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {
      mainFields: [...(supportES2015 ? ['es2015'] : []), 'browser', 'module', 'main'],

      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      /**
       * An array of directory names to be resolved to the current directory
       */
      modules: [helpers.root('src'), helpers.root('node_modules')],

      /**
       * Add support for lettable operators.
       *
       * For existing codebase a refactor is required.
       * All rxjs operator imports (e.g. `import 'rxjs/add/operator/map'` or `import { map } from `rxjs/operator/map'`
       * must change to `import { map } from 'rxjs/operators'` (note that all operators are now under that import.
       * Additionally some operators have changed to to JS keyword constraints (do => tap, catch => catchError)
       *
       * Remember to use the `pipe()` method to chain operators, this functinoally makes lettable operators similar to
       * the old operators usage paradigm.
       *
       * For more details see:
       * https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md#build-and-treeshaking
       *
       * If you are not planning on refactoring your codebase (or not planning on using imports from `rxjs/operators`
       * comment out this line.
       *
       * BE AWARE that not using lettable operators will probably result in significant payload added to your bundle.
       */
      alias: buildUtils.rxjsAlias(supportES2015)
    },

    /**
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      rules: [
        ...ngcWebpackConfig.loaders,

        /**
         * To string and css loader support for *.css files (from Angular components)
         * Returns file content as string
         *
         */
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('src', 'styles')]
        },

        /**
         * To string and sass loader support for *.scss files (from Angular components)
         * Returns compiled css content as string
         *
         */
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
          exclude: [helpers.root('src', 'styles')]
        },

        /**
         * Raw loader support for *.html
         * Returns file content as string
         *
         * See: https://github.com/webpack/raw-loader
         */
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },

        /**
         * File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },

        /* File loader for supporting fonts, for example, in CSS files.
        */
        {
          test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          use: 'file-loader'
        },

        // Bootstrap 4
        {
          test: /bootstrap\/dist\/js\/umd\//,
          use: 'imports?jQuery=jquery'
        }
      ]
    },
    plugins: [
      // new OfflinePlugin({
      //   publicPath: '/',
      //   caches: {
      //     main: [
      //       'app.*.css',
      //       'vendor.*.js',
      //       'app.*.js',
      //     ],
      //     additional: [
      //       ':externals:'
      //     ],
      //     optional: [
      //       ':rest:',
      //       'api.github.com',
      //       'https://api.github.com/users/Ks89',
      //       'https://api.github.com/users/Ks89/orgs'
      //     ]
      //   },
      //   externals: [
      //     '/'
      //   ],
      //   excludes: ['**/.*', '**/*.map'],
      //   responseStrategy: 'cache-first',
      //   updateStrategy: 'changed',
      //   autoUpdate: 1000 * 60 * 2,
      //   ServiceWorker: {
      //     events: true,
      //     navigateFallbackURL: '/'
      //   },
      //   AppCache: {
      //     FALLBACK: {
      //       '/': '/offline-page.html'
      //     }
      //   }
      // }),

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      // NOTE: when adding more properties make sure you include them in custom-custom-typings.d.ts
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'AOT': METADATA.AOT,
        'process.env.ENV': JSON.stringify(METADATA.ENV),
        'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
        'process.env.HMR': METADATA.HMR
      }),

      /**
       * Plugin: CommonsChunkPlugin
       * Description: Shares common code between the pages.
       * It identifies common modules and put them into a commons chunk.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
       * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
       */
      new CommonsChunkPlugin({
        name: 'polyfills',
        chunks: ['polyfills']
      }),

      new CommonsChunkPlugin({
        minChunks: Infinity,
        name: 'inline'
      }),
      new CommonsChunkPlugin({
        name: 'main',
        async: 'common',
        children: true,
        minChunks: 2
      }),

      /**
       * Plugin: CopyWebpackPlugin
       * Description: Copy files and directories in webpack.
       *
       * Copies project static assets.
       *
       * See: https://www.npmjs.com/package/copy-webpack-plugin
       */
      new CopyWebpackPlugin([
          {
            from: './assets',
            to: './assets'
          },
          {
            from: 'node_modules/font-awesome/css/font-awesome.min.css',
            to: 'assets/font-awesome/css/font-awesome.min.css',
          },
          {
            from: 'node_modules/font-awesome/fonts',
            to: 'assets/font-awesome/fonts'
          }
        ],
        isProd ? {ignore: ['mock-data/**/*']} : undefined
      ),

      /**
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
        template: TEMPLATE_PATH,
        filename: TEMPLATE_HTML,
        title: METADATA.title,
        chunksSortMode: function (a, b) {
          const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
          return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
        },
        metadata: METADATA,
        inject: 'body',
        xhtml: true,
        minify: isProd ? {
          caseSensitive: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        } : false
      }),


      /**
       * Plugin: ScriptExtHtmlWebpackPlugin
       * Description: Enhances html-webpack-plugin functionality
       * with different deployment options for your scripts including:
       *
       * See: https://github.com/numical/script-ext-html-webpack-plugin
       */
      new ScriptExtHtmlWebpackPlugin({
        sync: /inline|polyfills|vendor/,
        defaultAttribute: 'async',
        preload: [/polyfills|vendor|main/],
        prefetch: [/chunk/]
      }),


      /*
       * Plugin: HtmlElementsPlugin
       * Description: Generate html tags based on javascript maps.
       *
       * If a publicPath is set in the webpack output configuration, it will be automatically added to
       * href attributes, you can disable that by adding a "=href": false property.
       * You can also enable it to other attribute by settings "=attName": true.
       *
       * The configuration supplied is map between a location (key) and an element definition object (value)
       * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
       *
       * Example:
       *  Adding this plugin configuration
       *  new HtmlElementsPlugin({
       *    headTags: { ... }
       *  })
       *
       *  Means we can use it in the template like this:
       *  <%= webpackConfig.htmlElements.headTags %>
       *
       * Dependencies: HtmlWebpackPlugin
       */
      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new LoaderOptionsPlugin({}),

      // do the magic to support Angular 5 (thanks to @shlomiassaf)
      new ngcWebpack.NgcWebpackPlugin(ngcWebpackConfig.plugin),

      /**
       * Plugin: InlineManifestWebpackPlugin
       * Inline Webpack's manifest.js in index.html
       *
       * https://github.com/szrenwei/inline-manifest-webpack-plugin
       */
      new InlineManifestWebpackPlugin(),


      /**
       * Plugin:
       * Manage build-time dependencies to global symbols whereas the expose-loader
       * manages runtime dependencies to global symbols
       *
       * https://webpack.js.org/plugins/provide-plugin/
       */
      new ProvidePlugin({
        jQuery: 'jquery',
        jquery: 'jquery',
        $: 'jquery',
        'Popper': 'popper.js',
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

      isProd ? () => {} : new BundleAnalyzerPlugin({
        // Can be `server`, `static` or `disabled`.
        // In `server` mode analyzer will start HTTP server to show bundle report.
        // In `static` mode single HTML file with bundle report will be generated.
        // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
        analyzerMode: 'disabled',
        // Host that will be used in `server` mode to start HTTP server.
        analyzerHost: '127.0.0.1',
        // Port that will be used in `server` mode to start HTTP server.
        analyzerPort: 8888,
        // Path to bundle report file that will be generated in `static` mode.
        // Relative to bundles output directory.
        reportFilename: 'webpack-bundle-analyzer-report.html',
        // Automatically open report in default browser
        openAnalyzer: true,
        // If `true`, Webpack Stats JSON file will be generated in bundles output directory
        generateStatsFile: true,
        // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
        // Relative to bundles output directory.
        statsFilename: 'webpack-bundle-analyzer-report.json',
        // Options for `stats.toJson()` method.
        // For example you can exclude sources of your modules from stats file with `source: false` option.
        // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
        statsOptions: null,
        // Log level. Can be 'info', 'warn', 'error' or 'silent'.
        logLevel: 'info'
      }),
      isProd ? () => {} : new VisualizerPlugin({filename: './webpack-visualizer-report.html'})
    ],

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
