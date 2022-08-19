let word = 'Hello World!';

console.log(word);


// function greeter(person) {
//     return "Hello, " + person;
// }

// let user = "User";

// console.log(greeter(user));




interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Rohit", lastName: "Kumar" };

console.log(greeter(user));



