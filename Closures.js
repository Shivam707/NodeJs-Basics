// A Closure is a function bundled together with its lexical environment. Cl
//  Or it is a way to access the outer function from the inner function.
function x(){
    let a = 12;
    function y(){
        console.log(a); // can also return a;
    }
    return y; 
}
/* above function can be written like this as well.
function x(){
    let a = 12;
    return function y(){
        console.log(a); // can also return a;
    }
}
*/
let z = x();
console.log(z); //logs the function y
z() //prints the value of a


function f1(){
    let x = 100;
    function f2(){
        let y = 200;
        function f3(){
            console.log(x,y); // accessing lexical and parent's lexical environment.
        }
        y = 500;
        f3();
    }
    f2();
}

f1() // 100 500