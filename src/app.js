const path = require('path')
const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

const app = express()

const idSearch = require('./utils/idSearch')
const keyWordSearch = require('./utils/keyWordSearch')
const catSearch = require('./utils/catSearch')
const catList = require('./utils/catList')

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'Amohos5901.',
})

pool.getConnection((err, connection) => {
	if (err) {
		console.log('Error connecting to the database:', err);
		return;
	}

	connection.query('CREATE DATABASE IF NOT EXISTS Hope_Hacks', (err) => {
		if (err) {
			console.log('Error creating the database:', err);
			return;
		}

		connection.query('USE Hope_Hacks', (err) => {   // ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
			if (err) {
				console.log('Error selecting the database:', err);
				return;
			}

			const sql = 'CREATE TABLE IF NOT EXISTS newsletter (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE)';
			connection.query(sql, (err) => {
				if (err) {
				console.log('Error creating the table:', err);
				return;
				}

				console.log('Database and table created successfully');
			});
		});
	});
	connection.release();
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    console.log(req.body)
    // Insert the email into the database
    const sql = 'INSERT INTO newsletter (email) VALUES (?)';
    pool.query(sql, [email], (err, results) => {
      if (err) {
        console.log('Error inserting email into the database:', err);
      }
      console.log('Email inserted into the database:', email);
      res.redirect('/');
    });
  });

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

app.get('/index', (req, res)=>{
    res.render('index',{ 
    })
})

app.get('/search', (req, res)=>{
    res.render('search',{ 
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{ 
    })
})

app.get('/appt', (req, res)=>{
    res.render('appt',{ 
    })
})

app.get('/recommend', (req, res)=>{
    res.render('recommend',{ 
    })
})

app.get('/idSearch', (req, res)=>{
    if(!req.query.lang){
        return res.send({error: "You must provide a lang query",})
    }
    if(!req.query.topicId){
        return res.send({error: "You must provide a topicId query",})
    }
    idSearch(req.query.lang, req.query.topicId).then(data =>{
        res.send({
            title: data[0].result
        })
    })
})

app.get('/keyWordSearch', (req, res)=>{
    if(!req.query.lang){
        return res.send({error: "You must provide a lang query",})
    }
    if(!req.query.keyWord){
        return res.send({error: "You must provide a keyWord query",})
    }
    keyWordSearch(req.query.lang, req.query.keyWord).then(data =>{
        if(data){
            res.send({
                list: data[0].result
            })
        }
        else{
            return res.send({error: "Invalid Search"})
        }
    })
})

app.get('/catSearch', (req, res)=>{
    if(!req.query.lang){
        return res.send({error: "You must provide a lang query",})
    }
    if(!req.query.categoryId){
        return res.send({error: "You must provide a category query",})
    }
    catSearch(req.query.lang, req.query.categoryId).then(data =>{
        res.send({
            list: data[0].result
        })
    })
})

app.get('/catList', (req, res)=>{
    if(!req.query.lang){
        return res.send({error: "You must provide a lang query",})
    }
    catList(req.query.lang).then(data =>{
        res.send({
            list: data[0].result.Item
        })
    })
})

app.listen(3000, ()=>{ //port is localhost:3000
    console.log('Server is listening on port 3000.')
})