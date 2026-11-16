
/*
=========================================================
              2. DATA TYPES IN JAVASCRIPT
=========================================================

A data type defines the kind of value a variable stores.

JavaScript is a dynamically typed language.

This means:
- We don't need to specify a variable's data type.
- JavaScript determines the type at runtime.
- A variable can hold different types of values
  during its lifetime.

JavaScript data types are broadly divided into:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/


// =======================================================
// 2.1 PRIMITIVE DATA TYPES
// =======================================================

/*
Primitive data types represent single values.

JavaScript has 7 primitive data types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

IMPORTANT:
- Primitive values are immutable.
- When assigned to another variable, the value is copied.
- Changes to one variable do not affect the other.
*/


// -------------------- 1. STRING ------------------------

// String represents textual data.
// Strings can be written using:
// Single quotes (' ')
// Double quotes (" ")
// Backticks (` `)

let firstName = "Priyansha";
let lastName = 'Rawat';

console.log(firstName); // Priyansha
console.log(lastName);  // Rawat

console.log(typeof firstName); // string

// Template literals allow variables inside strings.

let fullName = `${firstName} ${lastName}`;

console.log(fullName); // Priyansha Rawat

// Strings are immutable.
// We cannot directly change an individual character.

let language = "JavaScript";

// This does not modify the original string.
language[0] = "Y";

console.log(language); // JavaScript


// -------------------- 2. NUMBER ------------------------

// Number represents both integer and decimal values.
// JavaScript uses one Number type for both.

let age = 23;
let salary = 48000;
let percentage = 85.5;

console.log(age);        // 23
console.log(salary);     // 48000
console.log(percentage); // 85.5

console.log(typeof age); // number

// Special numeric values:

console.log(10 / 0);      // Infinity
console.log(-10 / 0);     // -Infinity
console.log("hello" * 2); // NaN

// NaN means Not a Number.
// Its typeof is still number.

console.log(typeof NaN); // number

// Check whether a value is NaN.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10));  // false


// -------------------- 3. BOOLEAN -----------------------

// Boolean represents only two values:
// true or false.

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn); // true
console.log(isAdmin);    // false

console.log(typeof isLoggedIn); // boolean

// Booleans are commonly used in conditions.

if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}


// -------------------- 4. UNDEFINED ---------------------

// undefined means a variable has been declared
// but has not been assigned a value.

let city;

console.log(city);        // undefined
console.log(typeof city); // undefined

// A function without a return statement
// also returns undefined.

function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result); // undefined


// -------------------- 5. NULL --------------------------

// null represents the intentional absence of a value.

// It is commonly used when we explicitly want
// to indicate that a variable has no value.

let selectedUser = null;

console.log(selectedUser); // null

// IMPORTANT INTERVIEW QUESTION:
//
// typeof null returns "object".
// This is a historical JavaScript behavior.
// It is a well-known language quirk.

console.log(typeof null); // object

// To check for null, use strict equality.

console.log(selectedUser === null); // true


// -------------------- 6. BIGINT ------------------------

// BigInt is used to represent integers
// larger than the safe integer limit of Number.

// Add n at the end of an integer to create BigInt.

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);

console.log(typeof bigNumber); // bigint

// BigInt can handle very large integers.

let num1 = 9007199254740991n;
let num2 = 100n;

console.log(num1 + num2);

// IMPORTANT:
// Cannot directly mix BigInt and Number
// in arithmetic operations.

// console.log(10n + 20);
// TypeError

// Convert explicitly when appropriate.

console.log(10n + BigInt(20)); // 30n


// -------------------- 7. SYMBOL ------------------------

// Symbol creates a unique primitive value.
// Even if two symbols have the same description,
// they are not equal.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false

console.log(typeof id1); // symbol

// Symbols are often used as unique object property keys.

let user = {
    name: "Priyansha",
    [id1]: 101
};

console.log(user.name); // Priyansha
console.log(user[id1]); // 101


// =======================================================
// 2.2 NON-PRIMITIVE / REFERENCE DATA TYPES
// =======================================================

/*
Non-primitive data types represent objects.

Common examples:

1. Object
2. Array
3. Function
4. Date
5. Map
6. Set

IMPORTANT:
- Objects are mutable.
- Variables hold references to objects.
- Assigning an object copies its reference value.
- Two variables can refer to the same object.
*/


// -------------------- 1. OBJECT ------------------------

// An object stores data in key-value pairs.

let employee = {
    name: "Priyansha",
    age: 23,
    company: "Kaara"
};

console.log(employee);

console.log(employee.name);    // Priyansha
console.log(employee.company); // Kaara

console.log(typeof employee); // object

// Objects are mutable.
// We can modify their properties.

employee.age = 24;

console.log(employee.age); // 24

// We can also add new properties.

employee.city = "Hyderabad";

console.log(employee.city); // Hyderabad


// -------------------- 2. ARRAY -------------------------

// An array stores multiple values in an ordered collection.

let skills = ["JavaScript", "React", "TypeScript"];

console.log(skills);

// Accessing elements using index.

console.log(skills[0]); // JavaScript
console.log(skills[1]); // React

// Arrays are zero-indexed.
// The first element starts at index 0.

// Adding an element.

skills.push("Node.js");

console.log(skills);

// typeof array returns "object".

console.log(typeof skills); // object

// Use Array.isArray() to check whether
// a value is an array.

console.log(Array.isArray(skills)); // true


// -------------------- 3. FUNCTION ----------------------

// Functions are also objects in JavaScript.
// They are callable objects.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30

console.log(typeof add); // function


// -------------------- 4. DATE --------------------------

// Date objects represent dates and times.

let today = new Date();

console.log(today);

console.log(typeof today); // object

console.log(today instanceof Date); // true


// -------------------- 5. MAP ---------------------------

// Map stores key-value pairs.
// Keys can be of any data type.

let userDetails = new Map();

userDetails.set("name", "Priyansha");
userDetails.set("age", 23);

console.log(userDetails.get("name")); // Priyansha
console.log(userDetails.get("age"));  // 23

console.log(typeof userDetails); // object


// -------------------- 6. SET ---------------------------

// Set stores unique values.
// Duplicate values are automatically removed.

let numbers = new Set([1, 2, 2, 3, 3, 4]);

console.log(numbers); // Set(4) {1, 2, 3, 4}

console.log(numbers.size); // 4

console.log(typeof numbers); // object



// =======================================================
// 2.3 PRIMITIVE VS REFERENCE TYPES
// =======================================================

/*
PRIMITIVE TYPES:

- Store primitive values.
- Values are immutable.
- Assignment copies the actual value.
- Variables remain independent.

REFERENCE TYPES:

- Objects can contain multiple properties or values.
- Objects are mutable.
- Assignment copies the object reference value.
- Multiple variables can point to the same object.
*/


// -------------------- PRIMITIVE ASSIGNMENT -------------

let a = 10;

let b = a;

// The value of a is copied into b.

b = 20;

console.log(a); // 10
console.log(b); // 20

// WHY?
// Changing b does not affect a.
// Both variables contain independent primitive values.


// -------------------- OBJECT ASSIGNMENT ----------------

let user1 = {
    name: "Priyansha"
};

let user2 = user1;

// The reference to the same object is copied.
// Both variables now refer to the same object.

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul

// WHY?
// Both variables point to the same object.
// Changing the object through one variable
// is visible through the other variable.


// -------------------- ARRAY ASSIGNMENT -----------------

let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2.push(40);

console.log(arr1); // [10, 20, 30, 40]
console.log(arr2); // [10, 20, 30, 40]

// Both variables reference the same array.



// =======================================================
// 2.4 PASS BY VALUE IN JAVASCRIPT
// =======================================================

/*
IMPORTANT INTERVIEW CONCEPT:

JavaScript always passes arguments by value.

For primitive values:
- The function receives a copy of the primitive value.

For objects:
- The function receives a copy of the reference value.
- Both references can point to the same object.
*/


// -------------------- PRIMITIVE EXAMPLE ---------------

let originalNumber = 10;

function changeNumber(value) {
    value = 50;
    console.log(value); // 50
}

changeNumber(originalNumber);

console.log(originalNumber); // 10

// WHY?
// The function receives a copy of the primitive value.
// Reassigning the parameter does not change
// the original variable.


// -------------------- OBJECT EXAMPLE -------------------

let originalUser = {
    name: "Priyansha"
};

function changeUser(user) {
    user.name = "Rahul";
}

changeUser(originalUser);

console.log(originalUser.name); // Rahul

// WHY?
// The function receives a copy of the reference.
// Both references point to the same object.
// Modifying that object affects what the original
// variable observes.


// -------------------- OBJECT REASSIGNMENT --------------

let originalEmployee = {
    name: "Priyansha"
};

function replaceEmployee(employee) {
    employee = {
        name: "Rahul"
    };
}

replaceEmployee(originalEmployee);

console.log(originalEmployee.name); // Priyansha

// WHY?
// The function parameter has its own copy
// of the reference value.
// Reassigning the parameter does not change
// the original variable's reference.


// =======================================================
// 2.5 EQUALITY: PRIMITIVE VS REFERENCE
// =======================================================


// -------------------- PRIMITIVE COMPARISON -------------

let x = 10;
let y = 10;

console.log(x === y); // true

// Primitive values are compared by value.


// -------------------- OBJECT COMPARISON ----------------

let obj1 = {
    name: "Priyansha"
};

let obj2 = {
    name: "Priyansha"
};

console.log(obj1 === obj2); // false

// WHY?
// Both objects have the same properties and values,
// but they are two different objects in memory.
// Object equality compares identity, not structure.


// -------------------- SAME REFERENCE -------------------

let obj3 = {
    name: "Priyansha"
};

let obj4 = obj3;

console.log(obj3 === obj4); // true

// WHY?
// Both variables refer to the exact same object.


// =======================================================
// 2.6 TYPEOF OPERATOR
// =======================================================

/*
typeof is used to determine the type of a value.

It returns a string describing the type.
*/

console.log(typeof "Hello");       // string
console.log(typeof 100);           // number
console.log(typeof 10.5);          // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object (historical quirk)
console.log(typeof 123n);           // bigint
console.log(typeof Symbol("id"));  // symbol

console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof function () { }); // function

// IMPORTANT:
// typeof null returns object.
// typeof array also returns object.
// Use specific checks when needed.

console.log(Array.isArray([])); // true
console.log(null === null);     // true



// =======================================================
// 2.7 SHALLOW COPY VS DEEP COPY
// =======================================================

/*
When copying objects, we need to understand
shallow copy and deep copy.

SHALLOW COPY:
- Copies only the top-level properties.
- Nested objects are still shared references.

DEEP COPY:
- Creates independent copies of nested data too.
*/


// -------------------- SHALLOW COPY ---------------------

let original = {
    name: "Priyansha",
    address: {
        city: "Dehradun"
    }
};

// Object.assign creates a shallow copy.

let shallowCopy = Object.assign({}, original);

// Another common shallow-copy technique:
// let shallowCopy = { ...original };

// Changing a top-level property does not affect original.
shallowCopy.name = "Rahul";

console.log(original.name);    // Priyansha
console.log(shallowCopy.name); // Rahul

// But nested objects are still shared.

shallowCopy.address.city = "Hyderabad";

console.log(original.address.city); // Hyderabad

// WHY?
// The nested address object was not copied.
// Both objects still reference the same address object.


// -------------------- DEEP COPY ------------------------

let originalData = {
    name: "Priyansha",
    address: {
        city: "Dehradun"
    }
};

// structuredClone creates a deep copy
// for supported structured-cloneable values.

let deepCopy = structuredClone(originalData);

// Change nested property in the copied object.

deepCopy.address.city = "Hyderabad";

console.log(originalData.address.city); // Dehradun
console.log(deepCopy.address.city);     // Hyderabad

// WHY?
// The nested object was also copied.
// Changes to the copied object do not affect originalData.

// NOTE:
// structuredClone supports many built-in data types,
// but cannot clone functions.
// It also does not preserve every custom class behavior.



// =======================================================
// 2.8 QUICK INTERVIEW REVISION
// =======================================================

/*
1. JavaScript has 7 primitive data types.

2. Primitive types:
   String, Number, Boolean, Undefined,
   Null, BigInt and Symbol.

3. Non-primitive values are objects.

4. Arrays and functions are also objects.

5. typeof null returns "object".
   This is a historical JavaScript quirk.

6. typeof [] returns "object".

7. Array.isArray() checks whether a value is an array.

8. Primitive values are immutable.

9. Objects and arrays are mutable.

10. Primitive assignment copies the value.

11. Object assignment copies the reference value.

12. JavaScript always passes arguments by value.

13. Two separate objects with identical properties
    are not equal using ===.

14. Two variables referencing the same object
    are equal using ===.

15. Spread syntax and Object.assign create shallow copies.

16. structuredClone can create deep copies
    of supported structured-cloneable values.
*/


// =======================================================
// 2.9 INTERVIEW PRACTICE QUESTIONS
// =======================================================

// Try predicting the output before running these.

// QUESTION 1: PRIMITIVE ASSIGNMENT

// let a = 10;
// let b = a;
//
// b = 20;
//
// console.log(a);
// console.log(b);
//
// Expected:
// 10
// 20


// QUESTION 2: OBJECT ASSIGNMENT

// let user1 = { name: "Priyansha" };
// let user2 = user1;
//
// user2.name = "Rahul";
//
// console.log(user1.name);
//
// Expected: Rahul


// QUESTION 3: TYPEOF

// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof function() {});
//
// Expected:
// object
// object
// function


// QUESTION 4: OBJECT EQUALITY

// let a = { age: 23 };
// let b = { age: 23 };
//
// console.log(a === b);
//
// Expected: false


// QUESTION 5: SAME REFERENCE

// let a = { age: 23 };
// let b = a;
//
// console.log(a === b);
//
// Expected: true


// QUESTION 6: SHALLOW COPY

// let original = {
//     name: "Priyansha",
//     address: { city: "Delhi" }
// };
//
// let copy = { ...original };
//
// copy.address.city = "Hyderabad";
//
// console.log(original.address.city);
//
// Expected: Hyderabad


// QUESTION 7: DEEP COPY

// let original = {
//     name: "Priyansha",
//     address: { city: "Delhi" }
// };
//
// let copy = structuredClone(original);
//
// copy.address.city = "Hyderabad";
//
// console.log(original.address.city);
//
// Expected: Delhi

/*=========================================================
             SHALLOW COPY VS DEEP COPY
=========================================================

Shallow Copy:
- Copies only the first level.
- Nested objects share references.
- Changes to nested properties affect both objects.

Deep Copy:
- Copies all supported nested levels.
- Nested objects have independent references.
- Changes to the copied object do not affect the original.

=========================================================
*/

// =======================================================
// END OF TOPIC 2: DATA TYPES IN JAVASCRIPT
// =======================================================
