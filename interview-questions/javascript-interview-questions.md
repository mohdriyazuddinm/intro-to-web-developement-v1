# javascript interview questions

- What is JavaScript and how does it differ from Java?
  (JavaScript is a high-level, interpreted programming language primarily used for web development. It is dynamically typed and supports object-oriented, functional, and event-driven programming styles. Java, on the other hand, is a statically typed, compiled language used for a wide range of applications, including desktop and mobile development. The two languages have different syntax and use cases, despite sharing a similar name.)

- What are the data types in JavaScript?
  (JavaScript has several data types, including:

1. Primitive types: string, number, boolean, null, undefined, symbol (ES6+)
2. Object types: object, array, function)

- What is the difference between var, let, and const?
  ( `var` is function-scoped and can be redeclared and reassigned.
  `let` is block-scoped and cannot be redeclared in the same scope but can be reassigned.
  `const` is block-scoped, must be initialized at declaration, and cannot be redeclared or reassigned.)
- What is hoisting in JavaScript?
  (Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example, variables declared with `var` are hoisted and initialized with `undefined`, while variables declared with `let` and `const` are hoisted but not initialized, leading to a temporal dead zone if accessed before declaration.)
