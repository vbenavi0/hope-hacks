const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const idSearchEn = require('./utils/idSearchEn')
const idSearchEs = require('./utils/idSearchEs')
const keyWordSearchEn = require('./utils/keyWordSearchEn')
const keyWordSearchEs = require('./utils/keyWordSearchEs')

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

app.get('/idSearchEn', (req, res)=>{
    if(!req.query.topicId){
        return res.send({error: "You must provide a topic",})
    }
    idSearchEn(req.query.topicId).then(data =>{
        res.send({
            title: data[0].result
        })
    })
})

app.get('/idSearchEs', (req, res)=>{
    if(!req.query.topicId){
        return res.send({error: "You must provide a topic",})
    }
    idSearchEs(req.query.topicId).then(data =>{
        res.send({
            title: data[0].result
        })
    })
})

app.get('/keyWordSearchEn', (req, res)=>{
    if(!req.query.keyWord){
        return res.send({error: "You must provide a keyWord",})
    }
    keyWordSearchEn(req.query.keyWord).then(data =>{
        res.send({
            list: data[0].result
        })
    })
})

app.get('/keyWordSearchEs', (req, res)=>{
    if(!req.query.keyWord){
        return res.send({error: "You must provide a keyWord",})
    }
    keyWordSearchEs(req.query.keyWord).then(data =>{
        res.send({
            list: data[0].result
        })
    })
})

app.listen(3000, ()=>{ //port is localhost:3000
    console.log('Server is listening on port 3000.')
})