const express = require('express');

const app = express();

const fetch = require("node-fetch");



app.get('/api/git',(req, res)=>{
    async function gitRepoApi(){
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        return users;
    }
    const a = gitRepoApi();
    a.then(data =>{
        if(err){
            return err;
        }
       res.send(data);
    })
})

app.listen(9090,() => {
    console.log("Listening to 9090");
})
