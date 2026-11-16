
/*
=========================================================
                TRUTHY AND FALSY VALUES
=========================================================

JavaScript values can be divided into two categories:

1. Truthy Values
2. Falsy Values

TRUTHY VALUES:

A truthy value is any value that becomes true when
converted into a Boolean.

Example:
Boolean("Hello") // true

FALSY VALUES:

A falsy value is any value that becomes false when
converted into a Boolean.

Example:
Boolean(0) // false

JavaScript automatically performs Boolean conversion
when evaluating conditions such as:

- if statements
- while loops
- Logical operators (&&, ||, !)
- Ternary operators

=========================================================
*/


// =======================================================
// 1. FALSY VALUES
// =======================================================

/*
JavaScript has exactly 8 falsy values:

1. false
2. 0
3. -0
4. 0n (BigInt zero)
5. "" (Empty string)
6. null
7. undefined
8. NaN

IMPORTANT:
All other values are truthy.
*/

// Examples:

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// =======================================================
// 2. TRUTHY VALUES
// =======================================================

/*
Truthy values are values that become true
when converted into Boolean.

Examples of truthy values:

1. Non-empty strings
2. Non-zero numbers
3. Negative numbers (except -0)
4. Empty arrays
5. Empty objects
6. Functions
7. true
8. BigInt values other than 0n
9. Symbols
*/

// Examples:

console.log(Boolean("Hello")); // true
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true

console.log(Boolean(1));       // true
console.log(Boolean(-1));      // true
console.log(Boolean(100));     // true

console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

console.log(Boolean(function () { })); // true

console.log(Boolean(true));    // true
console.log(Boolean(10n));      // true
console.log(Boolean(Symbol())); // true


// =======================================================
// 3. TRUTHY AND FALSY IN IF CONDITIONS
// =======================================================

// JavaScript automatically converts the condition
// into a Boolean.

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}

// Output: Username is empty

// WHY?
// An empty string is a falsy value.


// Example with a truthy value.

let name = "Priyansha";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");
}

// Output: Name exists


// =======================================================
// 4. EMPTY ARRAY AND EMPTY OBJECT
// =======================================================

// IMPORTANT INTERVIEW QUESTION:
//
// Why are empty arrays and empty objects truthy?

let arr = [];
let obj = {};

if (arr) {
    console.log("Array is truthy");
}

if (obj) {
    console.log("Object is truthy");
}

// Output:
// Array is truthy
// Object is truthy

// WHY?
// Arrays and objects are reference values.
// Even when they are empty, they are truthy.

// IMPORTANT:
// Do not confuse an empty array with an empty string.

// Boolean([])  -> true
// Boolean("")  -> false


// =======================================================
// 5. LOGICAL NOT (!) OPERATOR
// =======================================================

// The ! operator converts a value into Boolean
// and then reverses its result.

console.log(!true);       // false
console.log(!false);      // true

console.log(!0);          // true
console.log(!1);          // false

console.log(!"Hello");    // false
console.log(!"");         // true

// DOUBLE NOT (!!)

// !! is commonly used to explicitly convert
// any value into a Boolean.

console.log(!!"Hello"); // true
console.log(!!"");      // false
console.log(!!0);       // false
console.log(!!100);     // true
console.log(!![]);      // true
console.log(!!{});      // true


// =======================================================
// 6. LOGICAL OR (||) OPERATOR
// =======================================================

// || returns the first truthy operand.
// If all operands are falsy, it returns the last operand.

console.log(0 || 10);          // 10
console.log("" || "Hello");    // Hello
console.log(null || "Default"); // Default

// Example: Providing a default username.

let userName = "";

let displayName = userName || "Guest";

console.log(displayName); // Guest

// WHY?
// userName is an empty string (falsy).
// Therefore, || returns "Guest".


// =======================================================
// 7. LOGICAL AND (&&) OPERATOR
// =======================================================

// && returns the first falsy operand.
// If all operands are truthy, it returns the last operand.

console.log(10 && 20);       // 20
console.log("Hello" && 50);  // 50
console.log(0 && 100);       // 0
console.log("" && "World");  // ""

// Example:

let isLoggedIn = true;

isLoggedIn && console.log("Welcome User");

// Output: Welcome User

// WHY?
// Since isLoggedIn is truthy,
// JavaScript evaluates the right-hand expression.


// =======================================================
// 8. NULLISH COALESCING (??)
// =======================================================

// The ?? operator returns the right-hand value
// only when the left-hand value is null or undefined.

console.log(null ?? "Default");      // Default
console.log(undefined ?? "Default"); // Default

console.log(0 ?? 100);     // 0
console.log("" ?? "Hello"); // ""
console.log(false ?? true); // false

// DIFFERENCE BETWEEN || AND ??

console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

// WHY?
// || checks for any falsy value.
// ?? checks only for null or undefined.

// Use ?? when 0, false or "" are valid values
// and should not be replaced by a default.


// =======================================================
// 9. TERNARY OPERATOR
// =======================================================

// The ternary operator evaluates a condition
// and returns one of two values.

let age = 23;

let message = age >= 18 ? "Adult" : "Minor";

console.log(message); // Adult

// Empty string is falsy.

let email = "";

let status = email ? "Email provided" : "Email missing";

console.log(status); // Email missing


// =======================================================
// 10. QUICK INTERVIEW REVISION
// =======================================================

/*
1. Truthy values become true when converted to Boolean.

2. Falsy values become false when converted to Boolean.

3. JavaScript has exactly 8 falsy values:
   false, 0, -0, 0n, "", null, undefined, NaN.

4. Empty arrays are truthy.

5. Empty objects are truthy.

6. Non-empty strings are truthy, even "false" and "0".

7. !! converts a value into its Boolean equivalent.

8. || returns the first truthy operand.

9. && returns the first falsy operand.

10. ?? returns the right operand only when the left
    operand is null or undefined.

11. if conditions automatically perform Boolean conversion.
*/


// =======================================================
// END OF TOPIC: TRUTHY AND FALSY VALUES
// =======================================================
