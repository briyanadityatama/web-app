'use strict';

const recluster = require('recluster');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

// let NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = 'development';
process.env.IS_DEV = true;

if (argv.production) {
  process.env.NODE_ENV = 'production';
  process.env.IS_DEV = false;
}

if (argv.staging) {
  process.env.NODE_ENV = 'staging';
  process.env.IS_DEV = false;
}

process.env.NODE_CONFIG_DIR = path.resolve(__dirname, argv.config || './config/');
const $ = require('config');

let opt = {};

if (process.env.IS_DEV) {
  opt.workers = 1;
}

const cluster = recluster(path.resolve(__dirname, './app.js'), opt);
cluster.run();

process.on($.app.name, function() {
    console.log(`Got ${$.app.name}, reloading cluster...`);
    cluster.reload();
});

console.log(`spawned cluster, kill -s ${$.app.name} ${process.pid} to reload`);
