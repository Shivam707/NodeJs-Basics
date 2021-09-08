// -------------------------------this is how call() works------------------------------
var greet = {
    fullname : function(){
        return this.fname + " " + this.lname;
    }
}

var person1 = {
    fname : "Shivam",
    lname : "Kumar"
}

var person2 = {
    fname : "Shubham",
    lname : "Sharma"
}

// console.log(greet.fullname.call(person2));

// Function outside the object

var MyName = function(hometown,profession){
    return "Hi I am " + this.fname + " " + this.lname + " from " + hometown + " I am a " + profession;
}

// console.log(MyName.call(person1,"Delhi"));

//----------------------Apply Method - we pass a list of arguments instead of passing individually-----------------

// console.log(MyName.apply(person1,["Delhi","Software Engineer"]));


// --------------------Bind Method -same as call function Returs the copy of function------------------------
let MyDetails = MyName.bind(person1,"Delhi","Software Engineer");

console.log(MyDetails());


