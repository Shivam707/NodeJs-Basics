var array = [1,2,3,4,5,-8,-54,-23,564,-675,-785,-3244,-564,-234,65];
var b = [1,2,3,34,435,432,21,65,4765,8,574,643];
// function isEven(value){

//     return value%2 == 0 ? 1 : 0;
// }

// array.filter(isEven);

// for(var i = 0; i < array.length; i++){
//         if(!isEven(array[i])){
//             array.splice(i,1);
//             i--;
//         }

//         // console.log(array[i]);
// }


// for(var i = 0; i < b.length; i++){
//     console.log(b[i]);
// }

var intersection = array.filter(element => b.includes(element));

console.log("intersection");
for(var i = 0; i < intersection.length; i++){
    console.log(intersection[i]);
}

