var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');
var crypto=require('crypto');
var config={
    user:'karthiksrinivas',
    database:'karthiksrinivas',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names=[];
app.get("/submit",function(req,res){
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article',function(req,res){
    res.send("article 1 requested");
});
var counter=0;
app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});
var pool=new Pool(config);
