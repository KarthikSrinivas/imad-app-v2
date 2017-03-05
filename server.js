var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:"pskarthikeyan",
    con:`<p>
            serving the client 
        </p>`
    
};
function createTemplate(data){
    title=data.title;
    con=data.con;

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
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/articletwo',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html')); 
});
app.get('/articlethree',function(req,res){
    res.sendFile(path.join(__dirname,'ui','articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article',function(req,res){
    res.send("article 1 requested");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
