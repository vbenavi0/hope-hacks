const mysql = require('mysql2'); //module
const connection = mysql.createConnection({
 host: 'localhost',
 database: 'Hope_Hacks_data', //name of mysql name file
 user: 'root', 
 password: 'password', // password of mySQl
});
connection.connect(function (err) {
 if (err) throw err;
 console.log('MySQL Database is Connected!!!!');
});

const user_email = connection.user_email;

const insertQuery = `INSERT INTO newsletter (${user_email}) VALUES (Email)`;

connection.query(insertQuery, [user_email],(err,results) => {
    if (err) {
        console.error('Error inserting data:', err);
    } else {
        console.log('Data inserted successfully:', results);
    }

})

module.exports = connection;