function hello(user){
    return "Hello "  + user +"!";
}
function Bye(user){
    return "Bye "  + user +"!";
}
function greetings(user,cb){
    return cb(user);
}

const Hello = greetings("Shivam",hello);
const BYE = greetings("Shivam",Bye);

console.log(Hello);
console.log(BYE);