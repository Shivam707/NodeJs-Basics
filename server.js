const express = require('express');
const app = express();
const port = 8024;


var http            = require('http');
var https           = require('https');
var path            = require('path');
var bodyParser      = require('body-parser');
var morgan          = require('morgan');


app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));

app.set('port', port);

// app.use(express.static(path.join(__dirname,'public')));

// main().catch(console.error);
   

app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'index.js';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log("error")
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
