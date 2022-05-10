const db = require('./index.js');

const models = {
  getAll: (callback) => {
    const queryStr = 'SELECT * FROM sentences';
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  post: (req, callback) => {
    let { sentence } = req.body;
    const queryStr = `INSERT INTO sentences(sentence) VALUES ('${sentence}')`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }

}

module.exports = models;