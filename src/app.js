const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const idSearch = require('./utils/idSearch')
const keyWordSearch = require('./utils/keyWordSearch')
const catSearch = require('./utils/catSearch')

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
        res.send({
            list: data[0].result
        })
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

app.listen(3000, ()=>{ //port is localhost:3000
    console.log('Server is listening on port 3000.')
})