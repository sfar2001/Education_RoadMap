import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/day1', label: 'Day 1 - Introduction to HTML & CSS' },
  { to: '/day2', label: 'Day 2 - Intermediate HTML & CSS' },
  { to: '/day3', label: 'Day 3 - CSS Layout Techniques' },
  { to: '/day4', label: 'Day 4 - Introduction to JavaScript' },
  { to: '/day5', label: 'Day 5 - JavaScript Operators, Expressions & Control Flow' },
  { to: '/day6', label: 'Day 6 - JavaScript Functions, Scope, and this' },
  { to: '/day7', label: 'Day 7 - JavaScript Objects, Classes, Arrays, and Iteration' },
  { to: '/day8', label: 'Day 8 - JavaScript Array, Object, and String Methods' },
  { to: '/day9', label: 'Day 9 - DOM Basics' },
  { to: '/day10', label: 'Day 10 - Events in JavaScript' },
  { to: '/day11', label: 'Day 11 - Asynchronous JavaScript' },
  { to: '/promttricks', label: 'Prompt Tricks' },
  { to: '/githublearn', label: 'GitHub Learn' },
];

export default function Day4() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className={`intro-vertical-nav${navOpen ? ' intro-nav-open' : ''}`}>
        <button className="intro-nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <ul className="intro-nav-scroll">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link className="intro-nav-link" to={link.to} onClick={() => setNavOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="page-title">Day 4 - Introduction to JavaScript</div>
      <div className="centered-main">
        <section>
          <h1>Day 4</h1>
          <h2>Day 1: Introduction to JavaScript</h2>
          <h3>Overview: What is JavaScript?</h3>
          <strong>Theory Explanation:</strong>
          <p>JavaScript is a high-level, interpreted programming language that is primarily used for creating and controlling dynamic website content. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript allows you to implement complex features on web pages, such as interactive forms, animations, and dynamic content updates.</p>
          <h3>Role in Web Development: How JavaScript fits into HTML and CSS</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>HTML (HyperText Markup Language):</strong> This is the standard markup language for creating web pages. HTML provides the structure of the page, using elements such as headings, paragraphs, and images.</li>
            <li><strong>CSS (Cascading Style Sheets):</strong> CSS is used to control the presentation, formatting, and layout of the web page. It allows you to change the look and feel of HTML elements.</li>
            <li><strong>JavaScript:</strong> JavaScript brings web pages to life. It enables you to create dynamically updating content, control multimedia, animate images, and much more. JavaScript can interact with both HTML and CSS to modify the DOM (Document Object Model) based on user actions or other events.</li>
          </ul>
          <h3>Setup: Setting up the development environment (VS Code, Node.js)</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>VS Code (Visual Studio Code):</strong> A popular, open-source code editor that provides numerous features like syntax highlighting, debugging, and extensions to enhance productivity.</li>
            <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js allows you to run JavaScript code outside of a browser and comes with a package manager called npm (Node Package Manager).</li>
          </ul>
          <strong>Setup Instructions:</strong>
          <ol>
            <li>Install VS Code: Download and install Visual Studio Code from the official <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">website</a>.</li>
            <li>Install Node.js: Download and install Node.js from the official <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">website</a>. This will also install npm.</li>
            <li>Verify Installation: Open your terminal (command prompt) and type <code>node -v</code> and <code>npm -v</code> to check the versions of Node.js and npm.</li>
          </ol>
          <h3>Basic Syntax: Hello World, comments, basic syntax and structure</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>Hello World:</strong> The most basic program that outputs "Hello, World!" to the console.</li>
            <li><strong>Comments:</strong> Used to add notes or explanations within the code. Single-line comments use <code>//</code> and multi-line comments use <code>/* */</code>.</li>
            <li><strong>Basic Syntax:</strong> JavaScript code is written as statements, usually separated by semicolons. It is case-sensitive and ignores whitespace.</li>
          </ul>
          <strong>Code Example:</strong>
          <pre><code>{`// This is a single-line comment
/*
This is a multi-line comment
*/

// Hello World example
console.log('Hello, World!');`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li>The <code>console.log()</code> function is used to print messages to the web console.</li>
              <li>Comments are used to describe the code but are ignored during execution.</li>
            </ul>
          </div>
          <h3>Tools: Using browser developer tools</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li>Modern web browsers come with built-in developer tools that help debug and inspect code.</li>
            <li>These tools allow you to view the HTML structure, CSS styles, and JavaScript code, as well as monitor network requests and debug JavaScript.</li>
          </ul>
          <strong>Using Browser Developer Tools:</strong>
          <ol>
            <li>Open a web browser (Chrome, Firefox, Edge).</li>
            <li>Right-click on any web page and select "Inspect" or press <code>F12</code> to open the developer tools.</li>
            <li>Navigate to the "Console" tab to write and execute JavaScript code.</li>
          </ol>
          <h3>Activity: Simple script to display a message in the console</h3>
          <strong>Activity Instructions:</strong>
          <ol>
            <li>Open the browser developer tools.</li>
            <li>Go to the "Console" tab.</li>
            <li>Type the following code and press Enter:</li>
          </ol>
          <pre><code>{`console.log('Welcome to JavaScript programming!');`}</code></pre>
          <ol start={4}>
            <li>Observe the output in the console.</li>
          </ol>
          <h2>Day 2: Variables and Data Types</h2>
          <h3>Variables: Declaring variables (var, let, const)</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>var:</strong> Declares a variable that is function-scoped. It can be updated and re-declared within its scope.</li>
            <li><strong>let:</strong> Declares a block-scoped variable. It can be updated but not re-declared within the same scope.</li>
            <li><strong>const:</strong> Declares a block-scoped variable that cannot be updated or re-declared. It must be initialized at the time of declaration.</li>
          </ul>
          <strong>Code Example:</strong>
          <pre><code>{`var name = 'Alice';
let age = 25;
const country = 'USA';

// Trying to re-declare variables
var name = 'Bob'; // Allowed
// let age = 30; // Error: Identifier 'age' has already been declared
// const country = 'Canada'; // Error: Assignment to constant variable`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>name</code> is declared with <code>var</code> and can be re-declared.</li>
              <li><code>age</code> is declared with <code>let</code> and cannot be re-declared within the same scope.</li>
              <li><code>country</code> is declared with <code>const</code> and cannot be updated or re-declared.</li>
            </ul>
          </div>
          <h3>Data Types: Primitive data types (number, string, boolean, null, undefined, symbol)</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>Number:</strong> Represents numeric values. e.g., <code>42</code>, <code>3.14</code></li>
            <li><strong>String:</strong> Represents sequence of characters. e.g., <code>'Hello'</code>, <code>"World"</code></li>
            <li><strong>Boolean:</strong> Represents logical values. e.g., <code>true</code>, <code>false</code></li>
            <li><strong>Null:</strong> Represents the intentional absence of any object value. e.g., <code>null</code></li>
            <li><strong>Undefined:</strong> Represents an uninitialized variable. e.g., <code>undefined</code></li>
            <li><strong>Symbol:</strong> Represents a unique and immutable identifier. e.g., <code>Symbol('description')</code></li>
          </ul>
          <strong>Code Example:</strong>
          <pre><code>{`let num = 42;
let str = 'Hello, World!';
let bool = true;
let empty = null;
let notAssigned;
let sym = Symbol('unique');

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof empty); // object (a known quirk of JavaScript)
console.log(typeof notAssigned); // undefined
console.log(typeof sym); // symbol`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li>The <code>typeof</code> operator returns the data type of a variable.</li>
              <li><code>null</code> is considered an object due to a legacy bug in JavaScript.</li>
            </ul>
          </div>
          <h3>Type Conversion: Implicit and explicit conversion</h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>Implicit Conversion:</strong> Automatic type conversion by JavaScript. Also known as type coercion.</li>
            <li><strong>Explicit Conversion:</strong> Manually converting data types using functions like <code>String()</code>, <code>Number()</code>, <code>Boolean()</code>.</li>
          </ul>
          <strong>Code Example:</strong>
          <pre><code>{`// Implicit conversion
let implicitNum = '5' + 3; // '53' (string)
let implicitBool = '5' - 3; // 2 (number)

// Explicit conversion
let explicitNum = Number('5'); // 5 (number)
let explicitStr = String(5); // '5' (string)
let explicitBool = Boolean(1); // true (boolean)

console.log(implicitNum); // '53'
console.log(implicitBool); // 2
console.log(explicitNum); // 5
console.log(explicitStr); // '5'
console.log(explicitBool); // true`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li>Implicit conversion occurs when JavaScript automatically converts types based on the context.</li>
              <li>Explicit conversion is done using constructor functions like <code>Number()</code>, <code>String()</code>, and <code>Boolean()</code>.</li>
            </ul>
          </div>
          <h3>Constants: Using <code>const</code></h3>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><code>const</code> is used to declare variables that are immutable (cannot be reassigned). The value must be assigned at the time of declaration.</li>
            <li><code>const</code> variables are block-scoped, similar to <code>let</code>.</li>
          </ul>
          <strong>Code Example:</strong>
          <pre><code>{`const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable

const user = { name: 'Alice' };
user.name = 'Bob'; // Allowed (the object is mutable)

console.log(pi); // 3.14159
console.log(user.name); // 'Bob'`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>pi</code> is a constant and cannot be reassigned.</li>
              <li>The <code>user</code> object is a constant reference, but its properties can be changed.</li>
            </ul>
          </div>
          <h3>Activity: Simple calculator for basic operations using variables</h3>
          <strong>Activity Instructions:</strong>
          <ol>
            <li>Create a new JavaScript file in your code editor.</li>
            <li>Write a simple calculator script to perform addition, subtraction, multiplication, and division.</li>
            <li>Use variables to store the numbers and the results.</li>
          </ol>
          <strong>Code Example:</strong>
          <pre><code>{`let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log('Sum:', sum); // 15
console.log('Difference:', difference); // 5
console.log('Product:', product); // 50
console.log('Quotient:', quotient); // 2`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>num1</code> and <code>num2</code> store the numbers to be operated on.</li>
              <li><code>sum</code>, <code>difference</code>, <code>product</code>, and <code>quotient</code> store the results of the respective operations.</li>
              <li>The results are printed to the console using <code>console.log()</code>.</li>
            </ul>
          </div>
          <p>This guide provides a detailed, end-to-end explanation and practical examples for teaching the introduction to JavaScript and variables and data types, ensuring a solid foundation for beginners.</p>
          <pre><code>{`console.log(20)`}</code></pre>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 4 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
   
    </>
  );
} 