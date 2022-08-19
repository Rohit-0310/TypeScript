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



class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = new Student("Rohit", "Kumar");

console.log(greeter1(user1));



