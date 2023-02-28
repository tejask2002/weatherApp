const express = require('express')
const path =require('path')
const app = express();
const hbs = require('hbs')
const static_path = path.join(__dirname,"../public")
const template_path=  path.join(__dirname,"../templates/views")
const partial_path= path.join(__dirname,"../templates/partials")
app.set('view engine','hbs')
app.set('views',template_path)

hbs.registerPartials(partial_path)

app.use(express.static(static_path))
app.get('/',(req,res)=>{
   res.render('index.hbs')
})

app.get('/about',(req,res)=>{
    res.render('about.hbs')
 })

app.get('/weather',(req,res)=>{
    res.render('weather')
 })

app.get('*',(req,res)=>{
    res.render('error')
 })
app.listen(8000,()=>{
  console.log('listening')
})