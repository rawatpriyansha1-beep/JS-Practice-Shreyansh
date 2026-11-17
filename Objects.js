
/*
=========================================================
08. OBJECTS IN JAVASCRIPT
=========================================================

An object is a collection of key-value pairs.

- Keys are also called properties.
- Values can be strings, numbers, booleans, arrays,
  functions, or even other objects.

Objects are used to represent real-world entities.

Example:
A user can have properties such as name, age and email.

Syntax:

const objectName = {
    key: value,
    key: value
};

*/


// =======================================================
// 1. CREATING OBJECTS
// =======================================================

// Object literal syntax

const user = {
    name: "Priya",
    age: 23,
    role: "Developer",
    isActive: true
};

console.log(user);

/*
Output:
{
    name: "Priya",
    age: 23,
    role: "Developer",
    isActive: true
}
*/


// Accessing object properties

console.log(user.name); // Priya
console.log(user.age);  // 23


// Adding new properties

user.city = "Hyderabad";

console.log(user.city); // Hyderabad


// Updating properties

user.age = 24;

console.log(user.age); // 24


// Deleting properties

delete user.isActive;

console.log(user.isActive); // undefined


// =======================================================
// 2. DOT NOTATION VS BRACKET NOTATION
// =======================================================

/*
DOT NOTATION:

object.property

Used when the property name is a valid identifier
and is known in advance.

BRACKET NOTATION:

object["property"]

Used when:
1. Property names contain spaces or special characters.
2. Property names are stored in variables.
3. You need dynamically computed property access.
*/

const employee = {
    name: "Rahul",
    age: 25,
    "job role": "Frontend Developer",
    salary: 50000
};


// Dot notation

console.log(employee.name); // Rahul


// Bracket notation

console.log(employee["job role"]); // Frontend Developer


// Dynamic property access

const property = "salary";

console.log(employee[property]); // 50000


// Important difference

console.log(employee.property); // undefined
console.log(employee[property]); // 50000

/*
employee.property looks for a property literally
named "property".

employee[property] uses the value stored in the
property variable, which is "salary".
*/


// =======================================================
// 3. NESTED OBJECTS
// =======================================================

/*
An object can contain another object as its value.

This is called a nested object.

Nested objects are useful for representing
complex structured data.
*/

const student = {
    name: "Priya",
    age: 23,

    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    },

    education: {
        degree: "B.Tech",
        branch: "Computer Science"
    }
};


// Accessing nested properties

console.log(student.address.city); // Hyderabad

console.log(student.education.degree); // B.Tech


// Updating nested properties

student.address.city = "Bangalore";

console.log(student.address.city); // Bangalore


// Adding nested properties

student.address.pincode = 500032;

console.log(student.address.pincode); // 500032


// =======================================================
// 4. DEEP ACCESS
// =======================================================

/*
Deep access means accessing properties that are
multiple levels inside nested objects.

Use dot notation or bracket notation to reach
the required property.
*/

const company = {
    name: "ABC Technologies",

    departments: {
        engineering: {
            frontend: {
                teamLead: "Rahul"
            }
        }
    }
};

console.log(
    company.departments.engineering.frontend.teamLead
);

// Output: Rahul


// =======================================================
// 5. OPTIONAL CHAINING (?.)
// =======================================================

/*
Optional chaining allows us to safely access
nested properties without causing an error
if an intermediate value is null or undefined.

Syntax:

object?.property
object?.property?.nestedProperty

Without optional chaining, accessing a property
on null or undefined causes a TypeError.

Important:
Optional chaining returns undefined when the
value before ?. is null or undefined.
*/

const customer = {
    name: "Priya",
    address: {
        city: "Hyderabad"
    }
};

console.log(customer.address?.city); // Hyderabad

console.log(customer.contact?.phone); // undefined

// Without optional chaining:
// console.log(customer.contact.phone);
// TypeError: Cannot read properties of undefined


// Optional chaining with arrays

const users = [
    {
        name: "Priya"
    }
];

console.log(users[0]?.name); // Priya
console.log(users[1]?.name); // undefined


// Optional chaining with function calls

const accountDetails = {
    name: "Priya"
};

accountDetails.getDetails?.(); // undefined

/*
If getDetails exists and is callable, it executes.
If it is null or undefined, the call is skipped.

Note: If the property exists but is not a function,
optional call syntax can still throw a TypeError.
*/


// =======================================================
// 6. COMPUTED PROPERTY NAMES
// =======================================================

/*
Computed property names allow us to create object
properties dynamically using expressions.

Use square brackets inside an object literal.

Syntax:

const obj = {
    [expression]: value
};

Useful when property names are determined at runtime.
*/

const key = "username";

const profile = {
    [key]: "Priya",
    ["user" + "Age"]: 23
};

console.log(profile);

/*
Output:
{
    username: "Priya",
    userAge: 23
}
*/


// Dynamic property creation

const dynamicKey = "city";

const person = {
    name: "Priya",
    [dynamicKey]: "Hyderabad"
};

console.log(person.city); // Hyderabad


// =======================================================
// 7. OBJECT DESTRUCTURING
// =======================================================

/*
Destructuring allows us to extract properties
from an object and store them in variables.

Syntax:

const { property1, property2 } = object;

The variable names normally match the property names.
*/

const developer = {
    name: "Priya",
    experience: 2,
    technology: "React"
};

const { name, experience, technology } = developer;

console.log(name);       // Priya
console.log(experience); // 2
console.log(technology); // React


// Renaming variables during destructuring

const { name: developerName } = developer;

console.log(developerName); // Priya


// Default values

const { salary = 30000 } = developer;

console.log(salary); // 30000

/*
Default values are used when the property is
missing or its value is undefined.
*/


// Nested object destructuring

const candidate = {
    name: "Priya",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const {
    address: { city, state }
} = candidate;

console.log(city);  // Hyderabad
console.log(state); // Telangana


// =======================================================
// 8. LOOPING THROUGH OBJECTS
// =======================================================

const product = {
    name: "Laptop",
    price: 60000,
    brand: "Dell"
};


// Method 1: for...in

/*
for...in iterates over enumerable property keys.

It can also visit enumerable inherited properties,
so use Object.hasOwn() when you only want an object's
own properties.
*/

for (const key in product) {

    if (Object.hasOwn(product, key)) {
        console.log(key, product[key]);
    }
}

/*
Output:
name Laptop
price 60000
brand Dell
*/


// Method 2: Object.keys()

/*
Object.keys() returns an array containing
the object's own enumerable string-keyed property names.
*/

const keys = Object.keys(product);

console.log(keys);

/*
Output:
["name", "price", "brand"]
*/

for (const key of Object.keys(product)) {
    console.log(key);
}


// Method 3: Object.values()

/*
Object.values() returns an array containing
the object's own enumerable string-keyed values.
*/

const values = Object.values(product);

console.log(values);

/*
Output:
["Laptop", 60000, "Dell"]
*/


// Method 4: Object.entries()

/*
Object.entries() returns an array of key-value pairs.

Each entry is an array:
[key, value]

Useful when we need both the key and value.
*/

const entries = Object.entries(product);

console.log(entries);

/*
Output:
[
    ["name", "Laptop"],
    ["price", 60000],
    ["brand", "Dell"]
]
*/


// Using Object.entries() with for...of

for (const [key, value] of Object.entries(product)) {
    console.log(key, value);
}


// =======================================================
// 9. COPYING OBJECTS
// =======================================================

/*
Objects are reference types.

When we assign one object variable to another,
both variables point to the same object.

Changing the object through one variable
also affects the other variable.
*/

const originalUser = {
    name: "Priya",
    age: 23
};

const referenceCopy = originalUser;

referenceCopy.age = 24;

console.log(originalUser.age); // 24

/*
Both variables refer to the same object.

No new object was created.
*/


// =======================================================
// 10. SHALLOW COPY USING SPREAD SYNTAX
// =======================================================

/*
Spread syntax (...) creates a shallow copy
of an object.

A shallow copy:
- Creates a new outer object.
- Copies top-level property values.
- Nested objects are still shared references.

Useful for copying and updating objects
without changing the original top-level properties.
*/

const original = {
    name: "Priya",
    address: {
        city: "Hyderabad"
    }
};

const shallowCopy = { ...original };

shallowCopy.name = "Rahul";

console.log(original.name);    // Priya
console.log(shallowCopy.name); // Rahul


// But nested objects are shared

shallowCopy.address.city = "Bangalore";

console.log(original.address.city); // Bangalore

/*
The outer objects are different,
but both share the same nested address object.
*/


// =======================================================
// 11. OBJECT.ASSIGN()
// =======================================================

/*
Object.assign() copies enumerable own properties
from one or more source objects into a target object.

Syntax:

Object.assign(target, source1, source2);

It returns the target object.

Important:
Object.assign() creates a shallow copy when
the target is a new empty object.
*/

const source = {
    name: "Priya",
    age: 23
};

const assignedCopy = Object.assign({}, source);

console.log(assignedCopy);

/*
Output:
{
    name: "Priya",
    age: 23
}
*/


// Merging objects

const details1 = {
    name: "Priya",
    age: 23
};

const details2 = {
    city: "Hyderabad",
    role: "Developer"
};

const combined = Object.assign({}, details1, details2);

console.log(combined);

/*
Output:
{
    name: "Priya",
    age: 23,
    city: "Hyderabad",
    role: "Developer"
}
*/


// =======================================================
// 12. DEEP CLONE
// =======================================================

/*
A deep clone creates a new object and independently
copies nested objects and arrays as well.

Changes to nested objects in the cloned object
do not affect the original object.

Modern JavaScript provides structuredClone().

Important:
structuredClone() supports many built-in data types,
including objects, arrays, Date, Map and Set.

It does not clone functions or DOM nodes.
It also does not preserve custom prototype chains
or property descriptors.
*/


const originalData = {
    name: "Priya",
    address: {
        city: "Hyderabad"
    },
    skills: ["JavaScript", "React"]
};

const deepCopy = structuredClone(originalData);

deepCopy.address.city = "Bangalore";
deepCopy.skills.push("Node.js");

console.log(originalData.address.city); // Hyderabad
console.log(originalData.skills);
// ["JavaScript", "React"]

console.log(deepCopy.address.city); // Bangalore
console.log(deepCopy.skills);
// ["JavaScript", "React", "Node.js"]


/*
JSON METHOD:

JSON.parse(JSON.stringify(object))

This is an older workaround for simple JSON-compatible
data, but it has limitations.

It does not correctly preserve:
- undefined values
- Functions
- Symbol values
- Date objects as Date instances
- Map and Set
- Circular references
- BigInt

Prefer structuredClone() when its supported data
types and cloning behavior meet your requirements.
*/


// =======================================================
// 13. OBJECT SPREAD: MERGING AND UPDATING
// =======================================================

const userInfo = {
    name: "Priya",
    age: 23
};

// Add properties

const updatedUser = {
    ...userInfo,
    city: "Hyderabad"
};

console.log(updatedUser);


// Override existing properties

const modifiedUser = {
    ...userInfo,
    age: 24
};

console.log(modifiedUser);

/*
When duplicate keys exist, the later property wins.
*/


// =======================================================
// 14. USEFUL OBJECT METHODS
// =======================================================

const studentInfo = {
    name: "Priya",
    age: 23
};


// Object.hasOwn()

/*
Checks whether an object has a property directly
on itself, not through its prototype chain.
*/

console.log(Object.hasOwn(studentInfo, "name")); // true
console.log(Object.hasOwn(studentInfo, "city")); // false


// Object.freeze()

/*
Prevents adding, deleting or changing existing
properties of an object at the top level.

Object.freeze() is shallow.
Nested objects can still be modified unless
they are frozen separately.
*/

const settings = {
    theme: "dark"
};

Object.freeze(settings);

// settings.theme = "light"; // Does not change in strict mode
// settings.language = "English"; // Does not add in strict mode

console.log(settings.theme); // dark


// Object.seal()

/*
Prevents adding or deleting properties.

Existing writable properties can still be updated.
*/

const config = {
    mode: "development"
};

Object.seal(config);

config.mode = "production";

console.log(config.mode); // production


// Object.is()

/*
Object.is() compares two values.

It is similar to strict equality (===),
but handles NaN and positive/negative zero differently.
*/

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN);         // false

console.log(Object.is(+0, -0)); // false
console.log(+0 === -0);         // true


// =======================================================
// 15. COMMON INTERVIEW QUESTIONS
// =======================================================

/*
Q1. What is an object in JavaScript?

Answer:
An object is a collection of key-value pairs.
It can contain primitive values, arrays, functions
and other objects.


Q2. Difference between dot notation and bracket notation?

Answer:
- Dot notation accesses a known property name.
- Bracket notation allows dynamic property access
  and property names containing spaces or special characters.


Q3. What is object destructuring?

Answer:
It extracts properties from objects into variables.


Q4. Difference between Object.keys(), Object.values()
    and Object.entries()?

Answer:
- Object.keys() returns property names.
- Object.values() returns property values.
- Object.entries() returns key-value pairs.


Q5. Difference between shallow copy and deep copy?

Answer:
- Shallow copy creates a new outer object but shares
  nested object references.
- Deep copy independently copies nested structures
  for supported values.


Q6. Difference between spread and Object.assign()?

Answer:
Both can create shallow copies and merge objects.

Spread:
const copy = { ...original };

Object.assign():
const copy = Object.assign({}, original);


Q7. What is optional chaining?

Answer:
It safely accesses nested properties using ?.
It returns undefined if the value before ?.
is null or undefined.


Q8. What are computed property names?

Answer:
They allow dynamic property names using expressions
inside square brackets.


Q9. Are objects mutable?

Answer:
Yes. Object properties can generally be added,
updated and deleted unless restrictions such as
Object.freeze() are applied.


Q10. What is the difference between freeze and seal?

Answer:
- freeze prevents adding, deleting and updating
  top-level properties.
- seal prevents adding and deleting properties,
  but existing writable properties can be updated.


Q11. What is the difference between == and ===
    when comparing objects?

Answer:
Objects are compared by reference identity.
Two separate objects with identical properties
are not equal using ===.


Example:
console.log({ a: 1 } === { a: 1 }); // false
*/


// =======================================================
// 16. PRACTICE QUESTIONS
// =======================================================

/*
1. Create an object representing an employee with
   name, age, salary and department.

2. Access and update properties using both dot
   and bracket notation.

3. Create a nested object for a user with address
   and education details. Access the city.

4. Destructure name, age and city from an object.

5. Use Object.keys() to get all keys of an object.

6. Use Object.values() to get all values.

7. Use Object.entries() to print every key-value pair.

8. Copy an object using spread syntax.
   Change a top-level property and observe the result.

9. Create a nested object and compare shallow copy
   with structuredClone().

10. Use optional chaining to safely access
    a nested property that may not exist.

11. Merge two objects using spread syntax.

12. Create a computed property name using a variable.

13. Explain why two separate objects with identical
    properties are not equal using ===.
*/


// =======================================================
// END OF 08. OBJECTS
// =======================================================
