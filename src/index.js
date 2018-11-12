//From W3School's NodeJS tutorial
//https://www.w3schools.com/nodejs/nodejs_http.asp
//https://www.w3schools.com/nodejs/nodejs_url.asp
var http = require('http');
var mysql = require('mysql');
var url = require('url');
var fs = require('fs');

//Copied from http://classes.engr.oregonstate.edu/eecs/spring2018/cs340-400/using_node_on_engr_servers/index.html
var pool = mysql.createConnection({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_changle',
  password        : '4469',
  database        : 'cs340_changle'
});
//I should note, the table should already exist.

http.createServer(function(req,res){
  //Splitting the URL from:
  //https://stackoverflow.com/questions/47093630/split-url-path-on-slash-with-express-or-node-url
  var full = url.parse(req.url).pathname;
  var split = full.split("/");

  if(split[1] == "user"){
    //User Commands
    if(split[2] == "add"){
    //From W3School's tutorial: https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
      if(split[3] == "register"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("User Registration Connected!");
          var sql = "INSERT INTO `cs340_changle_users` "+ split[4] + ","+ split[5];
          //Probably terrible security here to transmit a password. If this were a web app,
          //I'd probably opt to implement Firebase or something.
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "recipe"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Recipe User Connected!");
          var sql = "INSERT INTO `cs340_changle_users_recipe` "+ split[4] + ","+ split[5];
          //Probably terrible security here to transmit a password. If this were a web app,
          //I'd probably opt to implement Firebase or something.
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "ingredient"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Ingredient User Connected!");
          var sql = "INSERT INTO `cs340_changle_user_ingredients` "+ split[4] + "," + split[5];

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "INSERT INTO `cs340_changle_user_equipment` " + split[4] + "," + split[5];
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else{
      console.log("Not implemented.");
    }
  }
  else if(split[1] == "recipe"){
    //Recipe Commands
    if(split[2] == "add"){
      //From W3School's tutorial: https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
      if(split[3] == "recipe"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Recipe Connected!");
          var sql = "INSERT INTO `cs340_changle_recipe` "+ split[4] + "," + split[5] + "," + split[6] + "," + split[7];
          //Probably terrible security here to transmit a password. If this were a web app,
          //I'd probably opt to implement Firebase or something.
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "ingredient"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Ingredient Recipe Connected!");
          var sql = "INSERT INTO `cs340_changle_recipe_ingredients` "+ split[4] + "," + split[5];

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment Recipe Connected!");
          var sql = "INSERT INTO `cs340_changle_recipe_equipment` " + split[4] + "," + split[5];
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else{
      console.log("Not implemented.");
    }
  }
  else{
    console.log("Error, invalid text. Current Text: " + full);
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(req.url);
  res.end();
}).listen(3000);

module.exports.pool = pool;

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
