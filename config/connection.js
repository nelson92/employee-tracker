const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
})
db.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = { db }