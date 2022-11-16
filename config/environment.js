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
        TWILIO_AUTH_TOKEN: "bea526a7aa20af6b484b9a917d1a64b4",
        TWILIO_PHONE: '+14307585308',
        TWILIO_API: 'https://api.twilio.com/2010-04-01/Accounts'
    },
    firebase: {
      apiKey: 'AIzaSyCdYuZmSYqihhua2aQ_VAl5poUeXx50MfA',
      authDomain: 'emberjs-prototype.firebaseapp.com',
      databaseURL: 'https://emberjs-prototype.firebaseio.com',
      projectId: 'emberjs-prototype',
      storageBucket: 'emberjs-prototype.appspot.com',
      messagingSenderId: '667986486698',
      appId: '1:667986486698:web:43740e26197047e32d77d3',
      measurementId: 'G-1V2VV220NG',
    },
    pusher: {
      appId: '1501829',
      key: '7794b6f6bc180c97f646',
      secret: 'e5063609ee44cb8f589c',
      cluster: 'mt1',
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
