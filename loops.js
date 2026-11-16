
/*
=========================================================
05. LOOPS IN JAVASCRIPT
=========================================================

A loop is used to execute a block of code repeatedly
until a particular condition is met.

Mindset:
A loop is for processing data.

Examples:
- Iterating over an array
- Searching for an element
- Calculating a sum
- Filtering or transforming data
- Processing object properties

JavaScript provides different ways to loop through data.
*/


// =======================================================
// 1. FOR LOOP
// =======================================================

/*
A for loop is useful when we know how many times
we want to execute a block of code.

Syntax:

for (initialization; condition; increment/decrement) {
    // code to execute
}

Execution:
1. Initialization runs only once.
2. Condition is checked.
3. If true, the loop body executes.
4. Increment/decrement runs.
5. Condition is checked again.
6. Loop stops when the condition becomes false.
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*
Output:
1
2
3
4
5
*/


// Example: Sum of first 5 natural numbers

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum); // 15


// =======================================================
// 2. WHILE LOOP
// =======================================================

/*
A while loop executes as long as its condition is true.

Use it when the number of iterations is not known
in advance.

Syntax:

while (condition) {
    // code
    // update condition variable
}

Important:
Make sure the condition eventually becomes false.
Otherwise, you may create an infinite loop.
*/

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

/*
Output:
1
2
3
4
5
*/


// Example: Find the number of digits in a number

let number = 12345;
let digits = 0;

while (number > 0) {
    digits++;
    number = Math.floor(number / 10);
}

console.log(digits); // 5


// =======================================================
// 3. DO-WHILE LOOP
// =======================================================

/*
A do-while loop executes the code at least once,
even if the condition is initially false.

Syntax:

do {
    // code
} while (condition);

Difference:
- while: checks condition before execution.
- do-while: checks condition after execution.
*/

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

/*
Output:
1
2
3
4
5
*/


// Important: Executes at least once

let value = 10;

do {
    console.log("Executed");
} while (value < 5);

/*
Output:
Executed

Even though the condition is false,
the do-while body executes once.
*/


// =======================================================
// 4. BREAK STATEMENT
// =======================================================

/*
break immediately terminates the nearest enclosing loop.

Use it when you want to stop looping once
a particular condition is satisfied.
*/

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

/*
Output:
1
2
3
4

When i becomes 5, the loop terminates.
*/


// =======================================================
// 5. CONTINUE STATEMENT
// =======================================================

/*
continue skips the current iteration and moves
to the next iteration of the loop.

Unlike break, it does not terminate the entire loop.
*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

/*
Output:
1
2
4
5

When i becomes 3, that iteration is skipped.
*/


// =======================================================
// 6. FOR...OF LOOP
// =======================================================

/*
for...of is used to iterate over the VALUES of
iterable objects.

Common examples:
- Arrays
- Strings
- Maps
- Sets

It is especially useful when you need each element
without manually managing an index.
*/

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
    console.log(fruit);
}

/*
Output:
Apple
Mango
Banana
*/


// Accessing array values with for...of

const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}

/*
Output:
10
20
30
*/


// Iterating over a string

const name = "Hello";

for (const character of name) {
    console.log(character);
}

/*
Output:
H
e
l
l
o
*/


// =======================================================
// 7. FOREACH LOOP
// =======================================================

/*
forEach() is an array method used to execute
a callback function for every array element.

Syntax:

array.forEach((element, index, array) => {
    // code
});

Parameters:
- element: current array element
- index: current element's index
- array: original array

Important:
- forEach() does not return a new transformed array.
- It returns undefined.
- break and continue cannot be used directly inside
  a forEach callback.
- return only exits the current callback execution;
  it does not stop the entire forEach loop.
*/

const scores = [10, 20, 30];

scores.forEach((score, index) => {
    console.log(index, score);
});

/*
Output:
0 10
1 20
2 30
*/


// forEach returns undefined

const result = scores.forEach((score) => {
    return score * 2;
});

console.log(result); // undefined


// =======================================================
// 8. FOR...IN LOOP
// =======================================================

/*
for...in is used to iterate over the enumerable
property KEYS of an object.

It gives property names, not property values.

Syntax:

for (const key in object) {
    // code
}
*/

const user = {
    name: "Priya",
    age: 23,
    role: "Developer"
};

for (const key in user) {
    console.log(key);
}

/*
Output:
name
age
role
*/


// Accessing values using the keys

for (const key in user) {
    console.log(key, user[key]);
}

/*
Output:
name Priya
age 23
role Developer
*/


// =======================================================
// 9. OBJECT.ENTRIES()
// =======================================================

/*
Object.entries() returns an array of an object's
own enumerable string-keyed [key, value] pairs.

It is useful when you want both keys and values
while iterating over an object.
*/

const employee = {
    name: "Rahul",
    department: "Engineering",
    salary: 50000
};

for (const [key, value] of Object.entries(employee)) {
    console.log(key, value);
}

/*
Output:
name Rahul
department Engineering
salary 50000
*/


// =======================================================
// 10. FOR...IN VS FOR...OF
// =======================================================

/*
This is a very common JavaScript interview question.

FOR...IN:
- Iterates over enumerable property KEYS.
- Commonly used with objects.
- On arrays, it gives the array indexes as strings.
- Can include enumerable inherited properties.

FOR...OF:
- Iterates over VALUES.
- Works with iterable objects.
- Commonly used with arrays, strings, Maps and Sets.
- Does not work directly with ordinary objects.

Example:

const arr = ["A", "B", "C"];

for (const key in arr) {
    console.log(key);
}

Output:
0
1
2

for (const value of arr) {
    console.log(value);
}

Output:
A
B
C

Remember:
for...in  = keys
for...of  = values
*/


// =======================================================
// 11. WHICH LOOP SHOULD YOU USE?
// =======================================================

/*
FOR LOOP:
Use when:
- You need an index.
- You need precise control over iterations.
- You may need break or continue.

WHILE LOOP:
Use when:
- The number of iterations is unknown.
- Execution depends on a condition.

DO-WHILE:
Use when:
- The code must execute at least once.

FOR...OF:
Use when:
- You want to iterate over values of an iterable.

FOREACH:
Use when:
- You want to perform an operation on every array element.
- You do not need to break out of the loop.

FOR...IN:
Use when:
- You want to iterate over an object's enumerable keys.

OBJECT.ENTRIES():
Use when:
- You need both object keys and values.
*/


// =======================================================
// 12. COMMON INTERVIEW QUESTIONS
// =======================================================

/*
Q1. What is the difference between for, while and do-while?

Answer:
- for: commonly used when the iteration count is known.
- while: checks the condition before each iteration.
- do-while: executes at least once before checking the condition.


Q2. What is the difference between break and continue?

Answer:
- break terminates the entire nearest enclosing loop.
- continue skips the current iteration.


Q3. What is the difference between forEach and for...of?

Answer:
- forEach is an array method that executes a callback.
- for...of is a language construct that iterates over values.
- for...of supports break and continue.
- forEach does not support break or continue directly.


Q4. Can we use break inside forEach?

Answer:
No. Using break directly inside a forEach callback
causes a SyntaxError.

Use for...of or a traditional for loop when you need
to stop early.


Q5. What is the difference between for...in and for...of?

Answer:
- for...in iterates over keys.
- for...of iterates over values.


Q6. Can we use for...of with an object?

Answer:
Not directly with a normal object because ordinary
objects are not iterable by default.

Use Object.keys(), Object.values() or Object.entries()
to iterate over object properties.


Q7. Does forEach return a new array?

Answer:
No. forEach returns undefined.

Use map() when you want a new transformed array.


Q8. What is an infinite loop?

Answer:
A loop that never reaches a terminating condition.

Example:

while (true) {
    console.log("Running");
}

This loop continues indefinitely unless interrupted.
*/


// =======================================================
// 13. PRACTICE QUESTIONS
// =======================================================

/*
Try solving these without looking at the solutions.

1. Print numbers from 1 to 100 using a for loop.

2. Print all even numbers between 1 and 50.

3. Calculate the factorial of a given number.

4. Reverse a number using a while loop.
   Example: 12345 -> 54321

5. Find the sum of all elements in an array.

6. Find the largest number in an array.

7. Count how many times a particular element
   appears in an array.

8. Print all keys and values of an object.

9. Explain the output of a for...in loop on an array.

10. Explain the difference between forEach and for...of.
*/


// =======================================================
// END OF 05. LOOPS
// =======================================================
