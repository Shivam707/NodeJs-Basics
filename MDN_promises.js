async function promise(){
    try{
        await new Promise(console.log("Hii")).then(function (){
            console.log("success");
        }).catch(function(){
           console.log("Error" + err);
        })
    }catch(err){
        console.error(err);
    }
}

promise()