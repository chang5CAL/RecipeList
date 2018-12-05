//From W3School's NodeJS tutorial
//https://www.w3schools.com/nodejs/nodejs_http.asp
//https://www.w3schools.com/nodejs/nodejs_url.asp
var http = require('http');
var mysql = require('mysql');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();

//Copied from http://classes.engr.oregonstate.edu/eecs/spring2018/cs340-400/using_node_on_engr_servers/index.html
var pool = mysql.createConnection({
  connectionLimit : 1,
  host            : 'den1.mssql7.gear.host',
  database        : 'recipelist',
  user            : 'recipelist',
  password        : 'Tz9N_5d4n7B~',
});
//I should note, the table should already exist.

//Note to self: Convert this to expressjs later.

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
          var sql = "INSERT INTO `cs340_changle_users` VALUES("+ split[4] + ","+ split[5]+")";
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
          var sql = "INSERT INTO `cs340_changle_users_recipe` VALUES("+ split[4] + ","+ split[5]+")";
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
          var sql = "INSERT INTO `cs340_changle_user_ingredients` VALUES("+ split[4] + "," + split[5]+")";

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "INSERT INTO `cs340_changle_user_equipment` VALUES(" + split[4] + "," + split[5]+")";
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else if (split[2] == "update"){
      if(split[3] == "user"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "UPDATE `cs340_changle_users` SET password = " + split[4] + " WHERE username = " + split[5];
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "ingredients"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "UPDATE `cs340_changle_user_ingredients` SET ingredientid = " + split[4] + "WHERE userid = " + split[5];
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else if (split[2] == "delete"){
      if(split[3] == "recipe"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Recipe User Connected!");
          var sql = "DELETE FROM `cs340_changle_user_recipe` WHERE recipeid = " + split[4] + " AND userid = " + split[5];
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
          var sql = "DELETE FROM `cs340_changle_user_ingredients` WHERE ingredientid = " + split[4] + " AND userid = " + split[5];

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "DELETE FROM `cs340_changle_user_equipment` WHERE equipmentid = " + split[4] + " AND userid = " + split[5];

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else if (split[2] == "read"){
      if(split[3] == "recipe"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Recipe User Read Connected!");
          var sql = "SELECT * FROM `cs340_changle_recipe` WHERE id IN (SELECT recipeid from `cs340_changle_user_recipe` WHERE userID = " +
          split[4] + ")";

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
            console.log(result);
            //pool.end();
          });
        });
      }
      else if(split[3] == "ingredient"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Ingredient User Read Connected!");
          var sql = "SELECT * FROM `cs340_changle_ingredients` WHERE id IN (SELECT ingredientid from `cs340_changle_user_ingredients` WHERE userID = "+
          split[4] + ")";

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment User Connected!");
          var sql = "SELECT * AS FROM `cs340_changle_equipment` WHERE id IN (SELECT equipmentid from `cs340_changle_user_equipment` WHERE userID = "+
          split[4] + ")";

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
          var sql = "INSERT INTO `cs340_changle_recipe` VALUES("+ split[4] + "," + split[5] + "," + split[6] + "," + split[7]+")";
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "ingredient"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Ingredient Recipe Connected!");
          var sql = "INSERT INTO `cs340_changle_recipe_ingredients` VALUES("+ split[4] + "," + split[5]+")";

          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
      else if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment Recipe Connected!");
          var sql = "INSERT INTO `cs340_changle_recipe_equipment` VALUES (" + split[4] + "," + split[5]+")";
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else if (split[2] == "delete"){
      if(split[3] == "equipment"){
        pool.connect(function(err){
          if (err) throw err;
          console.log("Equipment Recipe Connected!");
          var sql = "DELETE FROM `cs340_changle_user_recipe` WHERE recipeid = " + split[4] + " AND userid = " + split[5];
          pool.query(sql,function(err,result,fields){
            if (err) throw err;
          });
        });
      }
    }
    else if (split[2] == "read"){
      pool.connect(function(err){
        if (err) throw err;
        console.log("Equipment Recipe Connected!");
        var sql = "SELECT * FROM cs340_changle_recipe";
        pool.query(sql,function(err,result,fields){
          if (err) throw err;
          console.log(result);
          return result;
        });
      });
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
