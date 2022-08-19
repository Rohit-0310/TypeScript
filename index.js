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
console.log(city);
