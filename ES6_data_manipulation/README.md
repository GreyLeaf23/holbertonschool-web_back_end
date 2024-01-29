# ES6 Data Manipulation Learning!




# General Questions:




## How to use map, filter and reduce on arrays?
In ES6, `map`, `filter`, and `reduce` are higher-order functions that operate on arrays. Here's a brief explanation and examples of each:

**map**: The `map` function creates a new array with the results of calling a provided function on every element in the array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
```

**filter**: The `filter` function creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
```

**reduce**: The `reduce` function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a
single value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0); // 15
```

In the `reduce` example, `0` is the initial value of the accumulator `total`. If no initial value is supplied, the first element in the array will be
used.




## What are typed arrays?
Typed Arrays in JavaScript are array-like objects and provide a mechanism for accessing raw binary data. They come in several forms, each designed to
work with a specific type of data, and are more efficient than regular JavaScript arrays for storing and manipulating binary data.

Here are some types of Typed Arrays:

- `Int8Array`: An array of 8-bit signed integers.
- `Uint8Array`: An array of 8-bit unsigned integers.
- `Int16Array`: An array of 16-bit signed integers.
- `Uint16Array`: An array of 16-bit unsigned integers.
- `Int32Array`: An array of 32-bit signed integers.
- `Uint32Array`: An array of 32-bit unsigned integers.
- `Float32Array`: An array of 32-bit floating point numbers.
- `Float64Array`: An array of 64-bit floating point numbers.

Here's an example of how to use a Typed Array:

```javascript
let intArray = new Int32Array(4);
intArray[0] = 42;
console.log(intArray[0]); // Outputs: 42
```

In this example, `intArray` is a Typed Array that can hold four 32-bit signed integers.




## The Set, Map, and Weak link data structures?
In JavaScript, Set, Map, and Weak versions of these structures are special kinds of data structures:

**Set**: A Set is a collection of unique values. Duplicates are not allowed in a Set.

```javascript
let mySet = new Set();
mySet.add(1); // Set [ 1 ]
mySet.add(2); // Set [ 1, 2 ]
mySet.add(2); // Still Set [ 1, 2 ], duplicates are not allowed
```

**Map**: A Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

```javascript
let myMap = new Map();
myMap.set('name', 'Alice'); // Map { 'name' => 'Alice' }
myMap.set(1, 'number one'); // Map { 'name' => 'Alice', 1 => 'number one' }
```

**WeakSet and WeakMap**: These are similar to Set and Map, but they do not prevent JavaScript from garbage collecting their keys/values. In other
words, they do not hold "actual" references to the keys/values. This makes them useful for correlating data with the objects whose existence is
managed elsewhere.

```javascript
let weakSet = new WeakSet();
let obj = { key: 'value' };
weakSet.add(obj); // WeakSet { { key: 'value' } }
// obj can still be garbage collected

let weakMap = new WeakMap();
let obj2 = { key: 'value' };
weakMap.set(obj2, 'some value'); // WeakMap { { key: 'value' } => 'some value' }
// obj2 can still be garbage collected
```

In the WeakSet and WeakMap examples, if `obj` and `obj2` are set to `null`, they can be garbage collected, and the WeakSet and WeakMap will
automatically remove them.
