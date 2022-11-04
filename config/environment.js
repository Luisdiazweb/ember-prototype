'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'message',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    twilio: {
        TWILIO_ACCOUNT_SID: 'AC0b9468c1538ca4c36ee8c74cdf687d39',
        TWILIO_AUTH_TOKEN: '5c6df6199ffbd5676fe5aaa24d6aa780',
        TWILIO_PHONE: '+14307585308',
        TWILIO_API: 'https://api.twilio.com/2010-04-01/Accounts'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/ember-prototype';
    ENV.locationType = 'hash';
  }

  return ENV;
};
