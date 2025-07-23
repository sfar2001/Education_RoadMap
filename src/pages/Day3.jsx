import { Link } from 'react-router-dom';

export default function Day3() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 3</h1>
          <h2>CSS Layout Techniques</h2>
          <h3>Flexbox</h3>
          <strong>Theory Explanation:</strong>
          <p>Flexbox is a CSS layout module that provides a flexible way to arrange elements in a container. It allows you to control the alignment, spacing, and distribution of elements within a flex container. Flexbox is designed for one-dimensional layouts, either in a row or a column, and excels at distributing space and aligning items within a container.</p>
          <strong>Container Properties:</strong>
          <ul>
            <li><code>display: flex;</code>: Defines a flex container.</li>
            <li><code>flex-direction: row | row-reverse | column | column-reverse;</code>: Specifies the direction in which the flex items are laid out.</li>
            <li><code>flex-wrap: nowrap | wrap | wrap-reverse;</code>: Controls whether the flex items should wrap or not.</li>
            <li><code>justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;</code>: Aligns the flex items along the main axis.</li>
            <li><code>align-items: stretch | flex-start | flex-end | center | baseline;</code>: Aligns the flex items along the cross axis.</li>
            <li><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch;</code>: Aligns the flex lines when there is extra space in the cross axis.</li>
          </ul>
          <strong>Item Properties:</strong>
          <ul>
            <li><code>order: &lt;integer&gt;;</code>: Specifies the order in which the flex items are laid out.</li>
            <li><code>flex-grow: &lt;number&gt;;</code>: Defines the ability for a flex item to grow if necessary.</li>
            <li><code>flex-shrink: &lt;number&gt;;</code>: Defines the ability for a flex item to shrink if necessary.</li>
            <li><code>flex-basis: &lt;length&gt; | auto;</code>: Specifies the initial size of a flex item.</li>
            <li><code>flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ];</code>: Shorthand for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.</li>
            <li><code>align-self: auto | flex-start | flex-end | center | baseline | stretch;</code>: Overrides the <code>align-items</code> value for a specific flex item.</li>
          </ul>
          <strong>Example:</strong>
          <pre><code>{`<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>`}</code></pre>
          <pre><code>{`.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1;
  padding: 10px;
  background-color: #f2f2f2;
}`}</code></pre>
          <h3>CSS Grid</h3>
          <strong>Theory Explanation:</strong>
          <p>CSS Grid is a powerful layout system that allows you to create complex, two-dimensional layouts. It provides a grid-based structure where you can define rows and columns and place elements within the grid cells. Grid is designed for two-dimensional layouts, allowing you to create complex grid structures with rows and columns and providing precise control over the placement and sizing of elements.</p>
          <strong>Container Properties:</strong>
          <ul>
            <li><code>display: grid;</code>: Defines a grid container.</li>
            <li><code>grid-template-columns: &lt;track-list&gt; | &lt;repeat()&gt;;</code>: Specifies the size and number of columns in the grid.</li>
            <li><code>grid-template-rows: &lt;track-list&gt; | &lt;repeat()&gt;;</code>: Specifies the size and number of rows in the grid.</li>
            <li><code>grid-template-areas: "&lt;grid-area-name&gt; ...";</code>: Defines a grid template by referencing the names of grid areas specified with the <code>grid-area</code> property.</li>
            <li><code>grid-gap: &lt;row-gap&gt; &lt;column-gap&gt;;</code>: Specifies the gap between grid rows and columns.</li>
            <li><code>justify-content: start | end | center | stretch | space-around | space-between | space-evenly;</code>: Aligns the grid along the row axis (horizontal).</li>
            <li><code>align-content: start | end | center | stretch | space-around | space-between | space-evenly;</code>: Aligns the grid along the column axis (vertical).</li>
          </ul>
          <strong>Item Properties:</strong>
          <ul>
            <li><code>grid-column: &lt;start-line&gt; / &lt;end-line&gt; | &lt;start-line&gt; / span &lt;value&gt;;</code>: Specifies the start and end lines for an item in the grid column.</li>
            <li><code>grid-row: &lt;start-line&gt; / &lt;end-line&gt; | &lt;start-line&gt; / span &lt;value&gt;;</code>: Specifies the start and end lines for an item in the grid row.</li>
            <li><code>grid-area: &lt;name&gt; | &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;;</code>: Assigns a name to an item or specifies its grid area.</li>
            <li><code>justify-self: start | end | center | stretch;</code>: Aligns the item inside its grid area along the row axis.</li>
            <li><code>align-self: start | end | center | stretch;</code>: Aligns the item inside its grid area along the column axis.</li>
          </ul>
          <strong>Example:</strong>
          <pre><code>{`<div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
</div>`}</code></pre>
          <pre><code>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.grid-item {
  padding: 10px;
  background-color: #f2f2f2;
}`}</code></pre>
          <h3>Flexbox Example</h3>
          <strong>Use Case:</strong> Creating a navigation menu with evenly spaced items that align vertically in the center.
          <pre><code>{`<nav>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}</code></pre>
          <pre><code>{`.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 10px;
}`}</code></pre>
          <div className="code-explanation">
            <strong>Advantages of Flexbox:</strong>
            <ul>
              <li>Excellent for one-dimensional layouts (rows or columns).</li>
              <li>Easy to control spacing and alignment of items within a container.</li>
              <li>Responsive and flexible to different screen sizes and content changes.</li>
              <li>Simplifies vertical centering and equal distribution of items.</li>
            </ul>
          </div>
          <h3>Grid Example</h3>
          <strong>Use Case:</strong> Creating a responsive gallery layout with varying image sizes.
          <pre><code>{`<div class="gallery">
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
  <img src="image4.jpg" alt="Image 4" />
  <img src="image5.jpg" alt="Image 5" />
  <img src="image6.jpg" alt="Image 6" />
</div>`}</code></pre>
          <pre><code>{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}

.gallery img {
  width: 100%;
  height: auto;
}`}</code></pre>
          <div className="code-explanation">
            <strong>Advantages of Grid:</strong>
            <ul>
              <li>Excellent for two-dimensional layouts (rows and columns).</li>
              <li>Precise control over the placement and sizing of elements.</li>
              <li>Responsive and flexible to different screen sizes and content changes.</li>
              <li>Ability to create complex grid-based layouts with explicit grid lines.</li>
              <li>Overlap and layer elements using <code>z-index</code> and grid lines.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Flexbox vs Grid</strong>
            <ul>
              <li>Try creating a layout using both Flexbox and Grid. Observe how each technique handles alignment, spacing, and responsiveness.</li>
            </ul>
          </div>
          <h2>Document Object Model (DOM)</h2>
          <h3>Introduction to DOM</h3>
          <p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a webpage as a tree-like structure, allowing programming languages like JavaScript to access and manipulate the elements and their properties.</p>
          <h3>Accessing and Manipulating HTML Elements</h3>
          <strong>Accessing Elements:</strong>
          <ul>
            <li><code>document.getElementById(id)</code>: Retrieves an element by its <code>id</code> attribute.</li>
            <li><code>document.getElementsByClassName(className)</code>: Retrieves a collection of elements by their <code>class</code> attribute.</li>
            <li><code>document.getElementsByTagName(tagName)</code>: Retrieves a collection of elements by their tag name.</li>
            <li><code>document.querySelector(selector)</code>: Retrieves the first element that matches the specified CSS selector.</li>
            <li><code>document.querySelectorAll(selector)</code>: Retrieves a collection of elements that match the specified CSS selector.</li>
          </ul>
          <strong>Manipulating Elements:</strong>
          <ul>
            <li><code>element.innerHTML</code>: Gets or sets the HTML content inside an element.</li>
            <li><code>element.textContent</code>: Gets or sets the text content of an element.</li>
            <li><code>element.style</code>: Allows you to access and modify the inline styles of an element.</li>
            <li><code>element.classList</code>: Provides methods to add, remove, or toggle CSS classes on an element.</li>
            <li><code>element.setAttribute(name, value)</code>: Sets the value of an attribute for an element.</li>
            <li><code>element.getAttribute(name)</code>: Retrieves the value of an attribute for an element.</li>
            <li><code>element.removeAttribute(name)</code>: Removes an attribute from an element.</li>
          </ul>
          <strong>Creating and Modifying Elements:</strong>
          <ul>
            <li><code>document.createElement(tagName)</code>: Creates a new HTML element with the specified tag name.</li>
            <li><code>parentElement.appendChild(newElement)</code>: Adds a new child element to the end of the parent element.</li>
            <li><code>parentElement.insertBefore(newElement, referenceElement)</code>: Inserts a new child element before the specified reference element.</li>
            <li><code>parentElement.removeChild(childElement)</code>: Removes a child element from the parent element.</li>
            <li><code>element.replaceChild(newElement, oldElement)</code>: Replaces an existing child element with a new one.</li>
          </ul>
          <strong>Example:</strong>
          <pre><code>{`<div id="container">
    <p class="text">Hello, World!</p>
    <button onclick="changeColor()">Change Color</button>
</div>`}</code></pre>
          <pre><code>{`// Accessing Elements
let container = document.getElementById("container");
let textElements = document.getElementsByClassName("text");

// Manipulating Elements
function changeColor() {
    let firstTextElement = textElements[0];
    firstTextElement.style.color = "red";
}`}</code></pre>
          <strong>DOM Manipulation Examples:</strong>
          <pre><code>{`// Change text content
let messageElement = document.getElementById("message");
messageElement.textContent = "Welcome to JavaScript!";

// Toggle element visibility
function toggleVisibility() {
    let box = document.getElementById("toggle-box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

// Add and remove elements
function addItem() {
    let itemList = document.getElementById("item-list");
    let itemInput = document.getElementById("item-input");
    let newItem = document.createElement("li");
    newItem.textContent = itemInput.value;
    itemList.appendChild(newItem);
    itemInput.value = "";
}

// Modify element attributes
function changeImage() {
    let image = document.getElementById("my-image");
    if (image.src.endsWith("image1.jpg")) {
        image.src = "image2.jpg";
        image.alt = "Image 2";
    } else {
        image.src = "image1.jpg";
        image.alt = "Image 1";
    }
}`}</code></pre>
          <div className="task">
            <strong>Hands-on Exercise: DOM Manipulation</strong>
            <ul>
              <li>Practice accessing, modifying, and creating elements in the DOM using JavaScript.</li>
            </ul>
          </div>
          <h2>JavaScript Basics</h2>
          <h3>Variables and Data Types</h3>
          <ul>
            <li><code>let</code> and <code>const</code> are used to declare variables in modern JavaScript.</li>
            <li>JavaScript has several data types, including:
              <ul>
                <li><code>string</code>: Represents text data.</li>
                <li><code>number</code>: Represents numeric data.</li>
                <li><code>boolean</code>: Represents a logical value (true or false).</li>
                <li><code>undefined</code>: Represents a variable that has been declared but not initialized.</li>
                <li><code>null</code>: Represents a non-existent or invalid value.</li>
                <li><code>object</code>: Represents a collection of key-value pairs.</li>
              </ul>
            </li>
          </ul>
          <h3>Operators</h3>
          <p>JavaScript supports various operators for performing operations on values. Here are some common operators:</p>
          <ul>
            <li>Arithmetic Operators: <code>+</code> (addition), <code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> (division), <code>%</code> (modulus)</li>
            <li>Assignment Operators: <code>=</code> (assignment), <code>+=</code> (addition assignment), <code>-=</code> (subtraction assignment), <code>*=</code> (multiplication assignment), <code>/=</code> (division assignment)</li>
            <li>Comparison Operators: <code>==</code> (equal to), <code>===</code> (strict equal to), <code>!=</code> (not equal), <code>!=</code> (strict not equal), <code>&gt;</code> (greater than), <code>&lt;</code> (less than), <code>&gt;=</code> (greater than or equal to), <code>&lt;=</code> (less than or equal to)</li>
            <li>Logical Operators: <code>&&</code> (logical AND), <code>||</code> (logical OR), <code>!</code> (logical NOT)</li>
          </ul>
          <h3>Control Structures</h3>
          <p>Control structures are used to control the flow of execution in a program.</p>
          <ul>
            <li>Conditional Statements:
              <ul>
                <li><code>if...else</code> statement: Executes a block of code if a specific condition is true or false.</li>
                <li><code>switch</code> statement: Evaluates an expression and executes the associated code block based on the matching case.</li>
                <li>Ternary Operator: A shorthand way to write an <code>if...else</code> statement (<code>condition ? valueIfTrue : valueIfFalse</code>).</li>
              </ul>
            </li>
            <li>Loops:
              <ul>
                <li><code>for</code> loop: Repeats a block of code a specific number of times.</li>
                <li><code>while</code> loop: Repeats a block of code as long as a specific condition is true.</li>
                <li><code>do...while</code> loop: Executes a block of code at least once, and then repeats it as long as a specific condition is true.</li>
                <li><code>for...in</code> loop: Iterates over the properties of an object.</li>
                <li><code>for...of</code> loop: Iterates over the values of an iterable object (e.g., arrays, strings).</li>
              </ul>
            </li>
          </ul>
          <h3>Functions</h3>
          <p>Functions are reusable blocks of code that can be called with specific input values (arguments) and can optionally return a value.</p>
          <ul>
            <li>Function Declaration: <code>function functionName(param1, param2) {'{'} /* function body */ {'}'}</code></li>
            <li>Function Expression: <code>const functionName = function(param1, param2) {'{'} /* function body */ {'}'}</code></li>
            <li>Arrow Functions: <code>const functionName = (param1, param2) =&gt; {'{'} /* function body */ {'}'}</code></li>
          </ul>
          <h3>Arrays</h3>
          <p>Arrays are used to store ordered collections of values. They can hold multiple values of different data types.</p>
          <ul>
            <li>Creating an Array: <code>const arrayName = [value1, value2, value3];</code></li>
            <li>Accessing Array Elements: <code>arrayName[index]</code></li>
            <li>Array Methods: <code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>, <code>concat()</code>, <code>slice()</code>, <code>splice()</code>, <code>indexOf()</code>, <code>forEach()</code>, <code>map()</code>, <code>filter()</code>, <code>reduce()</code>, etc.</li>
          </ul>
          <h3>Objects</h3>
          <p>Objects are used to store collections of key-value pairs. They are useful for representing complex data structures.</p>
          <ul>
            <li>Creating an Object: <code>const objectName = {'{'} key1: value1, key2: value2 {'}'}</code></li>
            <li>Accessing Object Properties: <code>objectName.key1</code> or <code>objectName["key1"]</code></li>
            <li>Adding or Modifying Properties: <code>objectName.newKey = value;</code></li>
            <li>Object Methods: <code>objectName.methodName = function() {'{'} /* method body */ {'}'}</code></li>
          </ul>
          <div className="task">
            <strong>Hands-on Exercise: JavaScript Basics</strong>
            <ul>
              <li>Practice declaring variables, using operators, writing control structures, defining functions, and working with arrays and objects in JavaScript.</li>
            </ul>
          </div>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 3 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day4" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day2" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 