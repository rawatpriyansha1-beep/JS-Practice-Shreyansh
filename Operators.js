
/*
=========================================================
                4. OPERATORS IN JAVASCRIPT
=========================================================

Operators are special symbols or keywords used to
perform operations on values and variables.

JavaScript provides different types of operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Increment and Decrement Operators
7. Bitwise Operators
8. String Operators
9. Ternary Operator
10. Nullish Coalescing Operator
11. Optional Chaining Operator
12. Type Operators
13. Relational Operators
*/


// =======================================================
// 4.1 ARITHMETIC OPERATORS
// =======================================================

/*
Arithmetic operators are used to perform mathematical
operations on numeric values.

Operators:

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (Remainder)
**  Exponentiation
*/

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Modulus returns the remainder after division.
// 10 % 3 = 1.

// Exponentiation means power.
// 10 ** 3 = 10 * 10 * 10 = 1000.


// =======================================================
// 4.2 ASSIGNMENT OPERATORS
// =======================================================

/*
Assignment operators assign values to variables.

=    Assign
+=   Add and assign
-=   Subtract and assign
*=   Multiply and assign
/=   Divide and assign
%=   Modulus and assign
**=  Exponentiation and assign
*/

let number = 10;

// Simple assignment.
number = 20;

console.log(number); // 20

// Addition assignment.
number += 5; // number = number + 5

console.log(number); // 25

// Subtraction assignment.
number -= 5; // number = number - 5

console.log(number); // 20

// Multiplication assignment.
number *= 2; // number = number * 2

console.log(number); // 40

// Division assignment.
number /= 4; // number = number / 4

console.log(number); // 10

// Modulus assignment.
number %= 3; // number = number % 3

console.log(number); // 1

// Exponentiation assignment.
number **= 3; // number = number ** 3

console.log(number); // 1


// =======================================================
// 4.3 COMPARISON OPERATORS
// =======================================================

/*
Comparison operators compare two values.

They return a Boolean value: true or false.

==   Equal (loose equality)
===  Strict equal
!=   Not equal (loose)
!==  Strict not equal
>    Greater than
<    Less than
>=   Greater than or equal
<=   Less than or equal
*/

console.log(10 == "10");  // true
console.log(10 === "10"); // false

// == performs type coercion.
// === compares without converting different types.

console.log(10 != "10");  // false
console.log(10 !== "10"); // true

console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false

// BEST PRACTICE:
// Prefer === and !== in most JavaScript code.


// =======================================================
// 4.4 LOGICAL OPERATORS
// =======================================================

/*
Logical operators are used to combine or reverse
Boolean conditions.

&&  Logical AND
||  Logical OR
!   Logical NOT

IMPORTANT:
Logical AND and OR do not necessarily return
Boolean values. They return one of their operands.
*/

// -------------------- LOGICAL AND ----------------------

// && returns the first falsy operand.
// If all operands are truthy, it returns the last operand.

console.log(true && true);   // true
console.log(true && false);  // false
console.log(10 && 20);       // 20
console.log(0 && 20);        // 0

// -------------------- LOGICAL OR -----------------------

// || returns the first truthy operand.
// If all operands are falsy, it returns the last operand.

console.log(true || false); // true
console.log(false || false); // false
console.log(0 || 100);       // 100
console.log("" || "Hello");  // Hello

// -------------------- LOGICAL NOT ----------------------

// ! converts a value to Boolean and reverses it.

console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
console.log(!1);     // false

// Double NOT (!!) converts a value into Boolean.

console.log(!!"Hello"); // true
console.log(!!"");      // false
console.log(!!100);     // true


// =======================================================
// 4.5 INCREMENT AND DECREMENT OPERATORS
// =======================================================

/*
Increment (++) increases a value by 1.
Decrement (--) decreases a value by 1.

There are two forms:

1. Prefix: ++a or --a
2. Postfix: a++ or a--

PREFIX:
First changes the value, then returns the new value.

POSTFIX:
First returns the current value, then changes it.
*/

// -------------------- PREFIX INCREMENT -----------------

let x = 5;

console.log(++x); // 6

// First increment x, then return its value.


// -------------------- POSTFIX INCREMENT ----------------

let y = 5;

console.log(y++); // 5

// First return the current value, then increment y.

console.log(y); // 6


// -------------------- PREFIX DECREMENT -----------------

let p = 5;

console.log(--p); // 4


// -------------------- POSTFIX DECREMENT ----------------

let q = 5;

console.log(q--); // 5

console.log(q); // 4


// =======================================================
// 4.6 UNARY OPERATORS
// =======================================================

/*
Unary operators operate on a single operand.

Some important unary operators:

+   Unary plus
-   Unary minus
!   Logical NOT
typeof  Type checking
void    Evaluates an expression and returns undefined
*/

let value = "100";

// Unary plus converts a value into a number.
console.log(+value); // 100

// Unary minus converts to number and negates it.
console.log(-value); // -100

// typeof returns the data type.
console.log(typeof value); // string

// Logical NOT reverses Boolean interpretation.
console.log(!value); // false

// void evaluates an expression and returns undefined.
console.log(void 0); // undefined


// =======================================================
// 4.7 TERNARY OPERATOR
// =======================================================

/*
The ternary operator is a shorthand for if-else.

Syntax:

condition ? expressionIfTrue : expressionIfFalse;

It evaluates the condition and returns one of
the two expressions.
*/

let age = 23;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult

// Another example.

let marks = 35;

let status = marks >= 40 ? "Pass" : "Fail";

console.log(status); // Fail


// =======================================================
// 4.8 NULLISH COALESCING OPERATOR (??)
// =======================================================

/*
The nullish coalescing operator returns the right-hand
operand only when the left-hand operand is null
or undefined.

It does NOT treat 0, false or empty string as missing.
*/

let username = null;

console.log(username ?? "Guest"); // Guest

console.log(0 ?? 100);         // 0
console.log(false ?? true);    // false
console.log("" ?? "Default");  // ""

// DIFFERENCE BETWEEN || AND ??

console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

// || checks all falsy values.
// ?? checks only null and undefined.


// =======================================================
// 4.9 OPTIONAL CHAINING OPERATOR (?.)
// =======================================================

/*
Optional chaining allows us to safely access
properties of an object.

If the value before ?. is null or undefined,
the expression returns undefined instead of
throwing a TypeError.
*/

let employee = {
    name: "Priyansha",
    address: {
        city: "Hyderabad"
    }
};

console.log(employee?.name); // Priyansha

console.log(employee?.address?.city); // Hyderabad

// Accessing a missing nested property safely.

console.log(employee?.company?.location); // undefined

// Without optional chaining, accessing a property
// on undefined or null can throw a TypeError.


// =======================================================
// 4.10 BITWISE OPERATORS
// =======================================================

/*
Bitwise operators perform operations on the binary
representation of numbers.

&   AND
|   OR
^   XOR
~   NOT
<<  Left shift
>>  Sign-propagating right shift
>>> Zero-fill right shift

JavaScript converts Number operands into 32-bit
integers for these operations.
*/

let first = 5;  // Binary: 0101
let second = 3; // Binary: 0011

console.log(first & second);  // 1
console.log(first | second);  // 7
console.log(first ^ second);  // 6
console.log(~first);          // -6

console.log(first << 1);  // 10
console.log(first >> 1);  // 2
console.log(first >>> 1); // 2

// Bitwise operators are useful for:
// Flags, permissions, masks and low-level operations.


// =======================================================
// 4.11 STRING OPERATORS
// =======================================================

/*
The + operator can concatenate strings.

The += operator can append a string to an existing
string variable.
*/

let firstName = "Priyansha";
let lastName = "Rawat";

console.log(firstName + " " + lastName);
// Priyansha Rawat

let message = "Hello";

message += " JavaScript";

console.log(message); // Hello JavaScript


// =======================================================
// 4.12 TYPE OPERATORS
// =======================================================

/*
typeof:
Returns the type of a value as a string.

instanceof:
Checks whether an object's prototype chain
contains a constructor's prototype.

in:
Checks whether a property exists in an object
or anywhere on its prototype chain.
*/

// typeof operator.

console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean
console.log(typeof {});      // object

// instanceof operator.

let date = new Date();

console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true

// in operator.

let user = {
    name: "Priyansha",
    age: 23
};

console.log("name" in user);    // true
console.log("salary" in user);  // false

// in checks property existence, including inherited
// properties. It does not check the property's value.


// =======================================================
// 4.13 RELATIONAL OPERATORS
// =======================================================

/*
Relational operators compare values or check
property relationships.

Important operators:

>       Greater than
<       Less than
>=      Greater than or equal
<=      Less than or equal
in      Property existence
instanceof  Prototype relationship

Some relational operators perform type coercion.
*/

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10); // true

// String comparison is lexicographical.

console.log("apple" < "banana"); // true


// =======================================================
// 4.14 OPERATOR PRECEDENCE
// =======================================================

/*
Operator precedence determines which operator
is evaluated first in an expression.

Operators with higher precedence are evaluated first.

Parentheses () can be used to control the order.

Example:
*/

console.log(2 + 3 * 4);   // 14

// Multiplication has higher precedence than addition.
// First: 3 * 4 = 12
// Then: 2 + 12 = 14

console.log((2 + 3) * 4); // 20

// Parentheses are evaluated first.
// First: 2 + 3 = 5
// Then: 5 * 4 = 20

console.log(10 + 5 > 12); // true

// Addition is evaluated before comparison.


// =======================================================
// 4.15 QUICK INTERVIEW REVISION
// =======================================================

/*
1. Arithmetic operators perform mathematical operations.

2. Assignment operators assign or update variable values.

3. Comparison operators return Boolean results.

4. == performs loose equality.
   === performs strict equality.

5. Logical AND (&&) returns the first falsy operand
   or the last operand if all are truthy.

6. Logical OR (||) returns the first truthy operand
   or the last operand if all are falsy.

7. Prefix increment changes the value before returning it.

8. Postfix increment returns the old value before
   changing it.

9. Ternary operator is a shorthand for if-else.

10. ?? checks only null and undefined.

11. ?. safely accesses nested properties.

12. Bitwise operators work on 32-bit integer
    representations of Number values.

13. typeof returns a string representing the type.

14. instanceof checks prototype-chain relationships.

15. in checks whether a property exists in an object.

16. Operator precedence determines evaluation order.
*/


// =======================================================
// 4.16 INTERVIEW PRACTICE QUESTIONS
// =======================================================

// Predict the output before executing.


// QUESTION 1: PRE-INCREMENT

// let a = 5;
// let result = ++a;
//
// console.log(a);
// console.log(result);
//
// Expected:
// 6
// 6


// QUESTION 2: POST-INCREMENT

// let a = 5;
// let result = a++;
//
// console.log(a);
// console.log(result);
//
// Expected:
// 6
// 5


// QUESTION 3: LOGICAL OR

// console.log(0 || false || "Hello");
//
// Expected: Hello


// QUESTION 4: LOGICAL AND

// console.log(10 && 20 && 0 && 30);
//
// Expected: 0


// QUESTION 5: NULLISH COALESCING

// console.log(null ?? 0 ?? 100);
//
// Expected: 0


// QUESTION 6: OPERATOR PRECEDENCE

// console.log(10 + 5 * 2);
//
// Expected: 20


// QUESTION 7: TERNARY OPERATOR

// let age = 17;
//
// console.log(age >= 18 ? "Adult" : "Minor");
//
// Expected: Minor


// QUESTION 8: OPTIONAL CHAINING

// let user = {};
//
// console.log(user.address?.city);
//
// Expected: undefined


// QUESTION 9: BITWISE AND

// console.log(5 & 3);
//
// Expected: 1


// QUESTION 10: TYPEOF

// console.log(typeof (10 + "20"));
//
// Expected: string


// =======================================================
// END OF TOPIC 4: OPERATORS IN JAVASCRIPT
// =======================================================
