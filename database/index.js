const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'every3'
});

db.connect((err) => {
  if (err) {
    console.log('Failed to Connect');
  } else {
    console.log('Connection Established to DB!')
  }
});

module.exports = db;