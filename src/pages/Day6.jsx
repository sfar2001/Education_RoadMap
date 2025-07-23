import { Link } from 'react-router-dom';

export default function Day6() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 6</h1>
          <h2>Functions</h2>
          <h3>Function Basics: Function Declarations and Expressions</h3>
          <strong>Theory Explanation:</strong>
          <p>In JavaScript, a function is a reusable block of code that performs a specific task. Functions allow you to encapsulate logic and avoid repeating the same code multiple times throughout your program. There are two main ways to define functions in JavaScript: function declarations and function expressions.</p>
          <h4>Function Declarations:</h4>
          <pre><code>{`function functionName(param1, param2) {
  // Function body
  // Code to be executed
}`}</code></pre>
          <p>Function declarations are hoisted, meaning they are moved to the top of their containing scope (global or function scope) during the compilation phase, before the code is executed. This means you can call a function declared with a function declaration before it is defined in the code.</p>
          <h4>Function Expressions:</h4>
          <pre><code>{`// Anonymous function expression
const functionName = function(param1, param2) {
  // Function body
  // Code to be executed
};

// Named function expression
const functionName = function namedFunction(param1, param2) {
  // Function body
  // Code to be executed
};`}</code></pre>
          <p>Function expressions are not hoisted, meaning they cannot be called before they are defined in the code. This is because the function is first created as part of the expression, and then assigned to a variable or passed as an argument.</p>
          <strong>Real-world Example:</strong>
          <pre><code>{`// Function declaration
function calculateTotalCost(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Example usage
const order = [
  { name: 'Product A', price: 10, quantity: 2 },
  { name: 'Product B', price: 15, quantity: 1 },
  { name: 'Product C', price: 20, quantity: 3 },
];

const totalCost = calculateTotalCost(order);
console.log('Total cost: $' + totalCost); // Output: Total cost: $95`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ol>
              <li>The <code>calculateTotalCost</code> function is defined using a function declaration.</li>
              <li>The function takes a single parameter <code>items</code>, which is expected to be an array of objects representing the items in the order.</li>
              <li>Inside the function, a variable <code>total</code> is initialized to 0.</li>
              <li>The <code>for...of</code> loop is used to iterate over each item in the <code>items</code> array.</li>
              <li>For each item, the item's <code>price</code> is multiplied by its <code>quantity</code>, and the result is added to the <code>total</code> variable.</li>
              <li>After iterating over all items, the <code>total</code> cost is returned from the function.</li>
              <li>An example order is defined as an array of objects, where each object represents an item with properties <code>name</code>, <code>price</code>, and <code>quantity</code>.</li>
              <li>The <code>calculateTotalCost</code> function is called with the <code>order</code> array as an argument, and the result is stored in the <code>totalCost</code> variable.</li>
              <li>The <code>totalCost</code> is logged to the console using string concatenation.</li>
            </ol>
          </div>
          <h3>Arrow Functions: Introduction to Arrow Functions</h3>
          <strong>Theory Explanation:</strong>
          <p>Arrow functions, also known as "fat arrow" functions, are a concise syntax for writing function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact and expressive way to define functions, particularly when working with callbacks, higher-order functions, and functional programming.</p>
          <pre><code>{`// Arrow function with parameters
const functionName = (param1, param2) => {
  // Function body
  // Code to be executed
};

// Arrow function with a single parameter (parentheses can be omitted)
const functionName = param => {
  // Function body
  // Code to be executed
};

// Arrow function with a single line of code (curly braces and 'return' can be omitted)
const functionName = (param1, param2) => param1 + param2;`}</code></pre>
          <ul>
            <li><strong>Concise syntax</strong>: Arrow functions have a more concise syntax, especially when dealing with single-line functions or functions with a single parameter.</li>
            <li><strong>Lexical <code>this</code> binding</strong>: In regular functions, the value of <code>this</code> is determined by how the function is called. In arrow functions, <code>this</code> is lexically bound, meaning it inherits the <code>this</code> value from the surrounding lexical scope (the enclosing function or global scope).</li>
            <li><strong>No <code>arguments</code> object</strong>: Arrow functions do not have their own <code>arguments</code> object. Instead, they can access the <code>arguments</code> object from the closest non-arrow function.</li>
            <li><strong>No constructor</strong>: Arrow functions cannot be used as constructors with the <code>new</code> keyword.</li>
          </ul>
          <strong>Real-world Example:</strong>
          <pre><code>{`// Array of products
const products = [
  { name: 'Product A', price: 10 },
  { name: 'Product B', price: 15 },
  { name: 'Product C', price: 20 },
];

// Using an arrow function with reduce to calculate the total cost
const totalCost = products.reduce((total, product) => total + product.price, 0);
console.log('Total cost: $' + totalCost); // Output: Total cost: $45

// Using an arrow function with filter to get products with price > 15
const expensiveProducts = products.filter(product => product.price > 15);
console.log(expensiveProducts); // Output: [{ name: 'Product B', price: 15 }, { name: 'Product C', price: 20 }]`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ol>
              <li>An array of product objects <code>products</code> is defined.</li>
              <li>The <code>reduce</code> method is called on the <code>products</code> array. It takes two arguments: a callback function and an initial value for the accumulator (<code>total</code>).</li>
              <li>The callback function <code>(total, product) =&gt; total + product.price</code> is an arrow function that takes two parameters: <code>total</code> (the accumulator) and <code>product</code> (the current element in the array).</li>
              <li>Inside the arrow function, <code>total + product.price</code> is evaluated, and the result is returned implicitly due to the concise arrow function syntax.</li>
              <li>The <code>reduce</code> method iterates over each product, calling the arrow function with the accumulated <code>total</code> and the current <code>product</code>. The final result is the sum of all product prices, which is stored in the <code>totalCost</code> variable.</li>
              <li>The <code>filter</code> method is called on the <code>products</code> array, taking an arrow function <code>product =&gt; product.price {'>'} 15</code> as an argument.</li>
              <li>The arrow function <code>product =&gt; product.price {'>'} 15</code> is a concise way to represent a function that takes a <code>product</code> object and returns a boolean value based on whether the product's <code>price</code> is greater than 15.</li>
              <li>The <code>filter</code> method creates a new array <code>expensiveProducts</code> containing only the products that satisfy the condition in the arrow function.</li>
            </ol>
          </div>
          <h3>Parameters and Return Values: Passing Arguments and Returning Values</h3>
          <strong>Theory Explanation:</strong>
          <p>In JavaScript, functions can accept input values, known as parameters or arguments, and can also return a value as output. Parameters are placeholders for values that will be passed into the function when it is called, while return values allow functions to produce a result.</p>
          <pre><code>{`function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 3);
console.log(result); // Output: 15`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ol>
              <li>The <code>multiply</code> function is defined with two parameters, <code>a</code> and <code>b</code>.</li>
              <li>The function returns the product of <code>a</code> and <code>b</code>.</li>
              <li>The <code>multiply</code> function is called with arguments <code>5</code> and <code>3</code>, and the result is stored in the <code>result</code> variable.</li>
              <li>The result is logged to the console, outputting <code>15</code>.</li>
            </ol>
          </div>
          <h3>Scope and Closures: Understanding Scope, Block Scope, and Closures</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>Scope</strong>: The accessibility of variables and functions in different parts of the code.
              <ul>
                <li><strong>Global Scope</strong>: Variables declared outside any function are in the global scope.</li>
                <li><strong>Local Scope</strong>: Variables declared inside a function are in the local scope.</li>
                <li><strong>Block Scope</strong>: Variables declared with <code>let</code> or <code>const</code> inside a block (e.g., within curly braces) are in block scope.</li>
              </ul>
            </li>
            <li><strong>Closures</strong>: A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.</li>
          </ul>
          <strong>Example and Explanation:</strong>
          <h4>Global and Local Scope:</h4>
          <pre><code>{`let globalVar = "I'm global";

function showScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Output: I'm global
  console.log(localVar); // Output: I'm local
}

showScope();
console.log(localVar); // Error: localVar is not defined`}</code></pre>
          <h4>Closures:</h4>
          <pre><code>{`function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log('Outer variable: ' + outerVar);
    console.log('Inner variable: ' + innerVar);
  };
}

const closure = outerFunction("outside");
closure("inside");
// Output:
// Outer variable: outside
// Inner variable: inside`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ol>
              <li>In the <code>outerFunction</code>, <code>outerVar</code> is a parameter.</li>
              <li><code>innerFunction</code> is a closure that captures <code>outerVar</code>.</li>
              <li>When <code>outerFunction</code> is called, it returns <code>innerFunction</code>.</li>
              <li>The returned function is assigned to <code>closure</code> and called with "inside".</li>
              <li>The closure has access to both <code>outerVar</code> and <code>innerVar</code>.</li>
            </ol>
          </div>
          <h3>The <code>this</code> Keyword</h3>
          <strong>Theory Explanation:</strong>
          <p>In JavaScript, the <code>this</code> keyword refers to the current object context. Its value is determined by how a function is called, not how it is defined.</p>
          <strong>Four Scenarios for <code>this</code> Value:</strong>
          <ol>
            <li><strong>Global Context</strong>: In the global scope, <code>this</code> refers to the global object (<code>window</code> in browsers or <code>global</code> in Node.js).</li>
            <li><strong>Function Context</strong>: When a regular function is called, <code>this</code> is determined by how the function is called. If called as a method of an object, <code>this</code> refers to that object. If called as a standalone function, <code>this</code> refers to the global object (unless in strict mode, where <code>this</code> is <code>undefined</code>).</li>
            <li><strong>Method Context</strong>: When a function is defined as a method of an object, <code>this</code> refers to the object on which the method is called.</li>
            <li><strong>Constructor Context</strong>: When a function is used as a constructor with <code>new</code>, <code>this</code> refers to the newly created instance object.</li>
          </ol>
          <p>Arrow functions inherit the <code>this</code> value from the surrounding lexical scope.</p>
          <h4>Example: Method Context</h4>
          <pre><code>{`const person = {
  name: 'John Doe',
  age: 30,
  greet() {
    console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
  }
};

person.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.`}</code></pre>
          <h4>Example: Function Context</h4>
          <pre><code>{`function greet() {
  console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
}

const person = {
  name: 'John Doe',
  age: 30,
  greetPerson: greet
};

greet(); // Output: Hello, my name is undefined and I'm undefined years old.
person.greetPerson(); // Output: Hello, my name is John Doe and I'm 30 years old.`}</code></pre>
          <h4>Binding <code>this</code></h4>
          <pre><code>{`const person = {
  name: 'John Doe',
  age: 30,
  greet() {
    setTimeout(function() {
      console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
    }.bind(this), 1000);
  }
};

person.greet(); // Output: (after 1 second) Hello, my name is John Doe and I'm 30 years old.`}</code></pre>
          <p>In this example, <code>bind(this)</code> is used to explicitly bind the <code>this</code> value of the inner function to the <code>person</code> object, even when it is called asynchronously inside <code>setTimeout</code>.</p>
          <p>Understanding the behavior of <code>this</code> and using techniques like arrow functions, method binding, and strict mode can help you write more robust and maintainable JavaScript code.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 6 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day7" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day5" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 