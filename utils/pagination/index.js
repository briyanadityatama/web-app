const $ = require('config');
const queryString = require('query-string');

class Pagination {
  constructor(req, count) {
    this.hostname = $.app.hostname;
    this.path = req.path;
    this.originalUrl = this.hostname + req.originalUrl;
    this.query = req.query;
    this.query.p = req.query.p || '1';
    this.page = parseInt(this.query.p.replace(/[^0-9]*/, ''));
    this.limit = 25;
    this.start = (this.page - 1) * this.limit;
    this.count = parseInt(count) || 0;
    this.pages = Math.ceil(this.count / this.limit);
    this.next = this.page === this.pages ? false : this._url(this.page + 1);
    this.prev = this.page === 1 ? false : this._url(this.page - 1);
    this._list();
  }

  _url(page) {
    let qs = this.query;
    qs.p = page || 1;
    return `${this.hostname}${this.path}?${queryString.stringify(qs)}`;
  }

  _list() {
    this.list = [];
    for (let i = 1; i <= this.pages; i++) this.list.push({
      url: this._url(i),
      number: i,
    });
  }
}

module.exports = Pagination;
