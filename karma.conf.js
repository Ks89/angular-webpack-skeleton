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
      {
        pattern: './config/karma-test-runner.js',
        watched: false
      }
    ],
    preprocessors: {
      './config/karma-test-runner.js': ['coverage', 'webpack', 'sourcemap']
    },
    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {noInfo: true},

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      'json': './coverage/coverage.json',
      'html': './coverage/html',
      'lcovonly': './coverage/lcov.info'
    },

    reporters: ['progress', 'mocha', 'coverage', 'remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: getBrowsers(),
    singleRun: true
  });
};
