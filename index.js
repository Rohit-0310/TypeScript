let word = 'Hello World!';
console.log(word);
document.write(word);
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Rohit", lastName: "Kumar" };
console.log(greeter(user));
class Student {
    firstName;
    lastName;
    fullName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
}
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user1 = new Student("Rohit", "Kumar");
console.log(greeter1(user1));
let num = 25;
num = 50;
console.log(num);
let city;
city = ['delhi', 'mumbai', 'kolkata'];
console.log("City :-", city);
const person1 = {
    fName: "Prakash",
    lName: "Steve"
};
const person2 = {
    fName: "Shubham",
    lName: "Kumar",
    age: 24,
    gender: "male"
};
console.log("person1", person1);
console.log("person2", person2);
//Function
const math = (x, y) => {
    return Math.pow(y, x);
};
console.log(math(2, 5));
const arr = [];
arr.push(5);
arr.push("56");
arr.push(false);
arr.push("Mohan");
arr.push(true);
console.log(arr);
let x;
x = Math.random();
console.log(x);
let named = {
    name: 'Name goes here'
};
let course = {
    name: 'Components and Directives',
    lessonCount: 20
};
//Before
console.log("Before_course", course);
console.log('Before_named', named);
console.log("----------------Break----------------");
named = course;
course = named;
//After
console.log("After_course", course);
console.log('After_named', named);
//Any Type
let data = "abccd";
data = "Name";
console.log("data", data);
//Type declaration new way
let username = {};
username.name = 'John';
console.log("username", username);
let uname = {};
uname.name = 'John';
console.log("uname", uname);
