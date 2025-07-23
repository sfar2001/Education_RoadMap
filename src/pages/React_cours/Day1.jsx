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

export default function Day1() {
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
      <div className="page-title">Day 1 - Introduction to HTML &amp; CSS</div>
      <div className="centered-main">
        <section>
          <h1>Day 1</h1>
          <h2>Introduction to HTML</h2>
          <h3>Basic Structure of HTML Documents</h3>
          <strong>Theory Explanation:</strong>
          <p>HTML (HyperText Markup Language) is the standard language for creating webpages. It uses a series of elements, or tags, to structure and present content on the web. An HTML document is essentially a text file with an <code>.html</code> extension that includes a mixture of content and HTML elements.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text on my first webpage.</p>
</body>
</html>`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code>: Declares the document type and version of HTML.</li>
              <li><code>&lt;html&gt;</code>: The root element that wraps all content on the page.</li>
              <li><code>&lt;head&gt;</code>: Contains meta-information about the document, such as its title and linked resources.</li>
              <li><code>&lt;title&gt;</code>: Sets the title of the webpage, which appears in the browser tab.</li>
              <li><code>&lt;body&gt;</code>: Contains the content of the webpage, such as text, images, and links.</li>
              <li><code>&lt;h1&gt;</code>: Represents a top-level heading.</li>
              <li><code>&lt;p&gt;</code>: Represents a paragraph of text.</li>
            </ul>
          </div>
          <h3>Tags, Attributes, and Elements</h3>
          <strong>Theory Explanation:</strong>
          <p>Tags are the building blocks of HTML and come in pairs: an opening tag and a closing tag. Elements are the complete tag structures, including the content within them. Attributes provide additional information about elements and are included within the opening tag.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<a href="https://www.example.com">Visit Example</a>`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;a&gt;</code>: The anchor tag, used to create hyperlinks.</li>
              <li><code>href</code>: An attribute of the <code>&lt;a&gt;</code> tag that specifies the URL of the linked page.</li>
              <li><strong>Visit Example</strong>: The clickable text that users see.</li>
            </ul>
          </div>
          <h3>Headings and Paragraphs</h3>
          <strong>Theory Explanation:</strong>
          <p>HTML provides six levels of headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) to organize content hierarchically. Paragraphs are defined using the <code>&lt;p&gt;</code> tag.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph under the subheading.</p>`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;h1&gt;</code>: The primary heading.</li>
              <li><code>&lt;h2&gt;</code>: A secondary heading.</li>
              <li><code>&lt;p&gt;</code>: Defines a block of text.</li>
            </ul>
          </div>
          <h3>Links and Images</h3>
          <strong>Theory Explanation:</strong>
          <p>Links (<code>&lt;a&gt;</code>) and images (<code>&lt;img&gt;</code>) are fundamental to HTML. Links navigate users to different pages, and images enhance the visual appeal.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<a href="https://www.example.com">Click here to visit Example</a>
<img src="image.jpg" alt="An example image">`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;a&gt;</code>: Anchor tag for creating a hyperlink.</li>
              <li><code>href</code>: Attribute specifying the link's destination.</li>
              <li><code>&lt;img&gt;</code>: Embeds an image.</li>
              <li><code>src</code>: Attribute specifying the path to the image file.</li>
              <li><code>alt</code>: Provides alternative text for the image.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Creating a Simple Webpage</strong>
            <ul>
              <li>Create a new HTML file named <code>index.html</code>.</li>
              <li>Add a title to the webpage.</li>
              <li>Include a heading, a paragraph, an image, and a link.</li>
            </ul>
          </div>
          <div className="solution">
            <strong>Solution:</strong>
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>My Simple Webpage</title>
</head>
<body>
    <h1>Welcome to My Simple Webpage</h1>
    <p>This is an introductory paragraph on my simple webpage.</p>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
    <p>Visit <a href="https://www.example.com">Example</a> for more information.</p>
</body>
</html>`}</code></pre>
          </div>
        </section>
        <section>
          <h2>Introduction to CSS</h2>
          <h3>Basic CSS Syntax</h3>
          <strong>Theory Explanation:</strong>
          <p>CSS (Cascading Style Sheets) is used to style and layout HTML documents. CSS rules consist of a selector and a declaration block. The selector targets HTML elements, while the declaration block contains property-value pairs that define the styles.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`body {
    background-color: lightblue;
}
h1 {
    color: navy;
    font-family: Arial, sans-serif;
}`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>body</code>: The selector targeting the <code>&lt;body&gt;</code> element.</li>
              <li><code>background-color</code>: The property defining the background color.</li>
              <li><strong>lightblue</strong>: The value assigned to the background color.</li>
              <li><code>h1</code>: The selector targeting <code>&lt;h1&gt;</code> elements.</li>
              <li><code>color</code>: The property defining the text color.</li>
              <li><strong>navy</strong>: The value assigned to the text color.</li>
              <li><code>font-family</code>: The property defining the font.</li>
            </ul>
          </div>
          <h3>Inline vs. Internal vs. External CSS</h3>
          <strong>Theory Explanation:</strong>
          <p>
            <strong>Inline CSS:</strong> Applied directly within an HTML element using the <code>style</code> attribute.<br />
            <strong>Internal CSS:</strong> Included within a <code>&lt;style&gt;</code> tag inside the <code>&lt;head&gt;</code> section of an HTML document.<br />
            <strong>External CSS:</strong> Stored in an external file linked to the HTML document.
          </p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <style>
        body { background-color: lightblue; }
        h1 { color: navy; }
    </style>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 style="font-size: 24px;">Welcome to My Styled Webpage</h1>
    <p>This paragraph is styled using external CSS.</p>
</body>
</html>`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>&lt;style&gt;</code>: Internal CSS block.</li>
              <li><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>: Link to an external CSS file.</li>
              <li><code>style="font-size: 24px;"</code>: Inline CSS applied directly to the <code>&lt;h1&gt;</code> element.</li>
            </ul>
          </div>
          <h3>Selectors, Properties, and Values</h3>
          <strong>Theory Explanation:</strong>
          <p>Selectors target HTML elements to apply styles. Properties define the style aspects (like color, font, etc.), and values specify the settings for these properties.</p>
          <strong>Real-Life Code Example:</strong>
          <pre><code>{`p {
    color: green;
    font-size: 16px;
}`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>p</code>: The selector targeting <code>&lt;p&gt;</code> elements.</li>
              <li><code>color</code>: Property setting the text color.</li>
              <li><strong>green</strong>: Value assigned to the color property.</li>
              <li><code>font-size</code>: Property setting the font size.</li>
              <li><strong>16px</strong>: Value assigned to the font-size property.</li>
            </ul>
          </div>
          <div className="task">
            <strong>Hands-on Exercise: Styling Text, Backgrounds, Borders, and Basic Layout</strong>
            <ul>
              <li>Create a CSS file named <code>styles.css</code>.</li>
              <li>Style the text, background, and borders of HTML elements.</li>
              <li>Link the CSS file to an HTML document.</li>
            </ul>
          </div>
          <div className="solution">
            <strong>Solution:</strong><br />
            <strong>styles.css:</strong>
            <pre><code>{`body {
    background-color: lightgray;
}

h1 {
    color: darkred;
    text-align: center;
}

p {
    font-family: 'Verdana', sans-serif;
    font-size: 14px;
    border: 1px solid black;
    padding: 10px;
    background-color: white;
}`}</code></pre>
            <strong>index.html:</strong>
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Styled Webpage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Styled Webpage</h1>
    <p>This is a paragraph with styled text, background, and border.</p>
</body>
</html>`}</code></pre>
          </div>
        </section>
        <section>
          <h2>Project: Building a Simple Webpage</h2>
          <strong>Project Goal:</strong>
          <p>Combine your knowledge of HTML and CSS to create a basic, visually appealing webpage.</p>
          <strong>Step-by-Step Guide:</strong>
          <ol>
            <li>Create the HTML structure.</li>
            <li>Add content: headings, paragraphs, images, and links.</li>
            <li>Create an external CSS file for styling.</li>
            <li>Link the CSS file to your HTML document.</li>
            <li>Apply styles to enhance the layout and design.</li>
          </ol>
          <strong>Final Solution:</strong><br />
          <strong>styles.css:</strong>
          <pre><code>{`body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

main {
    padding: 20px;
}

h1 {
    color: #333;
}

p {
    color: #666;
    line-height: 1.6;
}

a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 0;
}`}</code></pre>
          <strong>index.html:</strong>
          <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>My Project Webpage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My Project Webpage</h1>
    </header>
    <main>
        <h2>Introduction</h2>
        <p>Welcome to my project webpage. This site is created using HTML and CSS to demonstrate my understanding of web development basics.</p>

        <h2>About Me</h2>
        <p>I am a web development enthusiast learning the fundamentals of HTML and CSS. Below is an image that represents my passion for coding.</p>
        <img src="https://via.placeholder.com/600x400" alt="Coding Image" />
        <h2>My Favorite Links</h2>
        <p>Here are some of my favorite websites:</p>
        <ul>
          <li><a href="https://www.example.com">Example</a></li>
          <li><a href="https://www.mozilla.org/en-US/">Mozilla Developer Network</a></li>
          <li><a href="https://www.w3schools.com/">W3Schools</a></li>
        </ul>
    </main>
    <footer>
        <p>&copy; 2024 My Project Webpage</p>
    </footer>
</body>
</html>`}</code></pre>
          <div className="code-explanation">
            <strong>Code Explanation:</strong>
            <ul>
              <li><code>styles.css</code>:
                <ul>
                  <li><code>body</code>: Sets the background color, font family, and removes default margin and padding.</li>
                  <li><code>header</code>: Styles the header section with a dark background color, white text, and padding.</li>
                  <li><code>main</code>: Adds padding to the main content area.</li>
                  <li><code>h1</code>: Styles the main heading with a specific color.</li>
                  <li><code>p</code>: Sets the color and line-height for paragraphs to improve readability.</li>
                  <li><code>a</code>: Styles links with a specific color and removes underlining.</li>
                  <li><code>a:hover</code>: Adds underlining to links on hover for better user interaction.</li>
                  <li><code>img</code>: Ensures images are responsive, not exceeding the container width, and centered with a margin.</li>
                </ul>
              </li>
              <li><code>index.html</code>:
                <ul>
                  <li><code>&lt;header&gt;</code>: Contains the main heading for the webpage.</li>
                  <li><code>&lt;main&gt;</code>: The main content area with sections for an introduction, about me, and favorite links.</li>
                  <li><code>&lt;footer&gt;</code>: Contains the footer information with a copyright notice.</li>
                  <li><code>&lt;ul&gt;</code>: Unordered list for displaying links.</li>
                </ul>
              </li>
            </ul>
          </div>
          <strong>Final Project Steps:</strong>
          <ol>
            <li>Create the HTML Structure: Use semantic HTML5 elements like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> to organize the content.</li>
            <li>Add Content: Include headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>), paragraphs (<code>&lt;p&gt;</code>), an image (<code>&lt;img&gt;</code>), and links (<code>&lt;a&gt;</code>).</li>
            <li>Use an unordered list (<code>&lt;ul&gt;</code>) for links.</li>
            <li>Create and link an external CSS file for styling.</li>
            <li>Apply styles to enhance the layout and design.</li>
          </ol>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 1 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      
    </>
  );
} 