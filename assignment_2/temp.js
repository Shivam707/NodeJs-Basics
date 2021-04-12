// const { json } = require('express');
const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'1234',
    database:'student'
});

mysqlconnection.connect((err) => {
    if(!err){
        console.log("Succesful");
    }
    else{
        console.log("Failed to connect"+JSON.stringify(err,undefined,2));
    }
})