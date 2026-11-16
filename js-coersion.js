
/*
=========================================================
          3. JAVASCRIPT TYPE COERCION
=========================================================

Type Coercion is the process of converting a value
from one data type to another.

JavaScript performs type coercion automatically
in certain operations.

There are two types of type conversion:

1. Implicit Type Conversion
2. Explicit Type Conversion


-------------------- 1. IMPLICIT COERCION ----------------

Implicit coercion happens when JavaScript automatically
converts one data type into another.

Example:

console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log("5" / 2);  // 2.5

Explanation:

- With +, if a string is involved, JavaScript
  generally performs string concatenation.
- With -, *, and /, JavaScript generally converts
  numeric strings into numbers.


-------------------- 2. EXPLICIT COERCION ----------------

Explicit coercion happens when the developer
intentionally converts one data type into another.

Examples:

Number("100");     // 100
String(100);       // "100"
Boolean(1);        // true
parseInt("25px");  // 25
parseFloat("10.5"); // 10.5

=========================================================
*/


// =======================================================
// 3.1 STRING AND NUMBER COERCION
// =======================================================

console.log("10" + 5);  // "105"
console.log("10" - 5);  // 5
console.log("10" * 5);  // 50
console.log("10" / 5);  // 2

// + operator performs concatenation when a string
// is involved in the primitive conversion process.

// Other arithmetic operators generally convert
// operands to numbers.

console.log(10 + "20"); // "1020"
console.log(10 - "20"); // -10
console.log(10 * "2");  // 20


// =======================================================
// 3.2 THE PLUS (+) OPERATOR
// =======================================================

// The + operator can perform:
// 1. Addition
// 2. String concatenation

console.log(10 + 20);       // 30
console.log("Hello" + 10);  // "Hello10"
console.log(10 + "20");     // "1020"
console.log("10" + "20");   // "1020"

// Once string concatenation occurs,
// the values are converted into strings.

console.log(1 + 2 + "3");   // "33"
console.log("1" + 2 + 3);   // "123"
console.log(1 + "2" + 3);   // "123"


// =======================================================
// 3.3 BOOLEAN COERCION
// =======================================================

// JavaScript converts values into true or false
// when Boolean() is explicitly called.

// FALSY VALUES:

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// TRUTHY VALUES:

console.log(Boolean("hello")); // true
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
console.log(Boolean(1));       // true
console.log(Boolean(-1));      // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

// IMPORTANT:
// Empty arrays and empty objects are truthy in JavaScript.
// A non-empty string is truthy, even if it contains "false".


// =======================================================
// 3.4 EQUALITY OPERATORS (== VS ===)
// =======================================================

// == : Loose equality
// Performs type coercion when necessary.

// === : Strict equality
// Compares without converting different types.

console.log(5 == "5");  // true
console.log(5 === "5"); // false

console.log(0 == false);  // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log("" == 0);  // true
console.log("" === 0); // false

// BEST PRACTICE:
// Prefer === to avoid unexpected type coercion.


// =======================================================
// 3.5 NULL VS UNDEFINED
// =======================================================

// undefined:
// A variable has been declared but not assigned a value.

// null:
// Represents an intentional absence of a value.

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (historical quirk)

console.log(null == undefined);  // true
console.log(null === undefined); // false


// =======================================================
// 3.6 EXPLICIT TYPE CONVERSION
// =======================================================

console.log(Number("100"));    // 100
console.log(Number("hello"));  // NaN
console.log(Number(""));       // 0
console.log(Number(true));     // 1
console.log(Number(false));    // 0

console.log(String(100));      // "100"
console.log(String(true));     // "true"
console.log(String(null));     // "null"

console.log(parseInt("25px"));    // 25
console.log(parseFloat("10.5"));  // 10.5

// Number() converts the entire string.
// parseInt() parses an integer from the beginning.
// parseFloat() parses a floating-point number.


// =======================================================
// 3.7 JAVASCRIPT QUIRKS
// =======================================================

// These are unusual JavaScript behaviors that
// are commonly discussed in interviews.

// QUIRK 1: typeof null

console.log(typeof null); // "object"

// This is a historical JavaScript behavior.
// null is actually a primitive value.


// QUIRK 2: Empty array is truthy.

console.log(Boolean([])); // true

if ([]) {
    console.log("This will execute");
}


// QUIRK 3: Empty object is truthy.

console.log(Boolean({})); // true


// QUIRK 4: NaN is not equal to itself.

console.log(NaN === NaN); // false

// Use Number.isNaN() to check for NaN.

console.log(Number.isNaN(NaN)); // true


// QUIRK 5: Addition with empty arrays.

console.log([] + []); // ""

console.log([] + {}); // "[object Object]"

console.log({} + []); // "[object Object]" in a typical
// Node.js expression context.

// Explanation:
// Arrays and objects undergo primitive conversion.
// An empty array converts to an empty string.
// A plain object generally converts to "[object Object]".


// QUIRK 6: Array plus number.

console.log([] + 1); // "1"

console.log([1, 2] + 3); // "1,23"

// Arrays are converted to strings during concatenation.


// QUIRK 7: true and false with numbers.

console.log(true + true);   // 2
console.log(true + false);  // 1
console.log(false + false); // 0

// true converts to 1.
// false converts to 0.


// QUIRK 8: Comparing strings.

console.log("10" > "2"); // false

// Strings are compared lexicographically
// (character by character), not numerically.

console.log(Number("10") > Number("2")); // true


// QUIRK 9: Comparing number and string.

console.log("10" > 2); // true

// In relational comparison, the numeric string
// is converted into a number.


// QUIRK 10: Adding null and numbers.

console.log(null + 10); // 10

// null converts to 0 in numeric operations.


// QUIRK 11: Adding undefined and numbers.

console.log(undefined + 10); // NaN

// undefined converts to NaN in numeric operations.


// QUIRK 12: typeof NaN.

console.log(typeof NaN); // "number"

// NaN means Not-a-Number, but its type is number.


// =======================================================
// 3.8 QUICK INTERVIEW REVISION
// =======================================================

/*
1. Type coercion means converting one data type
   into another.

2. Implicit coercion is performed automatically.

3. Explicit coercion is performed intentionally
   by the developer.

4. The + operator can perform addition or concatenation.

5. Other arithmetic operators generally convert
   numeric strings into numbers.

6. == performs loose equality and may coerce types.

7. === performs strict equality without coercing
   different types.

8. Empty arrays and empty objects are truthy.

9. null is a primitive, although typeof null
   returns "object".

10. NaN is not equal to itself.

11. Number.isNaN() checks whether a value is NaN.

12. Prefer strict equality (===) in most application code.
*/


// =======================================================
// END OF TOPIC 3: TYPE COERCION & JS QUIRKS
// =======================================================
