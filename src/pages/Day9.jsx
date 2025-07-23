import { Link } from 'react-router-dom';

export default function Day9() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 9</h1>
          <h2>DOM Basics</h2>
          <p>The Document Object Model (DOM) is a programming interface that represents the structure of a web page as a tree-like structure. It consists of various nodes, such as the document itself, elements, text nodes, and attributes.</p>
          <h3>DOM Tree Structure</h3>
          <p>The DOM tree structure is hierarchical, with the <code>document</code> object at the root. The <code>document</code> object has a single child node, the <code>&lt;html&gt;</code> element, which in turn has two child nodes: <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>. Each of these nodes can have its own child nodes, and so on, forming a tree-like structure.</p>
          <pre><code>{`document
└── <html>
    ├── <head>
    │   ├── <title>
    │   └── ...
    └── <body>
        ├── <h1>
        ├── <p>
        └── ...`}</code></pre>
          <h3>Selecting Elements</h3>
          <p>In addition to the <code>getElementById()</code> and <code>querySelector()</code> methods we discussed earlier, there are a few more methods for selecting elements from the DOM:</p>
          <ul>
            <li><strong>getElementsByTagName()</strong>: Returns a live HTMLCollection of elements with the specified tag name.</li>
          </ul>
          <pre><code>{`const paragraphs = document.getElementsByTagName('p');`}</code></pre>
          <ul>
            <li><strong>getElementsByClassName()</strong>: Returns a live HTMLCollection of elements with the specified class name.</li>
          </ul>
          <pre><code>{`const redElements = document.getElementsByClassName('red');`}</code></pre>
          <ul>
            <li><strong>querySelectorAll()</strong>: Returns a static NodeList of elements that match the specified CSS selector.</li>
          </ul>
          <pre><code>{`const allDivs = document.querySelectorAll('div');`}</code></pre>
          <h3>Traversing the DOM</h3>
          <p>Once you have selected an element, you can traverse the DOM tree using various properties and methods:</p>
          <ul>
            <li><strong>parentNode</strong>: Returns the parent node of the specified node.</li>
            <li><strong>childNodes</strong>: Returns a live NodeList of child nodes of the specified node.</li>
            <li><strong>firstChild</strong> and <strong>lastChild</strong>: Returns the first and last child node, respectively.</li>
            <li><strong>nextSibling</strong> and <strong>previousSibling</strong>: Returns the next and previous sibling node, respectively.</li>
          </ul>
          <pre><code>{`const childNode = element.firstChild;
const parentNode = childNode.parentNode;
const nextSibling = childNode.nextSibling;`}</code></pre>
          <h3>Creating and Modifying Elements</h3>
          <p>In addition to modifying the content and styles of existing elements, you can also create new elements and modify their properties.</p>
          <h4>Creating Elements</h4>
          <pre><code>{`const newDiv = document.createElement('div');
const newText = document.createTextNode('This is a new text node');
newDiv.appendChild(newText); // Append the text node to the new div
document.body.appendChild(newDiv); // Append the new div to the body`}</code></pre>
          <h4>Modifying Attributes</h4>
          <pre><code>{`const link = document.createElement('a');
link.href = 'https://www.example.com';
link.textContent = 'Example Link';
document.body.appendChild(link);`}</code></pre>
          <h4>Removing Elements</h4>
          <pre><code>{`const element = document.getElementById('myElement');
element.parentNode.removeChild(element);`}</code></pre>
          <h3>DOM Events</h3>
          <p>In addition to the <code>click</code> event we covered earlier, there are many other events that you can listen for and respond to, such as <code>mouseover</code>, <code>keydown</code>, <code>submit</code>, and more.</p>
          <pre><code>{`const input = document.getElementById('myInput');
input.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});`}</code></pre>
          <h3>DOM Manipulation Best Practices</h3>
          <p>While DOM manipulation is powerful, it's important to use it judiciously, as excessive DOM manipulation can negatively impact performance. Here are some best practices:</p>
          <ol>
            <li><strong>Minimize DOM updates</strong>: Instead of making frequent updates to the DOM, batch your updates and perform them all at once.</li>
            <li><strong>Use document fragments</strong>: When adding multiple elements to the DOM, create a document fragment, build your structure within it, and then append the fragment to the DOM.</li>
            <li><strong>Use event delegation</strong>: Instead of attaching event listeners to each individual element, attach a single listener to a parent element and handle the events using event bubbling and the <code>target</code> property.</li>
            <li><strong>Use modern JavaScript features</strong>: Take advantage of modern JavaScript features like template literals, arrow functions, and destructuring to write more concise and readable code.</li>
          </ol>
          <h3>DOM Manipulation Libraries</h3>
          <p>While you can manipulate the DOM directly using vanilla JavaScript, there are also popular libraries and frameworks that provide abstraction layers and easier ways to work with the DOM, such as jQuery, React, Vue.js, and Angular.</p>
          <p>These libraries often provide more concise and easier-to-use APIs for common DOM manipulation tasks, as well as additional features like event handling, animations, and more. However, it's still important to understand the underlying DOM concepts and how these libraries interact with the DOM under the hood.</p>
          <p>In summary, the Document Object Model (DOM) is a powerful interface that allows you to interact with and manipulate the structure and content of web pages. By understanding DOM concepts, selection methods, traversal techniques, and best practices, you can create dynamic and interactive web experiences using JavaScript.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 9 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day10" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day8" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 