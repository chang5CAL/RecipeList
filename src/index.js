var http = require('http');
var mysql = require('mysql');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
}).listen(3000);

//From W3School's NodeJS mysql tutorial
//https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
//https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
var conUser = mysql.createConnection({
  host: "localhost".
  database: "recipes"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO `cs340_changle_users` VALUES " + username + " " password;
});

app.get('/',function(req,res){
  if(){
    res.sendFile("app.component.html");
  }
  res.end();
});

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
