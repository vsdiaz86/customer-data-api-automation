const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config()
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);

exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: process.env.BASE_URL,
      onRequest: (request) => {
        request.headers['Content-Type'] = 'application/json';
      }
    },
    CustomHelper: {
      require: './support/helpers/custom_helper.js',
    }
  },
  include: {
    I: './steps_file.js',
    CustomerDataApiPage: './page_objects/customerDataApi_page.js'
  },
  async bootstrapAll() {
  },
  async teardownAll() {
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*/*.feature'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output'
    },
    screenshotOnFail: {
      enabled: true
    },
    skipper: {
      require: './support/plugins/skipper.js',
      enabled: true
    }
  },
  tests: './step_definitions/*/*_test.js',
  name: 'e2e'
}
