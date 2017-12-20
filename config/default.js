const moment = require('moment');
const path = require('path');

const APPNAME = 'AppName';
const PORT = 3000;

module.exports = {
  /**
   * Application configuration
   */
  app: {
    name: `App.${APPNAME}`,
    port: PORT,
    hostname: `http://localhost:${PORT}`,
    assetsVersion: moment().format('X'),
    staticUrl: `http://localhost:${PORT}/assets`
  },

  /**
   * Alias configuration
   */
  alias: {
    root: path.resolve(__dirname, '../'),
    views: path.resolve(__dirname, '../views/'),
    services: path.resolve(__dirname, '../services')
  },

  /**
   * Cookie configuration
   */
  cookies: {
    maxAge: 900,
    httpOnly: true,
    secure: false
  },

  /**
   * Client configuration
   */
  clients: {
    /**
     * Redis configuration
     */
    redis: {
      /**
       * Enable redis
       */
      enable: false,

      /**
       * Redis port
       */
      port: 6379,
      /**
       * Rdis host
       */
      host: 'localhost'
    },

    /**
     * Sentry configurationf or error logging
     */
    sentry: {
      /**
       * Enable sentry
       */
      enabled: false,
      /**
       * Sentry DSN
       */
      dsn: 'DSN'
    },
  },
};
