var word = 'Hello World!';
console.log(word);
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Rohit", lastName: "Kumar" };
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = new Student("Rohit", "Kumar");
console.log(greeter1(user1));
var num = 25;
num = 50;
console.log(num);
var city;
city = ['delhi', 'mumbai', 'kolkata'];
console.log("City :-", city);
var person1 = {
    fName: "Prakash",
    lName: "Steve"
};
var person2 = {
    fName: "Shubham",
    lName: "Kumar",
    age: 24,
    gender: "male"
};
console.log("person1", person1);
console.log("person2", person2);
//Function
var math = function (x, y) {
    return Math.pow(y, x);
};
console.log(math(2, 5));
var arr = [];
arr.push(5);
arr.push("56");
arr.push(false);
arr.push("Mohan");
arr.push(true);
console.log(arr);
var x;
x = Math.random();
console.log(x);
var named = {
    name: 'Name goes here'
};
var course = {
    name: 'Components and Directives',
    lessonCount: 20
};
// named = course;
// course = named;
console.log("course", course);
console.log('named', named);
