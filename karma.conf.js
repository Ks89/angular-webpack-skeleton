var webpackConfig = require('./config/webpack.test');

function getBrowsers() {
  if (process.env.CI) {
    return ['PhantomJS'];
  } else {
    return ['PhantomJS', 'Chrome', 'Firefox'];
  }
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "./config/karma-test-runner.js"
    ],
    // files: [
    //   {
    //     pattern: './config/karma-test-runner.js',
    //     watched: false
    //   }
    // ],
    exclude: [],
    preprocessors: {
      './config/karma-test-runner.js': ['coverage', 'webpack', 'sourcemap']
    },
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: {
        chunks: false
      }
      // stats: 'errors-only'
    },

    reporters: ['progress', 'mocha', 'kjhtml', 'coverage', 'remap-coverage'],


    // webpackServer: {noInfo: true},

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: getBrowsers(),
    singleRun: true,

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      'json': './coverage/coverage.json',
      'html': './coverage/html',
      'lcovonly': './coverage/lcov.info'
    },
    jasmineDiffReporter: {
      multiline: true
    }
  });
};
