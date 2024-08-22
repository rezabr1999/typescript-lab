// Objects in TypeScript
// Just like in JavaScript, but you can define the shape (types) of the object.
let person2: { name: string; age: number } = {
    name: "John",
    age: 30
};

// Optional properties are allowed
let anotherPerson: { name: string; age?: number } = {
    name: "Alice"
};


// Interfaces
// Think of these as blueprints for objects, defining the structure they should have.
interface Person {
    name: string;
    age: number;
}

// another example
interface Labtop {
    readonly manufactor : string;
    model : string;
    year? : number;
}

// You can now create objects that match the Labtop interface
let legion: Labtop = {
    manufactor: 'lenovo',
    model: 'legion',
    year: 2022,
}
// You can now create objects that match the Person interface
let user: Person = {
    name: "Alice",
    age: 25
};

// Optional and Readonly Properties in Interfaces
// Use '?' for optional properties and 'readonly' to prevent changes.
interface Car {
    brand: string;
    model: string;
    year?: number;  // 'year' is optional
}

interface Book {
    readonly title: string;
    author: string;
}

let myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
};

let myBook: Book = {
    title: "1984",
    author: "George Orwell"
};

// Interfaces with Functions
// You can also define the shape of functions.
interface Greet {
    (name: string): string;
}

const greet: Greet = (name) => {
    return `Hello, ${name}`;
};

// Extending Interfaces
// Create more specific types by extending existing ones.
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
};

// Interfaces vs. Type Aliases
// Interfaces are great for objects and classes. Types are more flexible.
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

// Types can also be used for unions, intersections, etc.
type ID = string | number;
