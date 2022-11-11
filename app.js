const express = require("express");
const path=require("path");
const app=express(); 
const port =80;

app.use('/static',express.static('static'))

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))



app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})

// app.get("/about",(req,res)=>{
//     res.end("This is my first about page express app");
// })

app.post('/',(req,res)=>{
    res.status(200).render('index.pug');
})


app.listen(port,()=>{
    console.log(`Application started successfully on port ${port}`);

})