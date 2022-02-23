let usersMob = [4,5,8,10];
let parseDataMob = [1,2,3,4,5,6,7,8,9];
// 4,5,8 - IVR,Disha
// 10 - Disha usersMob non common elements
// 1,2,3,6,7,9 - IVR parseDataMob Non common elements
let commonArray = [];
for(let i = 0; i < parseDataMob.length; i++){
    if(usersMob.indexOf(parseDataMob[i]) > -1){
        commonArray.push(parseDataMob[i]);
    }
    console.log(usersMob[i]);
}