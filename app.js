require('marko/node-require');

const app = require('express')();
const $ = require('config');
const raven = require('raven');

if ($.clients.sentry.enabled) {
  raven.config($.clients.sentry.dsn).install();
}

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serveStatic = require('serve-static');
const cors = require('cors');
const moment = require('moment');
const markoExpress = require('marko/express');
const numeral = require('numeral');
const multer = require('multer');
const storage = multer.memoryStorage();
const querystring = require('querystring');
const request = require('request-promise');
const redis = require('redis');
let redisClient = {};

if ($.clients.redis.enabled) {
  redisClient = redis.createClient($.clients.redis);
}

/**
 * Load services
 */
const Home = require($.alias.services + '/home');

if ($.clients.sentry.enabled) {
  app.use(raven.requestHandler());
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(markoExpress());

app.use((req, res, next) => {
  res.locals.app = $.app;
  res.locals.url = $.app.hostname;
  next();
});

if (process.env.IS_DEV) {
  app.use('/assets', serveStatic(path.join(__dirname, 'assets')));
}

const errorTpl = require($.alias.views + '/error');

app.get('/ping', (req, res) => res.send('PONG'));

app.get('/', Home.index);

if ($.clients.sentry.enabeld) {
  // The error handler must be before any other error middleware
  app.use(raven.errorHandler());
}

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  let code = 'ERROR!';

  if ($.clients.sentry.enabeld) {
    code = res.sentry;
  }

  console.error(code);
  res.statusCode = 500;
  res.marko(errorTpl, { title: code, code: code });
});

app.use(function(req, res, next) {
  res.status(400);
  res.redirect($.app.hostname);
});

let configSources = [];

for (let configSource of $.util.getConfigSources()) {
  configSources.push(configSource.name);
}

app.listen($.app.port, function() {
  console.log(`${$.app.name} app listening on port ${$.app.port}!`);
  console.log(configSources);
});
