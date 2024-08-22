// Number: This is for numeric values, like integers or decimals.
let age: number = 25;
let price: number = 19.99;



// String: Used for text, like words or sentences.
let firstName: string = "John";
let greeting: string = `Hello, ${firstName}!`;



/* Boolean: This is for true or false values, 
   good for yes/no or on/off kind of things. */
let isStudent: boolean = true;
let hasGraduated: boolean = false;



// Array: A list of items, all of the same type.
let scores: number[] = [90, 85, 88];
let names: string[] = ["Alice", "Bob", "Charlie"];



/* Tuple: Like an array, but you can mix types and it's a fixed size.
   Good for things like coordinates or key-value pairs. */
let person: [string, number] = ["Alice", 25];



/* Enum: A way to name a set of constants, 
   makes the code easier to read when you're dealing with specific options. */
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;



/* Any: This can be anything. 
   Useful if you don't know the type ahead of time, but be careful since it can be anything. */
let something: any = "Hello";
something = 42;  // Yep, this is fine.



/* Void: Used for functions that don't return anything.
   Usually for functions that do something instead of calculating and returning a value. */
function logMessage(message: string): void {
    console.log(message);
}



/* Null and Undefined: Represents the absence of a value.
   Null is when you explicitly set it to nothing, undefined is when you haven't set it at all. */
let u: undefined = undefined;
let n: null = null;



/* Object: Used for more complex structures with multiple properties.
   Think of it like a mini-database row or a configuration object. */
let personObject: { name: string; age: number } = {
    name: "John",
    age: 30
};
