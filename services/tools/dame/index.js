const $ = require('config');
const _ = require('lodash');
const redis = require('redis');
const request = require('request-promise');
const queryString = require('query-string');
const redisClient = redis.createClient($.clients.redis);
const indexTpl = require($.alias.viewsDir('tools/dame/index'));

class Dame {
  constructor() {
    this.index = this.index.bind(this);
    this.getVideosPermissions = this.getVideosPermissions.bind(this);
    this.setVideosPermissions = this.setVideosPermissions.bind(this);
    this.purge = this.purge.bind(this);

    this.KEY_VIDEOS_PERMISSIONS = 'videos:permissions:toggle';

    this._fetchPurgesData();
  }

  _fetchPurgesData() {
    request({
      uri: 'https://supersoccer.github.io/api/back-office/purges.json',
      method: 'GET',
      json: true,
    })
    .then((data) => {
      redisClient.set(`${$.app.name}:purges`, JSON.stringify(data))
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getVideosPermissions(req, res) {
    redisClient.get(this.KEY_VIDEOS_PERMISSIONS, (err, reply) => {
      if (err) {
        return res.json({ error: err });
      }

      res.json({ data: { videosPermissions: parseInt(reply) === 1 }});
    });
  }

  setVideosPermissions(req, res) {
    let status = 0;

    if (req.body.toggle) {
      redisClient.set(this.KEY_VIDEOS_PERMISSIONS, parseInt(req.body.toggle));
      status = 1;
    }

    res.json({ status: status });
  }

  purge(req, res) {
    if (_.isUndefined(req.body.key)) {
      return res.json({ status: 0 });
    }

    if (req.body.key) {
      return redisClient.keys(req.body.key, (err, rows) => {
        if (rows.length > 0) {
          for (let row of rows) {
            redisClient.del(row)
          }
        }

        if (req.body.key === `${$.app.name}*`) {
          this._fetchPurgesData();
        }

        res.json({
          status: 1,
          rows: rows.length,
        });
      });
    }

  }

  impersonate(req, res) {
    request.post({
      url: `${$.auth.domain}/_/oauth2/v1/token`,
      json: {
        app_key: $.app.appKey,
        app_secret: $.app.appSecret,
        grant_type: "client_credentials",
        scope: 'https://api.supersoccer.tv/users/users.session.read'
      }
    }, (error, response, body) => {
      res.header('Authorization', "Bearer " + body.access_token);

      let qs = {
        login: 1
      };

      if (req.body.impersonate_email) qs.email = req.body.impersonate_email;
      if (req.body.impersonate_phone) qs.phone = req.body.impersonate_phone;
      if (req.body.impersonate_uid) qs.uid = req.body.impersonate_uid;

      var url = `${$.auth.domain}/_/v1/users/session?`+queryString.stringify(qs);

      res.set('Content-Type', 'text/html');
      res.write(`<html><script>
var xhr = new XMLHttpRequest();
xhr.open('GET', "`+url+`", true);
//xhr.withCredentials = true;
xhr.setRequestHeader("Authorization", "Bearer `+ body.access_token+`");
//xhr.responseType = "blob";
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ( xhr.status == 200 ) {
//    window.close();
    } else {
      document.body.innerHTML = xhr.status;
      window.abc = xhr;
    }
  }
};
xhr.send(null);
</script></html>`);
      res.end();
    });
  }

  index(req, res) {
    let data = {};

    (new Promise((resolve, reject) => {
      redisClient.get(`${$.app.name}:purges`, (err, purges) => {
        if (err) {
          reject(err);
        }

        purges = JSON.parse(purges);
        data.purges = purges.data;

        resolve(data);
      });
    }))
    .then((data) => {
      res.marko(indexTpl, {
        purges: data.purges,
        app: $.app,
      })
    })
    .then((err) => {
      res.json(err);
    })

  }
}

module.exports = new Dame();
