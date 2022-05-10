const models = require('../database/models.js');

const controllers = {
  getAll: (req, res) => {
    models.getAll((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  post: (req, res) => {
    models.post(req, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(console.log('Post Successful!', data));
      }
    })
  }

}

module.exports = controllers;