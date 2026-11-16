
/*
=========================================================
06. FUNCTIONS IN JAVASCRIPT
=========================================================

A function is a reusable block of code designed to
perform a particular task.

Why do we use functions?
1. Code reusability
2. Better organization
3. Avoid code duplication
4. Easier debugging and maintenance
5. Breaking complex problems into smaller tasks

A function executes when it is called (invoked).
*/


// =======================================================
// 1. FUNCTION DECLARATION
// =======================================================

/*
A function declaration defines a named function
using the function keyword.

Syntax:

function functionName(parameters) {
    // function body
    return value;
}

Important:
- It has a function name.
- It can be called before its declaration because
  function declarations are hoisted.
*/

function greet() {
    console.log("Hello JavaScript!");
}

greet();

// Output: Hello JavaScript!


// Function with parameters

function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30


// =======================================================
// 2. FUNCTION EXPRESSION
// =======================================================

/*
A function expression stores a function inside a variable.

Syntax:

const functionName = function(parameters) {
    // function body
};

Important:
- The function can be anonymous (without a name).
- The variable stores the function.
- A function expression is not callable before
  its initialization when declared using const or let.
*/

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20


// Named function expression

const divide = function division(a, b) {
    return a / b;
};

console.log(divide(10, 2)); // 5

// division(10, 2); // ReferenceError outside the function


// =======================================================
// 3. ARROW FUNCTIONS
// =======================================================

/*
Arrow functions provide a shorter syntax for writing
function expressions.

Syntax:

const functionName = (parameters) => {
    // function body
};

Important differences:
- Arrow functions do not have their own this.
- They do not have their own arguments object.
- They cannot be used as constructors with new.
- They do not have their own prototype property.
- They are not hoisted like function declarations.

Use arrow functions frequently for callbacks
and short utility functions.
*/

// Regular arrow function

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 5)); // 5


// Implicit return

/*
If an arrow function contains only one expression,
we can omit curly braces and the return keyword.

The expression is returned automatically.
*/

const square = number => number * number;

console.log(square(5)); // 25


// Single parameter: parentheses are optional

const double = number => number * 2;

console.log(double(6)); // 12


// No parameters: parentheses are required

const sayHello = () => "Hello!";

console.log(sayHello()); // Hello!


// Returning an object from an arrow function

/*
Wrap the object in parentheses.

Without parentheses, {} is interpreted as
the function body.
*/

const getUser = () => ({
    name: "Priya",
    role: "Developer"
});

console.log(getUser());


// =======================================================
// 4. PARAMETERS VS ARGUMENTS
// =======================================================

/*
PARAMETERS:
Variables listed in the function definition.

ARGUMENTS:
Actual values passed when calling the function.

Example:

function add(a, b) {
    // a and b are parameters
}

add(10, 20);
   // 10 and 20 are arguments
*/

function calculate(a, b) {
    return a + b;
}

console.log(calculate(10, 20)); // 30


// JavaScript does not enforce the declared parameter count.

function showDetails(name, age) {
    console.log(name);
    console.log(age);
}

showDetails("Priya");

/*
Output:
Priya
undefined

If an argument is not provided, its parameter
gets the value undefined.
*/


// Extra arguments

function display(a, b) {
    console.log(a, b);
}

display(10, 20, 30);

/*
Output:
10 20

Extra arguments are not automatically assigned
to declared parameters.

They can be accessed using the rest parameter
or the arguments object in suitable functions.
*/


// =======================================================
// 5. DEFAULT PARAMETERS
// =======================================================

/*
Default parameters provide a default value when
an argument is missing or explicitly undefined.

Syntax:

function greet(name = "Guest") {
    // code
}

Important:
- Default value is used for undefined.
- Default value is NOT used for null.
*/

function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcome("Priya")); // Welcome, Priya!
console.log(welcome());        // Welcome, Guest!
console.log(welcome(undefined)); // Welcome, Guest!
console.log(welcome(null));    // Welcome, null!


// =======================================================
// 6. REST PARAMETERS
// =======================================================

/*
Rest parameters collect multiple arguments into
a single real array.

Syntax:

function functionName(...parameters) {
    // code
}

Important:
- Rest parameter uses ...
- It must be the last parameter.
- It creates an actual array.
- It is useful when the number of arguments is unknown.

Remember:
Rest = Collect multiple values into an array.
*/

function total(...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(total(10, 20, 30));    // 60
console.log(total(1, 2, 3, 4, 5)); // 15
console.log(total());              // 0


// Rest parameter with normal parameters

function studentDetails(name, ...subjects) {
    console.log("Name:", name);
    console.log("Subjects:", subjects);
}

studentDetails("Priya", "JavaScript", "React", "DSA");

/*
Output:
Name: Priya
Subjects: ["JavaScript", "React", "DSA"]
*/


// =======================================================
// 7. SPREAD SYNTAX
// =======================================================

/*
Spread syntax expands an iterable or object into
individual elements or properties.

It also uses ...

Remember:
Rest   = Collects values.
Spread = Expands values.

Common uses:
1. Passing array elements as function arguments.
2. Copying arrays.
3. Merging arrays.
4. Copying or merging objects.
*/

const nums = [10, 20, 30];

console.log(Math.max(...nums)); // 30


// Passing array elements as arguments

function addThree(a, b, c) {
    return a + b + c;
}

const values = [1, 2, 3];

console.log(addThree(...values)); // 6


// Merging arrays

const first = [1, 2];
const second = [3, 4];

const merged = [...first, ...second];

console.log(merged); // [1, 2, 3, 4]


// Copying an array

const original = [10, 20, 30];
const copied = [...original];

console.log(copied); // [10, 20, 30]


// =======================================================
// 8. RETURN VALUES
// =======================================================

/*
return sends a value from a function back to
the place where the function was called.

Important:
- return immediately terminates the function.
- Code after return in the same execution path
  does not execute.
- If no return statement is provided, the function
  returns undefined.
*/

function getSum(a, b) {
    return a + b;
}

const result = getSum(10, 20);

console.log(result); // 30


// Function without return

function printMessage() {
    console.log("Hello");
}

const output = printMessage();

console.log(output);

/*
Output:
Hello
undefined
*/


// =======================================================
// 9. EARLY RETURNS
// =======================================================

/*
An early return exits a function as soon as
a condition is satisfied.

It helps:
- Avoid deeply nested if-else statements.
- Improve readability.
- Handle invalid inputs early.

This approach is commonly used in production code.
*/

function checkAge(age) {

    if (age < 0) {
        return "Invalid age";
    }

    if (age < 18) {
        return "Not eligible";
    }

    return "Eligible";
}

console.log(checkAge(-2)); // Invalid age
console.log(checkAge(15)); // Not eligible
console.log(checkAge(25)); // Eligible


// =======================================================
// 10. FIRST-CLASS FUNCTIONS
// =======================================================

/*
JavaScript treats functions as first-class citizens.

This means functions can be:

1. Assigned to variables.
2. Passed as arguments to other functions.
3. Returned from other functions.
4. Stored inside arrays and objects.

A function is treated like any other value.
*/


// 1. Assigning a function to a variable

function sayHi() {
    return "Hi!";
}

const greeting = sayHi;

console.log(greeting()); // Hi!


// 2. Passing a function as an argument

function execute(callback) {
    callback();
}

function task() {
    console.log("Task executed");
}

execute(task); // Task executed


// 3. Returning a function from another function

function outerFunction() {

    return function innerFunction() {
        return "Inner function executed";
    };

}

const returnedFunction = outerFunction();

console.log(returnedFunction());
// Inner function executed


// =======================================================
// 11. HIGHER-ORDER FUNCTIONS
// =======================================================

/*
A higher-order function is a function that does
at least one of the following:

1. Accepts another function as an argument.
2. Returns another function.

Examples:
- map()
- filter()
- reduce()
- forEach()
- setTimeout()

Every higher-order function uses the fact that
functions are first-class citizens.
*/


// Example 1: Function passed as an argument

function calculateOperation(a, b, operation) {
    return operation(a, b);
}

function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

console.log(calculateOperation(5, 3, addition));       // 8
console.log(calculateOperation(5, 3, multiplication)); // 15


// Example 2: map()

/*
map() creates a NEW array by applying a callback
to every element of the original array.
*/

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8]


// Example 3: filter()

/*
filter() creates a NEW array containing only
elements that satisfy the callback condition.
*/

const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]


// Example 4: reduce()

/*
reduce() processes array elements and combines
them into a single accumulated result.

It is commonly used for:
- Sum
- Product
- Counting
- Grouping data
*/

const prices = [100, 200, 300];

const totalPrice = prices.reduce((accumulator, price) => {
    return accumulator + price;
}, 0);

console.log(totalPrice); // 600


// =======================================================
// 12. PURE AND IMPURE FUNCTIONS
// =======================================================

/*
PURE FUNCTION:

A function is pure when:
1. The same input always produces the same output.
2. It does not cause observable side effects.

Example:
For the same arguments, the output is predictable.

Advantages:
- Easy to test.
- Easy to debug.
- Predictable behavior.
- Easier to reuse.


IMPURE FUNCTION:

An impure function either:
1. Depends on or modifies external state.
2. Produces observable side effects.

Examples of side effects:
- Modifying global variables.
- Changing an object received from outside.
- Writing to a file.
- Making an API request.
- Updating the DOM.

Important:
console.log itself is an observable side effect.
*/


// Pure function

function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5)); // 25
console.log(calculateSquare(5)); // 25


// Impure function: modifies external state

let balance = 1000;

function withdraw(amount) {
    balance -= amount;
    return balance;
}

console.log(withdraw(200)); // 800
console.log(withdraw(200)); // 600


// Impure function: modifies an external object

const userData = {
    name: "Priya",
    age: 23
};

function updateAge(user) {
    user.age = 24;
}

updateAge(userData);

console.log(userData.age); // 24


// =======================================================
// 13. SCOPE AND LEXICAL SCOPING
// =======================================================

/*
Scope determines where a variable can be accessed.

JavaScript has three commonly discussed types:

1. Global Scope
2. Function Scope
3. Block Scope


GLOBAL SCOPE:
A variable declared outside functions and blocks
can generally be accessed throughout its script scope.

FUNCTION SCOPE:
Variables declared with var, let and const inside
a function are limited to that function.

BLOCK SCOPE:
Variables declared using let and const inside
a block {} are limited to that block.

var is NOT block-scoped.
*/


// Global scope

const globalName = "JavaScript";

function showName() {
    console.log(globalName);
}

showName(); // JavaScript


// Function scope

function testFunction() {
    const message = "Inside function";
    console.log(message);
}

testFunction(); // Inside function

// console.log(message); // ReferenceError


// Block scope

if (true) {
    let blockVariable = "Block scoped";
    const anotherVariable = "Also block scoped";
    var functionVariable = "Not block scoped";
}

// console.log(blockVariable); // ReferenceError
// console.log(anotherVariable); // ReferenceError

console.log(functionVariable); // Not block scoped


/*
LEXICAL SCOPING:

Lexical scoping means a function's access to variables
is determined by where the function is written
(declared), not where it is called.

An inner function can access variables from its
outer function.

The outer function cannot access variables declared
only inside the inner function.
*/

function outer() {
    const outerMessage = "I am from outer";

    function inner() {
        console.log(outerMessage);
    }

    inner();
}

outer(); // I am from outer


// =======================================================
// 14. CLOSURES
// =======================================================

/*
A closure is created when a function remembers and
continues to access variables from its outer lexical
scope, even after the outer function has finished
executing.

A closure consists of:
- The inner function.
- Its preserved lexical environment.

Closures are useful for:
1. Data privacy.
2. Maintaining state.
3. Function factories.
4. Callbacks and event handlers.
5. Memoization.

This is a very important JavaScript interview topic.
*/


function createCounter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };

}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/*
Even after createCounter() finishes executing,
the returned function remembers the count variable.

The variable remains accessible through the closure.
*/


// Example: Private variable using closure

function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };

}

const account = createBankAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.getBalance()); // 1500

// console.log(account.balance); // undefined

/*
balance cannot be accessed directly from outside.
It is protected by the closure.
*/


// =======================================================
// 15. IIFE
// =======================================================

/*
IIFE = Immediately Invoked Function Expression.

An IIFE is a function expression that is defined
and executed immediately.

Syntax:

(function() {
    // code
})();

Why use IIFE?
- Create a private scope.
- Avoid polluting the global scope.
- Execute initialization code immediately.

Modern JavaScript often uses modules and block scope
instead of IIFEs for these purposes.
*/


(function () {
    const secret = "Private data";

    console.log("IIFE executed");
})();

/*
Output:
IIFE executed
*/

// console.log(secret); // ReferenceError


// IIFE with parameters

(function (name) {
    console.log(`Hello, ${name}`);
})("Priya");

// Output: Hello, Priya


// Arrow function IIFE

(() => {
    console.log("Arrow IIFE executed");
})();


// =======================================================
// 16. HOISTING: FUNCTION DECLARATION VS EXPRESSION
// =======================================================

/*
HOISTING:

Hoisting is JavaScript's behavior of processing
declarations before executing code in their scope.

FUNCTION DECLARATION:
- The function declaration is hoisted with its
  function definition.
- It can be called before its declaration.


FUNCTION EXPRESSION:
- The variable declaration follows the hoisting
  rules of var, let or const.
- The function assignment happens when execution
  reaches that line.
- With const and let, accessing the variable before
  initialization causes a ReferenceError.
- With var, accessing it before assignment gives
  undefined, so calling it causes a TypeError.
*/


// Function declaration: works before declaration

console.log(addNumbers(2, 3)); // 5

function addNumbers(a, b) {
    return a + b;
}


// Function expression with const

// console.log(subtractNumbers(5, 2));
// ReferenceError: Cannot access before initialization

const subtractNumbers = function (a, b) {
    return a - b;
};

console.log(subtractNumbers(5, 2)); // 3


// Function expression with var

// console.log(multiplyNumbers(2, 3));
// TypeError: multiplyNumbers is not a function

var multiplyNumbers = function (a, b) {
    return a * b;
};

console.log(multiplyNumbers(2, 3)); // 6


// =======================================================
// 17. IMPORTANT DIFFERENCES FOR INTERVIEWS
// =======================================================

/*
FUNCTION DECLARATION VS FUNCTION EXPRESSION

Declaration:
- Uses function name directly.
- Fully hoisted.
- Can be called before declaration.

Expression:
- Function assigned to a variable.
- Assignment happens during execution.
- Cannot be called before the variable is initialized.


REGULAR FUNCTION VS ARROW FUNCTION

Regular function:
- Has its own this, determined by how it is called.
- Has its own arguments object.
- Can be used as a constructor (with new).
- Can be named or anonymous.

Arrow function:
- Inherits this from its surrounding lexical scope.
- Does not have its own arguments object.
- Cannot be used as a constructor.
- Cannot be used with new.


REST VS SPREAD

Rest:
- Collects multiple values into an array.
- Used in function parameters.

Spread:
- Expands iterable values or object properties.
- Used in function calls, arrays and objects.


FIRST-CLASS VS HIGHER-ORDER FUNCTIONS

First-class functions:
- Functions can be treated like values.

Higher-order functions:
- Functions that accept functions or return functions.


PARAMETERS VS ARGUMENTS

Parameters:
- Variables in function definition.

Arguments:
- Actual values passed during function call.
*/


// =======================================================
// 18. INTERVIEW PRACTICE QUESTIONS
// =======================================================

/*
THEORY QUESTIONS:

1. What are the different ways to define a function
   in JavaScript?

2. What is the difference between function declaration,
   function expression and arrow function?

3. What is the difference between parameters and arguments?

4. What are default parameters?

5. Explain rest and spread syntax with examples.

6. What happens if a function does not return anything?

7. What is an early return?

8. What are first-class functions?

9. What are higher-order functions?

10. What is a pure function? What is an impure function?

11. Explain lexical scoping.

12. What is a closure? Give a real-world use case.

13. What is an IIFE and why is it used?

14. What is hoisting?

15. Why can a function declaration be called before
    its definition but a const function expression cannot?


CODING QUESTIONS:

1. Write a function to check whether a number is even.

2. Write a function to find the factorial of a number.

3. Write an arrow function to calculate the square of a number.

4. Write a function that accepts any number of arguments
   and returns their sum using rest parameters.

5. Write a higher-order function that accepts two numbers
   and a callback operation.

6. Use map() to square every element in an array.

7. Use filter() to find all even numbers in an array.

8. Use reduce() to calculate the sum of an array.

9. Create a counter using closures.

10. Create a function that returns another function.

11. Write an IIFE that prints a message.

12. Write a pure function to calculate a discount.

13. Explain the output of a function declaration
    and function expression called before initialization.
*/


// =======================================================
// END OF 06. FUNCTIONS
// =======================================================
