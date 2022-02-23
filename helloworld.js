'use strict'
const MY_OBJECT = {'key': 'value'};
f2(MY_OBJECT);
f1(MY_OBJECT);

MY_OBJECT.tata = 'value';


async function f2(obj){
    
    return new Promise(function(print, reject){
        print(obj);
        function print(obj){
            console.log("obj")
        }
    }).then(function(obj){
        console.log("success")
    })
    
}




// console.log(MY_OBJECT);
function f1(obj){
    console.log(obj);
}