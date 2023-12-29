const path = require('path')
const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql2')

const app = express()

const databaseConfig = require('./database')

const pool = mysql.createPool(databaseConfig)

pool.getConnection((err, connection) => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connecting to the databse');

    connection.release();
})

const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views') //directory for hbs files
const partialPath = path.join(__dirname, '../templates/partials') //directory for partial files

app.set('view engine', 'hbs') //tells express to use our handlebar hbs files
app.set('views', viewPath) //tells express where views folder is
hbs.registerPartials(partialPath) //tells hbs where to find partials

app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index',{ 
    })
})

app.listen(3000, ()=>{ //port is localhost:3000
    console.log('Server is listening on port 3000.')
})