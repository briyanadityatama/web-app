/**
 * Staging configuration
 * Please only add staging specific values
 */
module.exports = {
  /**
   * Application configguration
   */
  app: {
    /**
     * Application port
     * Default: config.default.app.port
     */
    // port: 3000,

    /**
     * Application hostname
     * Default: config.default.app.hostname
     */
    // hostname: 'http://localhost:3000',

    /**
     * Static URL
     * Default: config.default.app.staticUrl
     */
    // staticUrl: 'http://localhost:3000/assets'
  },

  /**
   * Clients configuration
   */
  clients: {
    /**
     * Redis configuration
     */
    redis: {
      /**
       * Redis port
       * Default: config.default.clients.redis.port
       */
      // port: 6379,

      /**
       * Redis host
       * Default: config.default.clients.redis.host
       */
      // host: 'localhost'
    },
  },
};
