
const obj1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            const roll = [1,2,3,4,5,6,7,8,9];
            // console.log(roll);
            resolve(roll);
        }, 2000);
});


async function getd(){
    const data = await obj1;
    console.log(data);
}
getd();
