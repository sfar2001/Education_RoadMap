import { Link } from 'react-router-dom';

export default function Day7() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 7</h1>
          <h2>Objects</h2>
          <h3>Theory</h3>
          <p>Objects are a fundamental data type in JavaScript that allows you to store collections of key-value pairs. They represent real-world entities or concepts and can have properties (values associated with keys) and methods (functions associated with keys). Objects in JavaScript are dynamic, meaning you can add, remove, or modify properties at any time.</p>
          <h3>Real-world Code Example</h3>
          <pre><code>{`// Creating an object literal
const person = {
  name: 'John Doe',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// Accessing object properties
console.log(person.name); // Output: 'John Doe'
console.log(person['age']); // Output: 30

// Calling an object method
person.greet(); // Output: 'Hello, my name is John Doe'

// Adding a new property
person.occupation = 'Engineer';
console.log(person.occupation); // Output: 'Engineer'`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><strong>Object Creation</strong>: Created an object literal <code>person</code> with properties <code>name</code>, <code>age</code>, and a method <code>greet</code>.</li>
              <li><strong>Property Access</strong>: Accessed properties using dot notation (<code>person.name</code>) and bracket notation (<code>person['age']</code>).</li>
              <li><strong>Method Call</strong>: Called the <code>greet</code> method using dot notation (<code>person.greet()</code>).</li>
              <li><strong>Property Addition</strong>: Added a new property <code>occupation</code> to the <code>person</code> object.</li>
            </ul>
          </div>
          <h2>Classes</h2>
          <h3>Theory</h3>
          <p>Classes, introduced in ES6 (ES2015), provide a more structured and object-oriented approach to creating objects. They include features like constructor functions, inheritance, and static methods, serving as syntactic sugar over JavaScript's prototype-based inheritance model.</p>
          <h3>Real-world Code Example</h3>
          <pre><code>{`// Defining a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}

// Creating an instance of the class
const john = new Person('John Doe', 30);
console.log(john.name); // Output: 'John Doe'
john.greet(); // Output: 'Hello, my name is John Doe'

// Subclassing (inheritance)
class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }

  introduce() {
    console.log('My name is ' + this.name + ', and I work at ' + this.company);
  }
}

const jane = new Employee('Jane Smith', 25, 'Acme Inc.');
jane.introduce(); // Output: 'My name is Jane Smith, and I work at Acme Inc.'`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><strong>Class Definition</strong>: Defined a <code>Person</code> class with a constructor to initialize properties <code>name</code> and <code>age</code>, and a <code>greet</code> method.</li>
              <li><strong>Instance Creation</strong>: Created an instance of the <code>Person</code> class and accessed its properties and methods.</li>
              <li><strong>Inheritance</strong>: Defined an <code>Employee</code> class that extends <code>Person</code>, added a new property <code>company</code>, and created a method <code>introduce</code>.</li>
              <li><strong>Instance Creation for Subclass</strong>: Created an instance of the <code>Employee</code> class and used its methods.</li>
            </ul>
          </div>
          <h2>Arrays</h2>
          <h3>Theory</h3>
          <p>Arrays are ordered collections of values in JavaScript, where each value is assigned a numeric index. Arrays can store values of different data types, including objects and other arrays (nested arrays). JavaScript provides various built-in methods for manipulating arrays, such as <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, and more.</p>
          <h3>Real-world Code Example</h3>
          <pre><code>{`// Creating an array
const fruits = ['apple', 'banana', 'orange'];

// Accessing array elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[2]); // Output: 'orange'

// Array methods
fruits.push('grape'); // Adds 'grape' to the end of the array
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

const lastFruit = fruits.pop(); // Removes the last element from the array
console.log(lastFruit); // Output: 'grape'
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.unshift('kiwi'); // Adds 'kiwi' to the beginning of the array
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']

const firstFruit = fruits.shift(); // Removes the first element from the array
console.log(firstFruit); // Output: 'kiwi'
console.log(fruits); // Output: ['apple', 'banana', 'orange']`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><strong>Array Creation</strong>: Created an array <code>fruits</code> with three elements.</li>
              <li><strong>Element Access</strong>: Accessed elements using their indices.</li>
              <li><strong>Array Methods</strong>: Demonstrated use of <code>push</code>, <code>pop</code>, <code>unshift</code>, and <code>shift</code> methods for manipulating array elements.</li>
            </ul>
          </div>
          <h2>Iterating through Objects and Arrays</h2>
          <h3>Theory</h3>
          <p>JavaScript provides several ways to iterate over the properties of an object or the elements of an array:</p>
          <ul>
            <li><strong>for...in</strong>: Iterates over the enumerable properties of an object.</li>
            <li><strong>for...of</strong>: Iterates over the values of an iterable object, like an array.</li>
            <li><strong>forEach</strong>: Executes a provided function once for each array element.</li>
          </ul>
          <h3>Real-world Code Example</h3>
          <pre><code>{`// Iterating over an object
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Engineer'
};

// Using for...in
for (const prop in person) {
  console.log(prop + ': ' + person[prop]);
}

// Iterating over an array
const fruits = ['apple', 'banana', 'orange'];

// Using for...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Using forEach
fruits.forEach(function(fruit, index) {
  console.log(index + ': ' + fruit);
});`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><strong>Object Iteration</strong>: Used <code>for...in</code> to iterate over the properties of the <code>person</code> object.</li>
              <li><strong>Array Iteration</strong>: Used <code>for...of</code> to iterate over the elements of the <code>fruits</code> array.</li>
              <li><strong>Array Iteration with forEach</strong>: Used <code>forEach</code> method to execute a function for each element of the <code>fruits</code> array.</li>
            </ul>
          </div>
          <h2>Call, Bind, and Apply</h2>
          <h3>Theory</h3>
          <p><code>call</code>, <code>bind</code>, and <code>apply</code> are methods available on all JavaScript functions that allow you to control the execution context (<code>this</code> value) and pass arguments to the function:</p>
          <ul>
            <li><strong>call</strong> and <strong>apply</strong>: Invoke the function immediately with different execution contexts.</li>
            <li><strong>bind</strong>: Returns a new function with the <code>this</code> value bound, without invoking the function immediately.</li>
            <li><strong>Arguments</strong>: <code>call</code> and <code>bind</code> accept arguments individually, while <code>apply</code> accepts an array-like object as the arguments.</li>
          </ul>
          <h3>Real-world Code Example</h3>
          <pre><code>{`// Example function
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John Doe' };
const anotherPerson = { name: 'Jane Smith' };

// Using call
greet.call(person, 'Hello', '!'); // Output: 'Hello, John Doe!'
greet.call(anotherPerson, 'Hi', '?'); // Output: 'Hi, Jane Smith?'

// Using apply
greet.apply(person, ['Hello', '!!!']); // Output: 'Hello, John Doe!!!'

// Using bind
const greetJohn = greet.bind(person, 'Hey');
greetJohn('?'); // Output: 'Hey, John Doe?'
const greetJane = greet.bind(anotherPerson, 'Hello');
greetJane('!!!'); // Output: 'Hello, Jane Smith!!!'`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><strong>Function Definition</strong>: Defined a <code>greet</code> function that logs a message including the <code>name</code> property of the <code>this</code> object.</li>
              <li><strong>Using <code>call</code></strong>: Invoked the <code>greet</code> function immediately with different execution contexts and arguments.</li>
              <li><strong>Using <code>apply</code></strong>: Invoked the <code>greet</code> function immediately with an array of arguments.</li>
              <li><strong>Using <code>bind</code></strong>: Created new functions with the <code>this</code> value bound to different objects and invoked these functions with additional arguments.</li>
            </ul>
          </div>
          <h2>Activity: Create a To-Do List Application</h2>
          <h3>Step 1: Define the Task Object</h3>
          <pre><code>{`class Task {
  constructor(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }
}`}</code></pre>
          <h4>Explanation</h4>
          <ul>
            <li><strong>Class Definition</strong>: Defined a <code>Task</code> class with a constructor to initialize properties and a method to mark the task as completed.</li>
          </ul>
          <h3>Step 2: Create an Array to Store Tasks</h3>
          <pre><code>{`const tasks = [];`}</code></pre>
          <h4>Explanation</h4>
          <ul>
            <li><strong>Array Initialization</strong>: Created an empty array <code>tasks</code> to store task objects.</li>
          </ul>
          <h3>Step 3: Add Tasks to the List</h3>
          <pre><code>{`// Add a new task
const task1 = new Task('Buy groceries', '2023-06-15', 'high');
tasks.push(task1);

// Add another task
const task2 = new Task('Finish project report', '2023-06-20', 'medium');
tasks.push(task2);`}</code></pre>
          <h4>Explanation</h4>
          <ul>
            <li><strong>Task Addition</strong>: Created <code>Task</code> objects and added them to the <code>tasks</code> array using the <code>push</code> method.</li>
          </ul>
          <h3>Step 4: Display the Task List</h3>
          <pre><code>{`// Display the task list
console.log('To-Do List:');
tasks.forEach(function(task, index) {
  console.log((index + 1) + '. [' + task.priority + '] ' + task.description + ' (Due: ' + task.dueDate + ') - ' + (task.completed ? 'Completed' : 'Pending'));
});`}</code></pre>
          <h4>Explanation</h4>
          <ul>
            <li><strong>Task Display</strong>: Used <code>forEach</code> to iterate over the <code>tasks</code> array and log task details.</li>
          </ul>
          <h3>Step 5: Mark a Task as Completed</h3>
          <pre><code>{`// Mark the first task as completed
tasks[0].markAsCompleted();

// Display the updated task list
console.log('\nUpdated To-Do List:');
tasks.forEach(function(task, index) {
  console.log((index + 1) + '. [' + task.priority + '] ' + task.description + ' (Due: ' + task.dueDate + ') - ' + (task.completed ? 'Completed' : 'Pending'));
});`}</code></pre>
          <h4>Explanation</h4>
          <ul>
            <li><strong>Task Completion</strong>: Marked the first task as completed and displayed the updated task list.</li>
          </ul>
          <p>This guide comprehensively covers the topics of objects, classes, arrays, iterating through them, and using <code>call</code>, <code>bind</code>, and <code>apply</code>. It includes theoretical explanations, real-world code examples, and a practical activity to demonstrate the application of these concepts.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 7 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day8" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day6" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 