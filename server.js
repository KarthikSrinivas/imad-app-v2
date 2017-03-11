var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'karthiksrinivas',
    database:'karthiksrinivas',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articles={
    

    "article-one" :{
    title:"pskarthikeyan1",
    con:`<p>
            serving the client 
        </p>`
    
   },
   "article-two":{
       title:"PSKARTHIKEYAN",
       con:`<p>
       SERVING THE CLIENT</p>   
        `},
       "articlethree":{
           title:"KARTHIK SRINIVAS",
           con:`<p>
           PRODUCT BASED
           </p>`
       }
    
};
function createTemplate(data){
    var title=data.title;
    var con=data.con;

var htmlTemplate=`
<html>
    <head>
        <title>
             ${title}
        </title>
         <link href="/ui/style.css" type="stylesheet"/>
    </head>
<body>
    
        <a href="/"> click here </a><br/>
        <h1 class="container">${con}</h1>
         <p>
            serving the client 
        </p>
    
</body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
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
var pool=new Pool(config);
app.get('/test-db',function(req,res){
   pool.query('SELECT * FROM  test',function(err,result){
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          res.send(JSON.stringify(result));
      }
   });
    
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
