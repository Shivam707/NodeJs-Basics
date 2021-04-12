var express= require("express");
var fs=require("fs");
var bp= require("body-parser");
var app= express();
var port=3306;

let mysql= require("mysql");

var connect = mysql.createConnection({

  host: 'localhost',
  user: 'shivam',
  password:'12345',
  database:'db_student'
});


//serves the main login page to the user
app.get('/', function(req,res){
var html= fs.readFileSync(__dirname+"/login.html");
res.write(html);
});

//serves the css of the login page
app.get('/logincss.css', function(req,res){
    res.sendFile(__dirname+"/logincss.css");
    });

//serves the css of the signup page
app.get('/signincss.css', function(req,res){
    res.sendFile(__dirname+"/signincss.css");
    });

//serves the css page of the signup portal
app.get('/signin.html', function(req,res){
    var html= fs.readFileSync(__dirname+"/signin.html");
    res.write(html);
});

//post request of signup page
app.use(bp.urlencoded({extended : true}));
app.post('/signinn',function(req,res){

   connect.connect(function(error){
    
    if(error)throw error;
    console.log("connected");
    let sql= 'INSERT INTO new_table(id,name) VALUES (100,"superman")';
    connect.query(sql,function(err,result){
      if(err)throw err;
      console.log("1 record inserted");
    });
    });
   
  });


//post request of the login page
app.use(bp.urlencoded({extended : true}));
app.post('/loginn',function(req,res){
 var username = req.body.name;
  var password = req.body.password;
  if (username && password) {
// check if user exists
      connect.query('SELECT * FROM users WHERE id = ? AND name = ?', [password,username], function(error, results, fields) {
          if (results.length > 0) {
              response.send('logged in successfully');
          } else {
              response.send('Incorrect Username and/or Password!');
          }           
      
      });
  } 

    
});

app.listen(port);
