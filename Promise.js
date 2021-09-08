// function Fun() {
//     return  new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log("Your promise has been completed!");
//                 resolve();
//             }
//             else {
//                 console.log("Your promise has been rejected!");
//                 reject("Sorry for inconvinence");
//             }
//         }, 2000);
//     })
// }

// Fun().then(function() {
//     console.log("thanks for my work");
// }).catch(function(error){
//     console.log("Very bad ! " + error);
// })


// // Promise: Best video on promises
// // -resolve
// // -reject
// // -pending

// // function func1() {
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(() => {
// //             const error = true;
// //             if (!error) {
// //                 console.log('Function: Your promise has been resolved')
// //                 resolve();
// //             }
// //             else {
// //                 console.log('Function: Your promise has not been resolved')
// //                 reject('Sorry not fulfilled');
// //             }
// //         }, 2000);
// //     })
// // }

// // func1().then(function(){
// //     console.log("Harry: Thanks for resolving")
// // }).catch(function(error){
// //     console.log("Harry: Very bad bro. Reason: " + error)
// // })


console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            
        });
        // document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
