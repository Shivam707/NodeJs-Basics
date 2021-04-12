const express = require('express');
const gitapi = require('./GitApi');

const app = express();

console.log(gitapi.user);


app.get('/api/git',(req, res)=>{
    res.send(gitapi.user);
})

app.listen(9090,() => {
    console.log("Listening to 9090");
})
