import { Link } from 'react-router-dom';

export default function Day11() {
  return (
    <>
      <div className="centered-main">
        <section>
          <h1>Day 11</h1>
          <h2>Asynchronous JavaScript</h2>
          <h3>What is Asynchronous JavaScript?</h3>
          <p>Asynchronous JavaScript refers to techniques that allow a program to start potentially time-consuming tasks (like fetching data from a server or reading files) and then move on to other tasks without waiting for those operations to complete. This helps in improving the performance and responsiveness of web applications.</p>
          <p>JavaScript is inherently single-threaded, meaning it can only do one thing at a time. However, asynchronous operations let JavaScript handle multiple tasks concurrently without blocking the main execution thread.</p>
          <h3>Why Use Asynchronous JavaScript?</h3>
          <ul>
            <li><strong>Improved Performance:</strong> It prevents the browser from freezing while waiting for long-running tasks to complete.</li>
            <li><strong>Better User Experience:</strong> Users can continue interacting with the web page while background tasks are being processed.</li>
            <li><strong>Efficient Resource Utilization:</strong> Resources can be managed more efficiently by not waiting for tasks that can be handled later.</li>
          </ul>
          <h3>Common Asynchronous Operations</h3>
          <ul>
            <li><strong>Network Requests:</strong> Fetching data from a server using APIs.</li>
            <li><strong>Timers:</strong> Delaying execution using <code>setTimeout</code> or <code>setInterval</code>.</li>
            <li><strong>File Reading/Writing:</strong> Reading or writing files in Node.js.</li>
          </ul>
          <h3>Key Concepts in Asynchronous JavaScript</h3>
          <ol>
            <li><strong>Callbacks:</strong> Functions passed as arguments to be executed once an asynchronous operation is complete.</li>
            <li><strong>Promises:</strong> Objects representing the eventual completion (or failure) of an asynchronous operation, providing a cleaner way to handle asynchronous results.</li>
            <li><strong>Async/Await:</strong> Syntactic sugar built on top of promises that makes asynchronous code look and behave more like synchronous code.</li>
          </ol>
          <h3>Example Use Case: Fetching Data</h3>
          <h4>Using Callbacks</h4>
          <pre><code>{`function fetchData(callback) {
    setTimeout(function() {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log('Name: ' + data.name + ', Age: ' + data.age);
}

fetchData(displayData);`}</code></pre>
          <h4>Using Promises</h4>
          <pre><code>{`const fetchData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
};

fetchData()
    .then(function(data) {
        console.log('Name: ' + data.name + ', Age: ' + data.age);
    })
    .catch(function(error) {
        console.error(error);
    });`}</code></pre>
          <h4>Using Async/Await</h4>
          <pre><code>{`const fetchData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
};

const displayData = async function() {
    try {
        const data = await fetchData();
        console.log('Name: ' + data.name + ', Age: ' + data.age);
    } catch (error) {
        console.error(error);
    }
};

displayData();`}</code></pre>
          <h3>Conclusion</h3>
          <p>Asynchronous JavaScript is a powerful concept that enables the efficient handling of tasks that would otherwise block the execution of a program. By leveraging callbacks, promises, and async/await, developers can write more efficient and responsive applications.</p>
          <h2>1. Callbacks: Understanding Callbacks and Their Use Cases</h2>
          <h3>What are Callbacks?</h3>
          <p>A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a way to ensure that certain code doesn’t execute until another code has finished.</p>
          <h3>Use Cases of Callbacks</h3>
          <ul>
            <li><strong>Handling Asynchronous Operations:</strong> Callbacks are commonly used in asynchronous operations such as reading files, making network requests, or processing user inputs.</li>
            <li><strong>Event Handling:</strong> Callbacks are used to handle events like clicks, key presses, and other user interactions.</li>
          </ul>
          <h3>Example: Callback Function</h3>
          <pre><code>{`function fetchData(callback) {
    setTimeout(function() {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log('Name: ' + data.name + ', Age: ' + data.age);
}

fetchData(displayData);`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>fetchData(callback)</code>: This function simulates an asynchronous operation (e.g., fetching data from a server) using <code>setTimeout</code>.</li>
              <li><code>displayData(data)</code>: This function will be called once the data is "fetched".</li>
              <li><code>fetchData(displayData)</code>: The <code>displayData</code> function is passed as a callback to <code>fetchData</code>.</li>
            </ul>
          </div>
          <h2>2. Promises: Introduction to Promises, Promise Chaining</h2>
          <h3>Introduction to Promises</h3>
          <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner, more flexible way to handle asynchronous operations compared to callbacks.</p>
          <h3>States of a Promise</h3>
          <ul>
            <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected.</li>
            <li><strong>Fulfilled:</strong> The operation completed successfully.</li>
            <li><strong>Rejected:</strong> The operation failed.</li>
          </ul>
          <h3>Creating and Using Promises</h3>
          <pre><code>{`const fetchData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
};

fetchData()
    .then(function(data) {
        console.log('Name: ' + data.name + ', Age: ' + data.age);
    })
    .catch(function(error) {
        console.error(error);
    });`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>new Promise(function(resolve, reject) {'{'}...{'}'}</code>: Creates a new promise that will resolve with <code>data</code> after 2 seconds.</li>
              <li><code>fetchData().then(...).catch(...)</code>: Handles the resolved value with <code>then</code> and any errors with <code>catch</code>.</li>
            </ul>
          </div>
          <h3>Promise Chaining</h3>
          <p>Promise chaining allows you to chain multiple asynchronous operations in a sequence.</p>
          <h3>Example: Promise Chaining</h3>
          <pre><code>{`const fetchData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
};

fetchData()
    .then(function(data) {
        console.log('Name: ' + data.name);
        return data.age;
    })
    .then(function(age) {
        console.log('Age: ' + age);
    })
    .catch(function(error) {
        console.error(error);
    });`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li>First <code>then</code>: Processes the resolved data and returns the age.</li>
              <li>Second <code>then</code>: Receives the age and logs it.</li>
            </ul>
          </div>
          <h2>3. Async/Await: Simplifying Asynchronous Code with Async/Await</h2>
          <h3>Introduction to Async/Await</h3>
          <p><code>async</code> and <code>await</code> are syntactic sugar built on top of promises. They make asynchronous code look and behave more like synchronous code, making it easier to read and write.</p>
          <h3>Using Async/Await</h3>
          <pre><code>{`const fetchData = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
};

const displayData = async function() {
    try {
        const data = await fetchData();
        console.log('Name: ' + data.name + ', Age: ' + data.age);
    } catch (error) {
        console.error(error);
    }
};

displayData();`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>async</code> keyword: Defines an asynchronous function.</li>
              <li><code>await</code> keyword: Pauses the function execution until the promise resolves and returns the resolved value.</li>
            </ul>
          </div>
          <h2>4. Fetch API: Making HTTP Requests</h2>
          <h3>Introduction to Fetch API</h3>
          <p>The Fetch API provides a modern, promise-based way to make HTTP requests in the browser.</p>
          <h3>Making a GET Request</h3>
          <pre><code>{`fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) { return response.json(); })
    .then(function(data) { console.log(data); })
    .catch(function(error) { console.error('Error:', error); });`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>fetch(url)</code>: Initiates a network request to the given URL.</li>
              <li><code>response.json()</code>: Parses the JSON response.</li>
              <li><code>then(function(data) {'{'}...{'}'})</code>: Processes the parsed data.</li>
            </ul>
          </div>
          <h3>Making a POST Request</h3>
          <pre><code>{`fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
    .then(function(response) { return response.json(); })
    .then(function(data) { console.log(data); })
    .catch(function(error) { console.error('Error:', error); });`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>method: 'POST'</code>: Specifies the request method.</li>
              <li><code>headers</code>: Sets the request headers.</li>
              <li><code>body</code>: Contains the JSON stringified data to be sent.</li>
            </ul>
          </div>
          <h2>5. Activity: Fetch Data from a Public API and Display It Dynamically on the Web Page</h2>
          <h3>Example: Fetch and Display Data</h3>
          <strong>HTML</strong>
          <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API Example</title>
</head>
<body>
    <h1>Users List</h1>
    <ul id="userList"></ul>
    <script src="script.js"></script>
</body>
</html>`}</code></pre>
          <strong>JavaScript (script.js)</strong>
          <pre><code>{`const userList = document.getElementById('userList');

const fetchUsers = async function() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        users.forEach(function(user) {
            const li = document.createElement('li');
            li.textContent = user.name + ' (' + user.email + ')';
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchUsers();`}</code></pre>
          <div className="code-explanation">
            <ul>
              <li><code>fetchUsers</code> function: An async function that fetches user data from the API.</li>
              <li><code>await fetch(url)</code>: Makes an HTTP GET request to the given URL and waits for the response.</li>
              <li><code>await response.json()</code>: Parses the JSON response.</li>
              <li><code>users.forEach(...)</code>: Iterates over the users and creates an <code>li</code> element for each user, appending it to the <code>ul</code> element in the DOM.</li>
            </ul>
          </div>
          <p>This guide provides a comprehensive look into asynchronous JavaScript, covering callbacks, promises, async/await, and the Fetch API, culminating in a practical activity that demonstrates these concepts in action.</p>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Day 11 &mdash; HTML &amp; CSS Roadmap Study Guide</p>
        </footer>
      </div>
      <Link to="/promttricks" className="next-day-btn" aria-label="Go to next day">
        Next Day
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
      </Link>
      <Link to="/day10" className="prev-day-btn" aria-label="Go to previous day">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous Day
      </Link>
    </>
  );
} 