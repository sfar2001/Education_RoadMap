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

export default function Day8() {
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
      <div className="centered-main">
        <section>
          <h1>Day 8</h1>
          <h2>Array Methods</h2>
          <h3>forEach()</h3>
          <ul>
            <li><strong>Description:</strong> Executes a provided function once for each array element.</li>
          </ul>
          <pre><code>{`const fruits = ["apple", "banana", "mango"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});`}</code></pre>
          <h3>map()</h3>
          <ul>
            <li><strong>Description:</strong> Creates a new array populated with the results of calling a provided function on every element in the calling array.</li>
          </ul>
          <pre><code>{`const numbers = [1, 2, 3, 4];
const squares = numbers.map(function(number) {
  return number * number;
});
console.log(squares); // [1, 4, 9, 16]`}</code></pre>
          <h3>filter()</h3>
          <ul>
            <li><strong>Description:</strong> Creates a new array with all elements that pass the test implemented by the provided function.</li>
          </ul>
          <pre><code>{`const ages = [32, 33, 16, 40];
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // [32, 33, 40]`}</code></pre>
          <h3>reduce()</h3>
          <ul>
            <li><strong>Description:</strong> Executes a reducer function on each element of the array, resulting in a single output value.</li>
          </ul>
          <pre><code>{`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 10`}</code></pre>
          <h3>find()</h3>
          <ul>
            <li><strong>Description:</strong> Returns the value of the first element in the provided array that satisfies the provided testing function.</li>
          </ul>
          <pre><code>{`const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const user = users.find(function(user) {
  return user.id === 2;
});
console.log(user); // { id: 2, name: 'Jane' }`}</code></pre>
          <h2>Object Methods</h2>
          <h3>Object.keys()</h3>
          <ul>
            <li><strong>Description:</strong> Returns an array of a given object's own enumerable property names.</li>
          </ul>
          <pre><code>{`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']`}</code></pre>
          <h3>Object.values()</h3>
          <ul>
            <li><strong>Description:</strong> Returns an array of a given object's own enumerable property values.</li>
          </ul>
          <pre><code>{`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']`}</code></pre>
          <h3>Object.entries()</h3>
          <ul>
            <li><strong>Description:</strong> Returns an array of a given object's own enumerable property [key, value] pairs.</li>
          </ul>
          <pre><code>{`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]`}</code></pre>
          <h3>Object.assign()</h3>
          <ul>
            <li><strong>Description:</strong> Copies all enumerable own properties from one or more source objects to a target object.</li>
          </ul>
          <pre><code>{`const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }`}</code></pre>
          <h3>Object.freeze()</h3>
          <ul>
            <li><strong>Description:</strong> Freezes an object, preventing new properties from being added to it and existing properties from being removed.</li>
          </ul>
          <pre><code>{`const person = {
  name: 'John',
  age: 30
};
Object.freeze(person);
person.age = 31; // This will not change the age property
console.log(person.age); // 30`}</code></pre>
          <h2>String Methods</h2>
          <h3>charAt()</h3>
          <ul>
            <li><strong>Description:</strong> Returns the character at the specified index.</li>
          </ul>
          <pre><code>{`const str = 'Hello World';
const char = str.charAt(0);
console.log(char); // 'H'`}</code></pre>
          <h3>includes()</h3>
          <ul>
            <li><strong>Description:</strong> Determines whether one string may be found within another string, returning true or false.</li>
          </ul>
          <pre><code>{`const str = 'Hello World';
const hasWorld = str.includes('World');
console.log(hasWorld); // true`}</code></pre>
          <h3>split()</h3>
          <ul>
            <li><strong>Description:</strong> Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.</li>
          </ul>
          <pre><code>{`const str = 'Hello World';
const words = str.split(' ');
console.log(words); // ['Hello', 'World']`}</code></pre>
          <h3>replace()</h3>
          <ul>
            <li><strong>Description:</strong> Returns a new string with some or all matches of a pattern replaced by a replacement.</li>
          </ul>
          <pre><code>{`const str = 'Hello World';
const newStr = str.replace('World', 'Universe');
console.log(newStr); // 'Hello Universe'`}</code></pre>
          <h3>substring()</h3>
          <ul>
            <li><strong>Description:</strong> Returns the part of the string between the start and end indexes, or to the end of the string.</li>
          </ul>
          <pre><code>{`const str = 'Hello World';
const subStr = str.substring(0, 5);
console.log(subStr); // 'Hello'`}</code></pre>
          <p>These methods are commonly used in JavaScript programming to handle arrays, objects, and strings efficiently and effectively.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 8 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
 
    </>
  );
} 