
/*
=========================================================
        1. VARIABLES & DECLARATIONS IN JAVASCRIPT
=========================================================

JavaScript provides three keywords to declare variables:

1. var
2. let
3. const

They differ in:
- Scope
- Reassignment
- Redeclaration
- Hoisting
- Temporal Dead Zone (TDZ)
*/


// =======================================================
// 1.1 VAR, LET AND CONST
// =======================================================


// -------------------- VAR -----------------------------

// var is function-scoped, NOT block-scoped.
// It can be reassigned.
// It can be redeclared in the same scope.
// It is hoisted and initialized with undefined.

var name = "Priyansha";

console.log(name); // Priyansha

// Reassignment: Changing the existing variable's value.
name = "Rahul";

console.log(name); // Rahul

// Redeclaration: Declaring the same variable again.
var name = "Aman";

console.log(name); // Aman


// -------------------- LET ------------------------------

// let is block-scoped.
// It can be reassigned.
// It cannot be redeclared in the same scope.
// It is hoisted but remains in the Temporal Dead Zone (TDZ).

let age = 22;

console.log(age); // 22

// Reassignment is allowed.
age = 23;

console.log(age); // 23

// Redeclaration is NOT allowed in the same scope.

// let age = 24;
// SyntaxError: Identifier 'age' has already been declared.


// -------------------- CONST ----------------------------

// const is block-scoped.
// It cannot be reassigned.
// It cannot be redeclared in the same scope.
// It must be initialized during declaration.
// It is hoisted but remains in the TDZ.

const country = "India";

console.log(country); // India

// Reassignment is NOT allowed.

// country = "USA";
// TypeError: Assignment to constant variable.

// Redeclaration is NOT allowed.

// const country = "USA";
// SyntaxError: Identifier has already been declared.


// -------------------- COMPARISON -----------------------

// var   -> Function-scoped, reassignment allowed,
//          redeclaration allowed.

// let   -> Block-scoped, reassignment allowed,
//          redeclaration NOT allowed.

// const -> Block-scoped, reassignment NOT allowed,
//          redeclaration NOT allowed.

// Best Practice:
// Use const by default.
// Use let when reassignment is required.
// Avoid var in modern JavaScript.



// =======================================================
// 1.2 SCOPE (GLOBAL, FUNCTION AND BLOCK)
// =======================================================

// Scope determines where a variable can be accessed.


// -------------------- GLOBAL SCOPE ---------------------

// Variables declared outside functions and blocks
// can be accessed from their accessible outer scope.

let username = "Priyansha";

function greet() {
    console.log(username); // Priyansha
}

greet();

console.log(username); // Priyansha


// -------------------- FUNCTION SCOPE -------------------

// Variables declared using var inside a function
// are accessible throughout that function.
// They cannot be accessed outside the function.

function calculate() {
    var price = 100;

    console.log(price); // 100
}

calculate();

// console.log(price);
// ReferenceError: price is not defined.


// -------------------- BLOCK SCOPE ----------------------

// A block is defined using curly braces {}.

// let and const are block-scoped.
// They can only be accessed inside their block.

{
    let salary = 1000;
    const city = "Hyderabad";

    console.log(salary); // 1000
    console.log(city);   // Hyderabad
}

// Variables cannot be accessed outside the block.

// console.log(salary); // ReferenceError.
// console.log(city);   // ReferenceError.


// -------------------- VAR VS LET SCOPE -----------------

{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10

// console.log(b); // ReferenceError.
// console.log(c); // ReferenceError.

// WHY?
// var ignores ordinary block boundaries.
// let and const respect block boundaries.
// Remember: var is still limited by function scope.



// =======================================================
// 1.3 REASSIGNMENT VS REDECLARATION
// =======================================================

// REASSIGNMENT:
// Changing the value of an already declared variable.

let score = 50;

score = 100;

console.log(score); // 100


// REDECLARATION:
// Declaring the same variable name again
// in the same scope.

var city = "Delhi";

var city = "Mumbai";

console.log(city); // Mumbai

// var allows redeclaration.

// let and const do not allow redeclaration
// in the same scope.

// let marks = 90;
// let marks = 95;
// SyntaxError.

// const grade = "A";
// const grade = "B";
// SyntaxError.


// IMPORTANT DIFFERENCE:

// Reassignment -> Changes an existing value.
// Redeclaration -> Declares the variable again.



// =======================================================
// 1.4 TEMPORAL DEAD ZONE (TDZ)
// =======================================================

// TDZ is the time between entering a scope
// and the initialization of a let or const variable.

// During this time, accessing the variable
// throws a ReferenceError.

// Example:

// console.log(userAge);
// ReferenceError: Cannot access 'userAge'
// before initialization.

let userAge = 22;

console.log(userAge); // 22


// WHY DOES TDZ HAPPEN?

// 1. JavaScript creates the variable binding
//    when entering the scope.

// 2. The variable is not initialized yet.

// 3. It remains in the Temporal Dead Zone.

// 4. When execution reaches the declaration,
//    the variable gets initialized.

// 5. Now it can be accessed normally.


// TDZ WITH CONST:

// console.log(firstName); // ReferenceError.

const firstName = "Priyansha";

console.log(firstName); // Priyansha.


// DOES VAR HAVE TDZ?

// No. var is initialized with undefined
// during its declaration setup.

console.log(userCity); // undefined

var userCity = "Dehradun";

console.log(userCity); // Dehradun.


// IMPORTANT:
// let and const -> TDZ.
// var -> Initialized with undefined.



// =======================================================
// 1.5 HOISTING
// =======================================================

// Hoisting is JavaScript's behavior of processing
// declarations before executing the code in their scope.

// Important:
// JavaScript does NOT literally move code to the top.
// This is a conceptual way of understanding hoisting.


// -------------------- VAR HOISTING ---------------------

console.log(employee); // undefined

var employee = "Priyansha";

console.log(employee); // Priyansha.

// Conceptually, it behaves like this:

// var employee;
// console.log(employee); // undefined
// employee = "Priyansha";


// -------------------- LET HOISTING ---------------------

// console.log(userAge2);
// ReferenceError: Cannot access before initialization.

let userAge2 = 23;

console.log(userAge2); // 23.

// let is hoisted but remains uninitialized
// inside the Temporal Dead Zone.


// -------------------- CONST HOISTING -------------------

// console.log(company);
// ReferenceError: Cannot access before initialization.

const company = "Kaara";

console.log(company); // Kaara.

// const is also hoisted but remains in the TDZ
// until its declaration is evaluated.


// -------------------- HOISTING SUMMARY -----------------

// var   -> Hoisted and initialized with undefined.
// let   -> Hoisted but remains uninitialized (TDZ).
// const -> Hoisted but remains uninitialized (TDZ).



// =======================================================
// 1.6 COMMON INTERVIEW CONFUSIONS
// =======================================================


// -------------------- QUESTION 1 -----------------------
// Why does var leak outside a block but let doesn't?

if (true) {
    var x = 10;
    let y = 20;
}

console.log(x); // 10

// console.log(y);
// ReferenceError: y is not defined.

// WHY?
// var is function-scoped, not block-scoped.
// The if block does not create a function scope.
// let is block-scoped and stays inside the if block.

// IMPORTANT:
// var does NOT leak outside a function.
// It only ignores ordinary block boundaries.


// -------------------- QUESTION 2 -----------------------
// Why does const allow changing object properties?

// const prevents reassignment of the variable binding.
// It does NOT make the object completely immutable.

const user = {
    name: "Priyansha",
    age: 22
};

// Modifying an existing property is allowed.
user.age = 23;

// Adding a new property is also allowed.
user.city = "Hyderabad";

console.log(user);

// Output:
// {
//     name: "Priyansha",
//     age: 23,
//     city: "Hyderabad"
// }


// BUT REASSIGNING THE OBJECT IS NOT ALLOWED.

// user = {
//     name: "Rahul"
// };

// TypeError: Assignment to constant variable.


// WHY?
// const protects the variable binding.
// It does not protect the contents of the object.


// -------------------- OBJECT.FREEZE() ------------------

// Object.freeze() prevents modifications to
// the immediate properties of an object.

const employee2 = {
    name: "Priyansha",
    age: 22
};

Object.freeze(employee2);

// Attempting to modify a property will not work
// in non-strict mode (and throws in strict mode).

employee2.age = 25;

console.log(employee2.age); // 22.

// IMPORTANT:
// Object.freeze() is SHALLOW.
// Nested objects are not automatically frozen.

const person = {
    name: "Priyansha",
    address: {
        city: "Dehradun"
    }
};

Object.freeze(person);

// The nested object is still mutable.
person.address.city = "Hyderabad";

console.log(person.address.city); // Hyderabad.



// =======================================================
// 1.7 QUICK INTERVIEW REVISION
// =======================================================

// 1. var is function-scoped.
// 2. let and const are block-scoped.
// 3. var allows reassignment and redeclaration.
// 4. let allows reassignment but not redeclaration
//    in the same scope.
// 5. const allows neither reassignment nor redeclaration
//    in the same scope.
// 6. All three declarations are hoisted.
// 7. var is initialized with undefined.
// 8. let and const remain in the TDZ until initialization.
// 9. const does not make objects immutable.
// 10. Object.freeze() provides shallow immutability.


// =======================================================
// 1.8 BEST PRACTICES
// =======================================================

// Prefer const when the variable binding
// will not be reassigned.

const appName = "My React Application";

// Use let when reassignment is required.

let experience = 1;

experience = 2;

// Avoid var in modern JavaScript.

// These practices make code more predictable,
// readable and easier to maintain.



// =======================================================
// 1.9 INTERVIEW PRACTICE QUESTIONS
// =======================================================

// Try predicting the output before uncommenting
// and executing each question.


// QUESTION 1: VAR SCOPE

// function test() {
//     if (true) {
//         var value = 10;
//     }
//
//     console.log(value);
// }
//
// test();
//
// Expected output: 10.


// QUESTION 2: LET SCOPE

// if (true) {
//     let value = 10;
// }
//
// console.log(value);
//
// Expected output: ReferenceError.


// QUESTION 3: HOISTING

// console.log(a);
// console.log(b);
//
// var a = 10;
// let b = 20;
//
// Expected:
// undefined
// ReferenceError (execution stops at second log).


// QUESTION 4: CONST OBJECT

// const employee = {
//     name: "Priyansha"
// };
//
// employee.name = "Rahul";
//
// console.log(employee.name);
//
// Expected output: Rahul.


// QUESTION 5: REDECLARATION

// var a = 10;
// var a = 20;
//
// let b = 30;
// let b = 40;
//
// console.log(a);
// console.log(b);
//
// Expected: SyntaxError because let b is redeclared.
// The script cannot execute normally.


// =======================================================
// END OF TOPIC 1: VARIABLES & DECLARATIONS
// =======================================================
