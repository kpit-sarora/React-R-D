var dbconn =require('./api/data/dbconnection');
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var cors = require('cors');

dbconn.open();
var bodyParser=require('body-parser');

app.listen(4000);
console.log('Magic Happens on Port 4000');


app.use(function(req,res,next){

     console.log(req.method,req.url);
     next();
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',routes);


app.get('/',function(req,res){
    console.log('Got The Home');
  res.send("Welcome To Node Server")
})
