"use strict";
// Functions in TypeScript
// Basic Function
// Define the types for parameters and return values.
function multiply(a, b) {
    return a * b;
}
const result = multiply(4, 5); // result is inferred to be a number
// Optional Parameters
// Parameters can be optional using '?'. If not provided, it will be 'undefined'.
function sayHello(name, greeting) {
    return `${greeting || "Hi"}, ${name}`;
}
console.log(sayHello("Jake")); // "Hi, Jake"
console.log(sayHello("Jake", "Hello")); // "Hello, Jake"
// Default Parameters
// Set default values for parameters. The default is used if the argument is missing.
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // 9
console.log(power(3, 3)); // 27
const subtract = (x, y) => x - y;
console.log(subtract(15, 8)); // 7
// Arrow Functions
// Use arrow functions with type annotations.
const divide = (x, y) => x / y;
console.log(divide(20, 4)); // 5
// Void Return Type
// Use 'void' when a function doesn't return a value.
function logOutput(message) {
    console.log(message);
}
logOutput("This is a console log.");
function triple(x) {
    if (typeof x === "number") {
        return x * 3;
    }
    else if (typeof x === "string") {
        return x + x + x;
    }
}
console.log(triple(7)); // 21
console.log(triple("Go")); // "GoGoGo"
// Rest Parameters
// Gather multiple parameters into an array using '...'.
function sumAll(...values) {
    return values.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(5, 10, 15)); // 30
const admin = {
    username: "admin123",
    displayName() {
        console.log(`Welcome, ${this.username}`);
    }
};
admin.displayName(); // "Welcome, admin123"
// Never Return Type
// Use 'never' for functions that never return (e.g., they always throw an error).
function throwError(message) {
    throw new Error(message);
}
// Uncommenting this line will throw an error when the function is called
// throwError("Critical failure!");
// Summary:
// - **Basic Function**: Define parameter and return types.
// - **Optional & Default Params**: Handle cases where arguments might be missing.
// - **Function Types**: Define the shape of functions using types.
// - **Arrow Functions**: Use arrow functions with type annotations.
// - **Void & Never**: Specify return types for functions with no return or that never return.
// - **Overloading**: Handle multiple argument types in a single function.
// - **Rest Params**: Collect multiple arguments into an array.
// - **This Typing**: Ensure correct `this` context in methods.
