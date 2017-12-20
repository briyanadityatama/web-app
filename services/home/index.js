const $ = require('config');
const indexTpl = require($.alias.views + '/home/index');

class Home {
  constructor() {
    this.index = this.index.bind(this);
  }

  index(req, res) {
    // Data processing here
    const people = {
      foo: 'Foo',
      bar: 'Bar',
    };

    res.marko(indexTpl, {
      title: 'Hello World!',
      data: {
        people: people,
      },
    });
  }
}

module.exports = new Home();
