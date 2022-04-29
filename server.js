const express = require('express');

const morgan = require('morgan');

const bodyparser = require('body-parser');
const path =require('path');

const app = express();


//log request
app.use(morgan('tiny'));

//parse rquest to body parser

app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs "))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));  
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


app.get('/',(req,res)=>{
    res.render("index");
})
app.listen(3000,()=>{console.log('Server is running on http://localhost:${PORT}')});