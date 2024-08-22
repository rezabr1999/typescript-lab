"use strict";
// Generics in TypeScript
// What Are Generics?
// Generics allow you to create reusable components that work with different types.
function identity(arg) {
    return arg;
}
// You can call this function with different types
const stringIdentity = identity("Hello");
const numberIdentity = identity(42);
// The type argument can be inferred, so you don't have to explicitly pass it
const inferredStringIdentity = identity("Inferred Hello");
const inferredNumberIdentity = identity(99);
// Generic Functions with Multiple Types
// You can use multiple generics in a single function
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const mergedObject = merge({ name: "Alice" }, { age: 25 });
console.log(mergedObject); // { name: "Alice", age: 25 }
// Generics with Arrays
// Generics are useful for working with arrays of different types
function getFirstElement(arr) {
    return arr[0];
}
const firstNumber = getFirstElement([10, 20, 30]);
const firstString = getFirstElement(["a", "b", "c"]);
const stringBox = { contents: "A string" };
const numberBox = { contents: 100 };
// Generic Constraints
// You can constrain generics to specific types
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
// Using generics with classes
// Generics can be applied to classes too
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop()); // "World"
// Default Type for Generics
// You can provide default types for generics
function createPair(first, second) {
    return [first, second];
}
const defaultPair = createPair("Hello", 42); // [string, number]
const customPair = createPair(true, "Yes"); // [boolean, string]
// Summary:
// - **Generics**: Make functions, classes, and interfaces more flexible by allowing them to work with different types.
// - **Inference**: TypeScript can often infer the generic type, so you don't always need to specify it.
// - **Constraints**: Limit generics to certain types using constraints.
// - **Defaults**: Provide default types for generics if none are provided.
