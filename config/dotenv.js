module.exports = function(env) {
  return {
    clientAllowedKeys: ['FACEBOOK_CONNECT_APP_ID'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: true
  };
};
