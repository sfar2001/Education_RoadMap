import { Link } from 'react-router-dom';

export default function Day10() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 10</h1>
          <h2>Events in JavaScript</h2>
          <h3>Introduction to Events</h3>
          <p>Events are actions or occurrences that happen in the web browser, such as user interactions (clicking a button, submitting a form), browser actions (loading a page, resizing a window), or system notifications (online/offline status change). JavaScript allows you to listen for and respond to these events, enabling dynamic and interactive web applications.</p>
          <h3>Event Handlers</h3>
          <p>Event handlers are functions that get called when a specific event occurs. You can attach event handlers to elements in your HTML document using various methods:</p>
          <h4>HTML Event Handlers</h4>
          <p>You can add event handlers directly in your HTML code using event attributes like <code>onclick</code>, <code>onsubmit</code>, etc. However, this approach is not recommended as it mixes JavaScript with HTML, making it harder to maintain.</p>
          <pre><code>{`<button onclick="handleClick()">Click Me</button>`}</code></pre>
          <h4>DOM Level 0 Event Handlers</h4>
          <p>This is an older method where you assign event handler functions directly to the element's property corresponding to the event type.</p>
          <pre><code>{`const button = document.querySelector('button');
button.onclick = handleClick;`}</code></pre>
          <h4>addEventListener()</h4>
          <p>This is the recommended method for attaching event handlers in modern JavaScript. It allows you to add multiple event handlers for the same event type on an element.</p>
          <pre><code>{`const button = document.querySelector('button');
button.addEventListener('click', handleClick);`}</code></pre>
          <h3>Event Types</h3>
          <p>JavaScript supports a wide range of event types, covering various user interactions and browser events. Here are some common event types:</p>
          <ul>
            <li><strong>Mouse Events</strong>: <code>click</code>, <code>dblclick</code>, <code>mousedown</code>, <code>mouseup</code>, <code>mousemove</code>, <code>mouseover</code>, <code>mouseout</code></li>
            <li><strong>Keyboard Events</strong>: <code>keydown</code>, <code>keyup</code>, <code>keypress</code></li>
            <li><strong>Form Events</strong>: <code>submit</code>, <code>change</code>, <code>input</code>, <code>invalid</code></li>
            <li><strong>Window Events</strong>: <code>load</code>, <code>unload</code>, <code>resize</code>, <code>scroll</code>, <code>online</code>, <code>offline</code></li>
          </ul>
          <h3>Event Propagation</h3>
          <p>When an event occurs, it is first fired on the target element, and then it propagates through the DOM tree, triggering event handlers attached to parent elements. This process is known as <strong>event propagation</strong>, and it happens in two phases:</p>
          <ol>
            <li><strong>Capturing Phase</strong>: The event propagates from the window object down to the target element.</li>
            <li><strong>Bubbling Phase</strong>: The event propagates from the target element up to the window object.</li>
          </ol>
          <p>By default, event handlers are triggered during the bubbling phase. However, you can specify the propagation phase when attaching an event handler using the <code>addEventListener()</code> method's third parameter:</p>
          <pre><code>{`element.addEventListener('click', handleClick, true); // Capture phase
element.addEventListener('click', handleClick, false); // Bubble phase (default)`}</code></pre>
          <h3>Preventing Default Actions</h3>
          <p>Some events have default actions associated with them, such as navigating to a new page when clicking a link or submitting a form. You can prevent these default actions using the <code>preventDefault()</code> method on the event object:</p>
          <pre><code>{`const link = document.querySelector('a');
link.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent navigating to the link's href
  // Additional custom logic...
});`}</code></pre>
          <h3>Event Delegation</h3>
          <p>Event delegation is a technique that involves attaching event handlers to a parent element instead of individual child elements. This approach is efficient and helps manage dynamic content because you don't need to attach and remove event handlers for each element.</p>
          <pre><code>{`<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</code></pre>
          <pre><code>{`const list = document.getElementById('list');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    // Handle click on list item
    console.log('Clicked ' + event.target.textContent);
  }
});`}</code></pre>
          <h3>Real-Life Example: Form Validation and Interactive Elements</h3>
          <p>Let's implement a simple form with validation and interactive elements using event handling.</p>
          <strong>HTML:</strong>
          <pre><code>{`<form id="myForm">
  <label>
    Name:
    <input type="text" id="nameInput" required />
  </label>
  <br />
  <label>
    Email:
    <input type="email" id="emailInput" required />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>

<div id="characterCount"></div>`}</code></pre>
          <strong>JavaScript:</strong>
          <pre><code>{`// Form Validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');

form.addEventListener('submit', function(event) {
  if (!nameInput.validity.valid || !emailInput.validity.valid) {
    event.preventDefault(); // Prevent form submission
    alert('Please fill in all required fields correctly.');
  }
});

// Character Count
const characterCount = document.getElementById('characterCount');

nameInput.addEventListener('input', function() {
  const count = nameInput.value.length;
  characterCount.textContent = 'Character count: ' + count;
});`}</code></pre>
          <div className="code-explanation">
            <ol>
              <li><strong>Form Validation</strong>: We attach an event listener to the <code>submit</code> event of the form. Inside the event handler, we check the validity of the <code>nameInput</code> and <code>emailInput</code> fields using the built-in <code>validity</code> property. If either field is invalid, we call <code>event.preventDefault()</code> to prevent the form from being submitted, and display an alert to the user.</li>
              <li><strong>Character Count</strong>: We attach an event listener to the <code>input</code> event of the <code>nameInput</code> field. Inside the event handler, we get the current value length of the input field and update the <code>textContent</code> of the <code>characterCount</code> element with the character count.</li>
            </ol>
          </div>
          <h3>Advanced Examples</h3>
          <h4>Keyboard Events</h4>
          <p>Keyboard events are useful for creating keyboard shortcuts, handling user input, and building interactive applications. Here's an example of how to handle keyboard events:</p>
          <strong>HTML:</strong>
          <pre><code>{`<input type="text" id="textInput" />
<div id="outputDiv"></div>`}</code></pre>
          <strong>JavaScript:</strong>
          <pre><code>{`const textInput = document.getElementById('textInput');
const outputDiv = document.getElementById('outputDiv');

textInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const inputValue = textInput.value.trim();
    if (inputValue) {
      outputDiv.textContent += inputValue + '\n';
      textInput.value = '';
    }
  }
});`}</code></pre>
          <h4>Drag and Drop</h4>
          <p>The Drag and Drop API in JavaScript allows you to create interactive interfaces where users can drag and drop elements. Here's an example of implementing a simple drag and drop feature:</p>
          <strong>HTML:</strong>
          <pre><code>{`<div id="source" draggable="true">
  <p>Drag me!</p>
</div>
<div id="target"></div>`}</code></pre>
          <strong>CSS:</strong>
          <pre><code>{`#source {
  background-color: #f0f0f0;
  padding: 20px;
  cursor: move;
}

#target {
  height: 200px;
  border: 2px dashed #ccc;
}`}</code></pre>
          <strong>JavaScript:</strong>
          <pre><code>{`const source = document.getElementById('source');
const target = document.getElementById('target');

source.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
});

target.addEventListener('dragover', function(event) {
  event.preventDefault();
});

target.addEventListener('drop', function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(data);
  event.target.appendChild(element);
});`}</code></pre>
          <p>In this example, we have a draggable <code>div</code> with the ID <code>source</code> and a target <code>div</code> with the ID <code>target</code>. We attach event listeners to handle the drag and drop functionality.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 10 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day11" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day9" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 