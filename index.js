const express=require('express')
const app=express()
const recipeRoute=require('./routes/recipesRoute')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
let jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
// app.get('/recipes',(req,res)=>{
//     const json=require('./model/dummy.json')
//     const desserts=require('./model/desserts.json')
//     res.render('recepti.ejs',{recepti:json,desserts:desserts})
// })
// app.get('/recipes/search',(req, res) => {
//  const sqr = req.query;
//     res.send(sqr)
// })
app.use('/recipes',recipeRoute)

const port= 3000 || process.env.PORT

app.listen(port,()=>console.log(`server running at port ${port}`))