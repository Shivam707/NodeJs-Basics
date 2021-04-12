const fetch = require("node-fetch");
    
    async function gitRepoApi(){
        const response = await fetch('https://api.github.com/users/mojombo/repos');
        const users = await response.json();
        return users;
    };


    const GitApiFunction  = gitRepoApi();
    GitApiFunction.then(data =>{
        module.exports = user = data;
            console.log(user);
        })
