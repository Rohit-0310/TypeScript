var word = 'Hello World!';
console.log(word);
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Rohit", lastName: "Kumar" };
console.log(greeter(user));
