import { Link } from 'react-router-dom';

export default function Day2() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 2</h1>
          <h2>Intermediate HTML &amp; CSS</h2>
          {/* Forms */}
          <h3>Forms</h3>
          <strong>Theory Explanation:</strong>
          <p>HTML forms are used to collect user input. They can contain various types of input elements such as text fields, checkboxes, radio buttons, and dropdown menus.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<form action="/submit-form" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <input type="submit" value="Submit">
</form>`}</code></pre>
          <form action="/submit-form" method="post" aria-label="Example form">
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required aria-required="true" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required aria-required="true" />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;form&gt;</code>: Defines a form to collect user input.</li>
              <li><code>action</code>: Specifies the URL where the form data should be sent.</li>
              <li><code>method</code>: Specifies the HTTP method (e.g., GET or POST) for sending form data.</li>
              <li><code>&lt;label&gt;</code>: Defines a label for an input element, improving accessibility.</li>
              <li><code>for</code>: Associates the label with the input element using its <code>id</code> attribute.</li>
              <li><code>&lt;input&gt;</code>: Defines an input control with various types (text, password, submit).</li>
              <li><code>required</code>: Specifies that the field must be filled out before submitting the form.</li>
            </ul>
          </div>
          {/* Tables */}
          <h3>Tables</h3>
          <strong>Theory Explanation:</strong>
          <p>HTML tables are used to display data in rows and columns. They consist of one or more <code>&lt;tr&gt;</code> (table row) elements, each containing one or more <code>&lt;td&gt;</code> (table data/cell) elements.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<table class="styled-table">
    <caption>User Information</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>25</td>
        </tr>
    </tbody>
</table>`}</code></pre>
          <table className="styled-table" aria-label="Example user data table">
            <caption>User Information</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;table&gt;</code>: Defines a table with structured data.</li>
              <li><code>&lt;caption&gt;</code>: Provides a title or description for the table.</li>
              <li><code>&lt;thead&gt;</code>: Groups header content in a table.</li>
              <li><code>&lt;tbody&gt;</code>: Groups the body content in a table.</li>
              <li><code>&lt;tr&gt;</code>: Defines a table row.</li>
              <li><code>&lt;th&gt;</code>: Defines a table header cell (with <code>scope</code> attribute for accessibility).</li>
              <li><code>&lt;td&gt;</code>: Defines a table data cell.</li>
            </ul>
          </div>
          {/* Semantic HTML */}
          <h3>Semantic HTML</h3>
          <strong>Theory Explanation:</strong>
          <p>Semantic HTML elements provide meaning to the content they wrap, making it more accessible and understandable for both humans and machines. They improve SEO and accessibility.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<header>
    <h1>Website Title</h1>
    <nav aria-label="Main navigation">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
</main>

<footer>
    <p>Copyright &copy; 2023</p>
</footer>`}</code></pre>
          <div className="semantic-example">
            <header>
              <h1>Website Title</h1>
              <nav aria-label="Example navigation">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </header>
            <main>
              <article>
                <h2>Article Title</h2>
                <p>This is an example of semantic HTML structure demonstrating proper document outline and accessibility.</p>
              </article>
            </main>
            <footer>
              <p>Copyright &copy; 2023</p>
            </footer>
          </div>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;header&gt;</code>: Represents introductory content at the beginning of a page or section.</li>
              <li><code>&lt;nav&gt;</code>: Defines a section of navigation links with <code>aria-label</code> for screen readers.</li>
              <li><code>&lt;main&gt;</code>: Contains the main content of the document (should be unique per page).</li>
              <li><code>&lt;article&gt;</code>: Represents a self-contained composition in a document.</li>
              <li><code>&lt;footer&gt;</code>: Represents a footer for its nearest sectioning content.</li>
              <li><code>aria-label</code>: Provides an accessible name for elements.</li>
            </ul>
          </div>
          {/* CSS Positioning */}
          <h3>CSS Positioning</h3>
          <strong>Theory Explanation:</strong>
          <p>CSS positioning allows you to precisely control the placement of elements on a webpage. There are several positioning methods, including relative, absolute, and fixed.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

.absolute {
    position: absolute;
    top: 50px;
    left: 50px;
}

.fixed {
    position: fixed;
    top: 0;
    right: 0;
}`}</code></pre>
          <div className="positioning-container">
            <div className="relative">Relative Positioning (moved from normal position)</div>
            <div className="absolute">Absolute Positioning (relative to container)</div>
          </div>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>position: relative;</code>: Positions the element relative to its normal position in the document flow.</li>
              <li><code>position: absolute;</code>: Positions the element relative to its nearest positioned ancestor (or the initial containing block if none).</li>
              <li><code>position: fixed;</code>: Positions the element relative to the viewport, so it remains fixed even when the page is scrolled.</li>
              <li><code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code>: Specify the offset from the respective edges.</li>
            </ul>
          </div>
          {/* Responsive Design */}
          <h3>Responsive Design Principles</h3>
          <strong>Theory Explanation:</strong>
          <p>Responsive web design aims to create webpages that adapt to various screen sizes and devices. This ensures an optimal viewing experience for users across desktops, laptops, tablets, and smartphones.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`@media only screen and (max-width: 600px) {
    body {
        font-size: 14px;
    }
    .container {
        padding: 10px;
    }
}

@media only screen and (max-width: 768px) {
    .container {
        width: 90%;
    }
}

@media only screen and (max-width: 480px) {
    .container {
        width: 100%;
    }
}`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>@media</code>: Defines a media query to apply styles based on device characteristics.</li>
              <li><code>only screen</code>: Specifies that the styles apply to the screen only (not print, etc.).</li>
              <li><code>max-width</code>: Condition for when the screen width is at most the specified value.</li>
              <li>Inside each media query, CSS rules are applied only when the condition is met.</li>
            </ul>
          </div>
          {/* Hands-on Exercises */}
          <div className="task">
            <strong>Hands-on Exercise: Creating a Registration Form</strong>
            <ul>
              <li>Create a registration form with fields for name, email, and password. Make sure all fields are required.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Styling a Product Table</strong>
            <ul>
              <li>Create and style a table showing a product catalog with columns for product name, price, and availability.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Positioning Elements</strong>
            <ul>
              <li>Create a layout with relatively and absolutely positioned elements within a container.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Making the Webpage Responsive</strong>
            <ul>
              <li>Implement media queries to adjust the layout for different screen sizes.</li>
            </ul>
          </div>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 2 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/day3" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day1" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 