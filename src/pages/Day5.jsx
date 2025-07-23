import { Link } from 'react-router-dom';

export default function Day5() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 5</h1>
          <h2>Overview</h2>
          <p>This guide covers the fundamental concepts of operators and expressions in JavaScript. It provides detailed theory explanations, real-world examples, and code explanations for each topic. By the end of this guide, students will understand various operators, how to use them in expressions, and how to control the flow of their programs using conditional logic.</p>
          <h3>Topics Covered</h3>
          <ol>
            <li>Operators
              <ul>
                <li>Arithmetic Operators</li>
                <li>Assignment Operators</li>
                <li>Comparison Operators</li>
                <li>Logical Operators</li>
                <li>Bitwise Operators</li>
              </ul>
            </li>
            <li>Expressions and Statements</li>
            <li>Operator Precedence</li>
            <li>Activity: Conditional Logic Practice and Creating a Simple Comparison Tool</li>
          </ol>
          <hr />
          <h2>1. Operators</h2>
          <h3>Arithmetic Operators</h3>
          <strong>Theory Explanation:</strong>
          <p>Arithmetic operators perform basic mathematical operations. They include:</p>
          <ul>
            <li><code>+</code> (Addition)</li>
            <li><code>-</code> (Subtraction)</li>
            <li><code>*</code> (Multiplication)</li>
            <li><code>/</code> (Division)</li>
            <li><code>%</code> (Modulus)</li>
            <li><code>++</code> (Increment)</li>
            <li><code>--</code> (Decrement)</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`// Price of items in the cart
let item1 = 20;
let item2 = 15;

// Calculate total price
let totalPrice = item1 + item2;
console.log('Total Price:', totalPrice); // Output: 35

// Apply discount
let discount = 5;
totalPrice = totalPrice - discount;
console.log('Total Price after discount:', totalPrice); // Output: 30

// Calculate tax
let taxRate = 0.1;
let tax = totalPrice * taxRate;
console.log('Tax:', tax); // Output: 3

// Final price
let finalPrice = totalPrice + tax;
console.log('Final Price:', finalPrice); // Output: 33`}</code></pre>
          <h3>Assignment Operators</h3>
          <strong>Theory Explanation:</strong>
          <p>Assignment operators assign values to variables. They include:</p>
          <ul>
            <li><code>=</code> (Assignment)</li>
            <li><code>+=</code> (Addition Assignment)</li>
            <li><code>-=</code> (Subtraction Assignment)</li>
            <li><code>*=</code> (Multiplication Assignment)</li>
            <li><code>/=</code> (Division Assignment)</li>
            <li><code>%=</code> (Modulus Assignment)</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`let totalPrice = 30;
let taxRate = 0.1;

// Calculate and assign tax
let tax = totalPrice * taxRate;
totalPrice += tax; // Same as totalPrice = totalPrice + tax
console.log('Total Price with tax:', totalPrice); // Output: 33`}</code></pre>
          <h3>Comparison Operators</h3>
          <strong>Theory Explanation:</strong>
          <p>Comparison operators compare two values and return a boolean result. They include:</p>
          <ul>
            <li><code>==</code> (Equal to)</li>
            <li><code>===</code> (Strict equal to)</li>
            <li><code>!=</code> (Not equal to)</li>
            <li><code>!==</code> (Strict not equal to)</li>
            <li><code>&gt;</code> (Greater than)</li>
            <li><code>&gt;=</code> (Greater than or equal to)</li>
            <li><code>&lt;</code> (Less than)</li>
            <li><code>&lt;=</code> (Less than or equal to)</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`let userSpending = 150;
let discountThreshold = 100;

let isEligibleForDiscount = userSpending >= discountThreshold;
console.log('Is eligible for discount:', isEligibleForDiscount); // Output: true`}</code></pre>
          <h3>Logical Operators</h3>
          <strong>Theory Explanation:</strong>
          <p>Logical operators combine multiple boolean expressions. They include:</p>
          <ul>
            <li><code>&&</code> (Logical AND)</li>
            <li><code>||</code> (Logical OR)</li>
            <li><code>!</code> (Logical NOT)</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`let isMember = true;
let userSpending = 120;
let discountThreshold = 100;

let isEligibleForDiscount = isMember && userSpending >= discountThreshold;
console.log('Is eligible for discount:', isEligibleForDiscount); // Output: true

// Check if user is not a member
let notMember = !isMember;
console.log('Is not a member:', notMember); // Output: false`}</code></pre>
          <h3>Bitwise Operators</h3>
          <strong>Theory Explanation:</strong>
          <p>Bitwise operators perform operations on binary representations of numbers. They include:</p>
          <ul>
            <li><code>&&</code> (AND)</li>
            <li><code>|</code> (OR)</li>
            <li><code>^</code> (XOR)</li>
            <li><code>~</code> (NOT)</li>
            <li><code>&lt;&lt;</code> (Left shift)</li>
            <li><code>&gt;&gt;</code> (Right shift)</li>
            <li><code>&gt;&gt;&gt;</code> (Unsigned right shift)</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`let a = 5; // Binary: 0101
let b = 3; // Binary: 0011

let andResult = a & b;
console.log('AND Result:', andResult); // Output: 1 (Binary: 0001)

let orResult = a | b;
console.log('OR Result:', orResult); // Output: 7 (Binary: 0111)

let xorResult = a ^ b;
console.log('XOR Result:', xorResult); // Output: 6 (Binary: 0110)`}</code></pre>
          <h2>2. Expressions and Statements</h2>
          <strong>Theory Explanation:</strong>
          <ul>
            <li><strong>Expression:</strong> Any valid unit of code that resolves to a value. Examples: <code>5 + 3</code>, <code>userAge &gt; 18</code>.</li>
            <li><strong>Statement:</strong> A unit of code that performs an action. Examples: <code>let userName = 'John';</code>, <code>if (userAge &gt; 18) {'{'} ... {'}'}</code>.</li>
          </ul>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`// Expression
let sum = 5 + 3; // The expression '5 + 3' evaluates to 8

// Statement
if (sum > 5) {
    console.log('Sum is greater than 5'); // Output: Sum is greater than 5
}`}</code></pre>
          <h2>3. Operator Precedence</h2>
          <strong>Theory Explanation:</strong>
          <p>Operator precedence determines the order in which operators are evaluated. Operators with higher precedence are evaluated before operators with lower precedence.</p>
          <strong>Real-World Example and Code Explanation:</strong>
          <pre><code>{`let result = 5 + 3 * 2; // Multiplication has higher precedence than addition
console.log('Result:', result); // Output: 11 (3 * 2 is evaluated first, then 5 + 6)

result = (5 + 3) * 2; // Parentheses alter the precedence
console.log('Result with parentheses:', result); // Output: 16`}</code></pre>
          <h2>4. Activity: Conditional Logic Practice and Creating a Simple Comparison Tool</h2>
          <strong>Objective:</strong> Apply the knowledge of operators and expressions to create a simple comparison tool that takes user input and compares values.
          <strong>Instructions:</strong>
          <ol>
            <li>Create an HTML file (<code>comparisonTool.html</code>) with a form for user input:</li>
          </ol>
          <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison Tool</title>
</head>
<body>
    <h1>Comparison Tool</h1>
    <form id="comparison-form">
        <label for="value1">Value 1:</label>
        <input type="number" id="value1" required>
        <label for="value2">Value 2:</label>
        <input type="number" id="value2" required>
        <button type="button" onclick="compareValues()">Compare</button>
    </form>
    <p id="comparison-result"></p>

    <script src="comparisonTool.js"></script>
</body>
</html>`}</code></pre>
          <ol start={2}>
            <li>Create a JavaScript file (<code>comparisonTool.js</code>) with the following code:</li>
          </ol>
          <pre><code>{`function compareValues() {
    // Get values from the form
    let value1 = parseFloat(document.getElementById('value1').value);
    let value2 = parseFloat(document.getElementById('value2').value);

    // Initialize the result message
    let resultMessage;

    // Compare values using various operators
    if (value1 > value2) {
        resultMessage = value1 + ' is greater than ' + value2;
    } else if (value1 < value2) {
        resultMessage = value1 + ' is less than ' + value2;
    } else if (value1 === value2) {
        resultMessage = value1 + ' is equal to ' + value2;
    } else {
        resultMessage = 'Invalid comparison';
    }

    // Display the result
    document.getElementById('comparison-result').textContent = resultMessage;

    // Log the comparison results to the console
    console.log('Value 1:', value1);
    console.log('Value 2:', value2);
    console.log('Comparison Result:', resultMessage);
}`}</code></pre>
          <div className="code-explanation">
            <strong>Explanation:</strong>
            <ul>
              <li>The HTML file contains a form with two input fields and a button to trigger the comparison.</li>
              <li>The JavaScript file defines the <code>compareValues</code> function, which:
                <ul>
                  <li>Retrieves the values from the input fields.</li>
                  <li>Compares the values using comparison operators (<code>&gt;</code>, <code>&lt;</code>, <code>===</code>).</li>
                  <li>Displays and logs the comparison result.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p>By completing these assignments, students will gain a thorough understanding of JavaScript operators, expressions, and statements, and how to use them effectively in their code. They will also practice creating interactive web applications and using conditional logic to control the flow of their programs.</p>
          <h2>Overview of Control Structures</h2>
          <p>Control structures in JavaScript help you control the flow of execution in your programs. They include conditionals and loops, which allow you to execute different code blocks based on certain conditions or repeat code multiple times. Understanding control structures is essential for creating dynamic and responsive applications.</p>
          <h3>1. Conditionals: if, else if, else, switch Statements</h3>
          <strong>Theory</strong>
          <ul>
            <li><strong>if Statement</strong>: Executes a block of code if a specified condition is true.</li>
            <li><strong>else if Statement</strong>: Specifies a new condition to test if the first condition is false.</li>
            <li><strong>else Statement</strong>: Executes a block of code if none of the previous conditions are true.</li>
            <li><strong>switch Statement</strong>: Evaluates an expression and executes code blocks based on the matching case.</li>
          </ul>
          <strong>Example and Explanation</strong>
          <pre><code>{`let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 20) {
    console.log("It's warm outside.");
} else {
    console.log("It's cool outside.");
}`}</code></pre>
          <ul>
            <li>If <code>temperature</code> is greater than 30, it prints "It's hot outside."</li>
            <li>If <code>temperature</code> is between 21 and 30, it prints "It's warm outside."</li>
            <li>If <code>temperature</code> is 20 or below, it prints "It's cool outside."</li>
          </ul>
          <pre><code>{`let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);`}</code></pre>
          <ul>
            <li>The switch statement evaluates the value of <code>day</code> and executes the corresponding case block.</li>
            <li><code>break</code> prevents the code from executing the next case block.</li>
            <li><code>default</code> is executed if no cases match.</li>
          </ul>
          <h3>2. Loops: for, while, do-while Loops</h3>
          <strong>Theory</strong>
          <ul>
            <li><strong>for Loop</strong>: Repeats a block of code a specific number of times.</li>
            <li><strong>while Loop</strong>: Repeats a block of code as long as a specified condition is true.</li>
            <li><strong>do-while Loop</strong>: Executes a block of code once and then repeats as long as a specified condition is true.</li>
          </ul>
          <strong>Example and Explanation</strong>
          <pre><code>{`for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}`}</code></pre>
          <pre><code>{`let i = 0;

while (i < 5) {
    console.log("Number: " + i);
    i++;
}`}</code></pre>
          <pre><code>{`let i = 0;

do {
    console.log("Number: " + i);
    i++;
} while (i < 5);`}</code></pre>
          <h3>3. Control Flow: Break and Continue Statements</h3>
          <strong>Theory</strong>
          <ul>
            <li><strong>break Statement</strong>: Exits the loop immediately.</li>
            <li><strong>continue Statement</strong>: Skips the current iteration and proceeds to the next iteration of the loop.</li>
          </ul>
          <strong>Example and Explanation</strong>
          <pre><code>{`for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("Number: " + i);
}`}</code></pre>
          <pre><code>{`for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("Number: " + i);
}`}</code></pre>
          <h3>4. Activity: Create a Simple Guessing Game</h3>
          <strong>Objective</strong>
          <p>Create a guessing game where the user has to guess a randomly generated number between 1 and 100.</p>
          <strong>Instructions</strong>
          <ol>
            <li>Create an HTML file with an input field for the user's guess and a button to submit the guess.</li>
            <li>Write JavaScript to generate a random number and check the user's guess.</li>
            <li>Provide feedback if the guess is too high, too low, or correct.</li>
            <li>Use loops and conditionals to control the game flow.</li>
          </ol>
          <strong>Example and Code Explanation</strong>
          <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game</title>
</head>
<body>
    <h1>Guess the Number</h1>
    <input type="number" id="guess" placeholder="Enter your guess" />
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="feedback"></p>

    <script src="guessingGame.js"></script>
</body>
</html>`}</code></pre>
          <pre><code>{`let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed the number in ' + attempts + ' attempts.';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    }
}`}</code></pre>
          <div className="code-explanation">
            <strong>Explanation:</strong>
            <ul>
              <li><code>randomNumber</code> is a random number between 1 and 100.</li>
              <li><code>attempts</code> keeps track of the number of guesses.</li>
              <li><code>checkGuess()</code> is called when the user submits their guess.</li>
              <li>The user's guess is compared to <code>randomNumber</code> using conditionals.</li>
              <li>Feedback is provided based on whether the guess is too high, too low, or correct.</li>
            </ul>
          </div>
          <h2>Summary</h2>
          <p>This guide covered the fundamental control structures in JavaScript, including conditionals (if, else if, else, switch), loops (for, while, do-while), and control flow statements (break, continue). The guide included theory, real-world code examples, and a practical activity to create a simple guessing game. By understanding and practicing these concepts, you will be well-equipped to control the flow of your JavaScript programs effectively.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 5 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day6" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day4" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 