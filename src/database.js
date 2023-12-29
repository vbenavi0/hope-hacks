const mysql = require('mysql2'); //module
const connection = mysql.createConnection({
 host: 'localhost',
 database: 'Hope_Hacks', //name of mysql name file
 user: 'root', 
 password: 'password', // password of mySQl
 port: 3000
});

connection.connect(function (err) {
 if (err) throw err;
 console.log('MySQL Database is Connected!!!!');

 connection.query(" CREATE DATABASE IF NOT EXISTS Hope_Hacks", function (err, result) {
    if (err) throw err;
    console.log("Databse created")
 })
 const sql = "CREATE TABLE IF NOT EXISTS newsletter (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
  const email = '';
  const insertQuery = `INSERT INTO newsletter (email) VALUES ('${email}')`;
  connection.query(insertQuery, function(err, result) {
    if (err) throw err;
    console.log("record inserted")
  })
  connection.end();
});







