
let word = 'Hello World!';

console.log(word);

document.write(word)

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



let num: number = 25;
num = 50;
console.log(num);


let city: object;


city = ['delhi', 'mumbai', 'kolkata'];
console.log("City :-", city)




interface Person1 {
    fName: string;
    lName: string;
    [key: string]: any;
}


const person1: Person1 = {
    fName: "Prakash",
    lName: "Steve"
}

const person2: Person1 = {
    fName: "Shubham",
    lName: "Kumar",
    age: 24,
    gender: "male"
}


console.log("person1", person1)
console.log("person2", person2)

//Function

const math = (x: number, y: number) => {
    return Math.pow(y, x)
}


console.log(math(2, 5));


// Array


type MyArr = [number?, string?, boolean?]


const arr: MyArr = [];


arr.push(5)
arr.push("56")
arr.push(false)
arr.push("Mohan")
arr.push(true)


console.log(arr)






let x: number;
x = Math.random();

console.log(x)



//Key Concept  - Type compatibility depends on the list of properties of a type

// interface Course {
//     name: string;
//     lessonCount: number;
// }
// interface Named {
//     name: string;
// }
// let named: Named = {
//     name: 'Name goes here'
// };
// let course: Course = {
//     name: 'Components and Directives',
//     lessonCount: 20
// };
// named = course;
// course = named;




interface Course {
    name: string;
    lessonCount?: number;
}
interface Named {
    name: string;
}
let named: Named = {
    name: 'Name goes here'
};
let course: Course = {
    name: 'Components and Directives',
    lessonCount: 20
};

//Before
console.log("Before_course", course);
console.log('Before_named', named);

console.log("----------------Break----------------")
named = course;
course = named;

//After
console.log("After_course", course);
console.log('After_named', named);


//Any Type
let data: string = "abccd";

data = "Name"


console.log("data", data)

//Type declaration new way
let username = {} as { name: string };
username.name = 'John'

console.log("username", username)




let uname: any = {}
uname.name = 'John'


console.log("uname", uname)
