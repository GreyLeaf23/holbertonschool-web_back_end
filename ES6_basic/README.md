# ES6 Basics Learning!




# General Questions:





## What is ES6?
ES6, also known as ECMAScript 2015, is a version of JavaScript that introduced several significant improvements and new features to the language.




## New features introduced in ES6?
Here are some of the key features introduced in ES6:

1. `let` and `const`: Block-scoped variable and constant declarations.
2. Arrow functions: A new syntax for writing functions.
3. Classes: A syntax for defining classes in JavaScript.
4. Template literals: Strings that can embed expressions.
5. Default, rest, and spread parameters: New ways to handle function parameters.
6. Modules: A syntax for importing and exporting values between modules.
7. Promises: A built-in constructor for creating and managing promises.
8. Destructuring assignment: A syntax for unpacking values from arrays or properties from objects.
9. Enhanced object literals: Shorter syntax for defining object literals.
10. Generators: Functions that can be paused and resumed, which are useful for asynchronous programming.
11. Map and Set: New data structures for storing collections of data.
12. Symbols: A new primitive data type.


These features have greatly enhanced the power and productivity of JavaScript, making it a more robust language for developing complex
applications.




## What's the difference between a constant and a variable?
In programming, a variable is a named storage location that can hold different values throughout the execution of the program.

In JavaScript, you declare a variable using the `var`, `let`, or `const` keyword.

The `var` keyword is function-scoped and can be updated and re-declared within its scope.

The `let` keyword is block-scoped and can be updated but not re-declared within its scope.

The `const` keyword is also block-scoped, but it cannot be updated or re-declared.

The main difference between a variable (declared with `let` or `var`) and a constant (declared with `const`) is that a variable's value can be
changed after it's declared, while a constant's value cannot be changed after it's declared.

Here's an example:

```javascript
let variable = "I can change";
variable = "See, I changed";

const constant = "I cannot change";


constant = "Trying to change me will result in an error"; // This will throw an error
```

In the above code, the `variable` can be reassigned to a new value, but trying to reassign the `constant` results in an error. This makes `const`
useful when you have a value that you know should not change throughout the execution of the program.




## What are block-scoped variables?
In JavaScript, we have two main ways to create these boxes(variables): `let` and `const`.

If you create a box with `let`, you can put something in it, and later you can take it out and put something else in. For example:

```javascript
let myBox = "first thing"; // I put "first thing" in the box
myBox = "second thing"; // I took out "first thing" and put "second thing" in
```

But if you create a box with `const`, once you put something in it, it's there forever. You can't take it out or put something else in. If you
try, JavaScript will give you an error. For example:

```javascript
const myBox = "only thing"; // I put "only thing" in the box
myBox = "trying to change"; // Error! I can't change what's in a const box
```

So, `let` is used when you want a box where the contents can change, and `const` is used when you want a box where the contents will never change.




## What are arrow functions and function parameters default to them?
Arrow functions are a more concise syntax for writing function expressions in JavaScript. They are defined using the `=>` syntax. Arrow functions
share the same lexical `this` as their surrounding code, which is different from traditional function expressions.

Here's an example of an arrow function:

```javascript
const greet = name => `Hello, ${name}!`;
console.log(greet('World')); // Outputs: Hello, World!
```

In the above example, `greet` is an arrow function that takes one parameter, `name`, and returns a greeting string.

Default function parameters allow you to specify default values for parameters. If a function is called without a value for a parameter that has a
default value, it will use the default value instead.

Here's an example of a function with a default parameter:

```javascript
const greet = (name = 'World') => `Hello, ${name}!`;
console.log(greet()); // Outputs: Hello, World!
```

In this example, if `greet` is called without an argument, it uses 'World' as the default value for `name`.




## What are rest and spread function parameters?
Rest and spread are two powerful features introduced in ES6 JavaScript.

The **rest parameter** syntax allows us to represent an indefinite number of arguments as an array. This can be useful when you want a function to
accept any number of arguments. Here's an example:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
```

In the above example, `...numbers` is a rest parameter. The function `sum` can accept any number of arguments, and those arguments are represented
as an array inside the function.

The **spread operator** allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or
elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object
literals) are expected. Here's an example:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // arr2 becomes [1, 2, 3, 4, 5, 6]

console.log(arr2); // Outputs: [1, 2, 3, 4, 5, 6]
```

In the above example, `...arr1` is a spread operator. It expands the array `arr1` into individual elements, so they can be included in the new
array `arr2`.




## What is string templating in ES6?
String templating in ES6, also known as template literals, is a new way to work with strings. It provides a more powerful and flexible way to
create strings, allowing embedded expressions, multi-line strings, and string interpolation.

You create a template literal by using backticks (`` ` ``) instead of quotes. You can include variables or expressions inside a template literal by wrapping them in `${}`.

Here's an example:

```javascript
let name = 'World';
let greeting = `Hello, ${name}!`;
console.log(greeting); // Outputs: Hello, World!
```

In the above example, `${name}` is an embedded expression. The value of the `name` variable is inserted into the string. This is called string interpolation.

You can also create multi-line strings easily with template literals:

```javascript
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);
```

In this example, the string spans multiple lines, and you don't need to use any special characters or concatenation to achieve this.




## What is object creation and their properties in ES6?
In ES6, there are several ways to create objects and define their properties:

1. **Object Literal Syntax Enhancement**: ES6 introduced a more concise way to define properties and methods in object literals.

```javascript
let name = 'John';
let age = 30;

let person = { name, age };

console.log(person); // Outputs: { name: 'John', age: 30 }
```

In the above example, the properties `name` and `age` are defined using the new shorthand syntax. If the property name is the same as the variable
name, you can just write it once.

2. **Computed Property Names**: ES6 allows you to use expressions for property names inside object literals.

```javascript
let propName = 'name';
let person = { [propName]: 'John' };

console.log(person); // Outputs: { name: 'John' }
```

In the above example, the property name is computed from the `propName` variable.

3. **Method Properties**: ES6 introduced a shorter syntax for defining methods inside object literals.

```javascript
let person = {
  name: 'John',
  greet() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // Outputs: Hello, John
```

In the above example, the `greet` method is defined using the new shorthand syntax. You don't need to use the `function` keyword.




## What are iterators and for-of loops?
Iterators and for-of loops in JavaScript are concepts related to handling and navigating through collections like arrays or strings.

An **iterator** is an object that provides a next() method which returns the next item in the sequence. This method returns an object with two
properties: `value` and `done`.

Here's an example of an iterator:

```javascript
let array = ['a', 'b', 'c'];
let iterator = array[Symbol.iterator]();

console.log(iterator.next()); // Outputs: { value: 'a', done: false }
console.log(iterator.next()); // Outputs: { value: 'b', done: false }
console.log(iterator.next()); // Outputs: { value: 'c', done: false }
console.log(iterator.next()); // Outputs: { value: undefined, done: true }
```

In the above example, `array[Symbol.iterator]()` returns an iterator for the array. The `next()` method is then used to get the next item in the
array.

A **for-of loop** is a loop that iterates over iterable objects (including arrays, strings, maps, sets, etc.), invoking a custom iteration hook
with statements to be executed for the value of each distinct property.

Here's an example of a for-of loop:

```javascript
let array = ['a', 'b', 'c'];

for (let value of array) {
  console.log(value); // Outputs: 'a', 'b', 'c'
}
```

In the above example, the for-of loop logs each value in the array to the console.
