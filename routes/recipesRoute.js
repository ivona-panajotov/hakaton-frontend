const express=require('express')
const router=express.Router()
let mysql = require('mysql');
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hakaton"
});


router.get('/',(req,res)=>{
    const json=require('../model/dummy.json')
    const desserts=require('../model/desserts.json')
    let sql='(SELECT * FROM recepti WHERE type="salty")UNION(SELECT * FROM recepti WHERE type="sweet")'
        con.query(sql, function (err, result) {
          if (err) throw err;
          res.render('recepti.ejs',{recipes:result,desserts:desserts})

        });
})
router.get('/all',(req,res)=>{
    res.send('all recipes')
})
router.get('/food',(req,res)=>{
    res.render('../views/recepti')
})

router.post('/',(req,res)=>{
  console.log(req.body)
})

router.get('/:id',(req,res)=>{
    res.send('recipe by id')
})

module.exports=router