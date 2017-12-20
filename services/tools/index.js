const $ = require('config');
const _ = require('lodash');
const path = require('path');

const Dame = require('./dame');

const indexTpl = require($.alias.viewsDir('tools/index'));
const cdnTpl = require($.alias.viewsDir('tools/cdn'));

class Tools {
  constructor() {
    this.index = this.index.bind(this);
    this.Dame = Dame;
  }

  index(req, res) {
    res.marko(indexTpl, {
      app: $.app
    });
  }

  cdn(req, res) {
    res.marko(cdnTpl, {
      app: $.app
    });
  }
}

module.exports = new Tools();
