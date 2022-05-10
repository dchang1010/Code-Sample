const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/test')
    .get(controllers.getAll)
    .post(controllers.post)

module.exports = router;