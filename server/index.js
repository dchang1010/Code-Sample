const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
//const router = require('./router.js');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error Starting Server!')
  } else {
    console.log('Connected! Listening on port:', PORT);
  }
})