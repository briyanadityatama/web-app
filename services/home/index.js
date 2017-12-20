const $ = require('config');
const indexTpl = require($.alias.views + '/home/index');

class Home {
  constructor() {
    this.index = this.index.bind(this);
  }

  index(req, res) {
    res.marko(indexTpl, {
      title: 'Hello World!'
    })
  }
}

module.exports = new Home();
