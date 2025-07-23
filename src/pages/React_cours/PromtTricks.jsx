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

export default function PromtTricks() {
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
          <h1>Engineer's Guide to Communicating with AI Agents: Crafting Effective Prompts</h1>
          <p>To maximize AI efficiency, engineers must treat prompts like <strong>API calls</strong>—specific, structured, and context-rich. Below is a technical framework:</p>
          <hr />
          <h2>1. Define the Task with Precision</h2>
          <div className="code-explanation">
            <strong>Bad:</strong>
            <pre><code>{`Help me with code.`}</code></pre>
            <strong>Good:</strong>
            <pre><code>{`Generate a Python function to calculate the Levenshtein distance between two strings. Optimize for time complexity (O(n*m)). Return the function only.`}</code></pre>
          </div>
          <ul>
            <li><strong>Inputs/Outputs:</strong> Specify data formats (e.g., JSON, list).</li>
            <li><strong>Constraints:</strong> Time/space complexity, libraries (e.g., "Use NumPy").</li>
            <li><strong>Scope:</strong> Narrow the problem (e.g., "Handle edge cases: empty strings, Unicode").</li>
          </ul>
          <hr />
          <h2>2. Provide Contextual Anchors</h2>
          <p>Embed domain knowledge to avoid ambiguity:</p>
          <pre><code>{`As a data engineer building a real-time pipeline:
- Input: Kafka stream of sensor readings (format: {timestamp: int, value: float})
- Task: Detect anomalies using a moving Z-score (window=5 mins).
- Output: JSON with {timestamp, value, anomaly_score}.`}</code></pre>
          <div className="code-explanation">
            <strong>Why it works:</strong> The AI uses keywords (<code>Kafka</code>, <code>Z-score</code>, <code>JSON</code>) to align with your domain.
          </div>
          <hr />
          <h2>3. Structure Complex Workflows</h2>
          <p>For multi-step tasks, decompose using <strong>pseudocode directives</strong>:</p>
          <pre><code>{`!step 1: Validate input schema.
!step 2: Apply Kalman filter to smooth data.
!step 3: Calculate gradient changes.
!step 4: Return {raw: array, smoothed: array, gradient: float}.`}</code></pre>
          <hr />
          <h2>4. Leverage Examples for Few-Shot Learning</h2>
          <p>Provide I/O examples to demonstrate patterns:</p>
          <pre><code>{`Example input: [{"temp": 32.4}, {"temp": 33.1}]
Example output: {"min": 32.4, "max": 32.4, "avg": 32.75}
Now process: [{"pressure": 1013}, {"pressure": 1009}]`}</code></pre>
          <hr />
          <h2>5. Specify Failure Modes</h2>
          <p>Define error-handling expectations:</p>
          <pre><code>{`If input is non-numeric:
- Return HTTP 400 with error: "Invalid datatype"
- Log error to /var/log/app_errors.log`}</code></pre>
          <hr />
          <h2>6. Control Output Format</h2>
          <p>Use schema-like directives:</p>
          <pre><code>{`Format output as YAML:
metrics:
  cpu_usage: float
  memory:
    used: int
    free: int`}</code></pre>
          <hr />
          <h2>Advanced Tactics for Engineers</h2>
          <table className="prompt-table">
            <thead>
              <tr>
                <th>Technique</th>
                <th>Example Prompt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Constraint Injection</strong></td>
                <td>Solve the knapsack problem. Use dynamic programming. Max runtime: 100ms.</td>
              </tr>
              <tr>
                <td><strong>Hypotheticals</strong></td>
                <td>As if you’re a quantum computing researcher, explain Shor’s algorithm.</td>
              </tr>
              <tr>
                <td><strong>Iterative Refinement</strong></td>
                <td>Revise previous code: Add memoization to reduce recursion overhead.</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h2>Debugging Poor Outputs</h2>
          <ol>
            <li><strong>Ambiguity Error:</strong> Add specificity.<br />
              <span style={{ color: '#b5e0ff' }}>Before:</span> Optimize this SQL query.<br />
              <span style={{ color: '#b2f7ef' }}>After:</span> Optimize this PostgreSQL query for read-heavy workloads. Indexes: user_id, created_at.
            </li>
            <li><strong>Over-Generality:</strong> Constrain scope.<br />
              <span style={{ color: '#b5e0ff' }}>Before:</span> Design a microservice.<br />
              <span style={{ color: '#b2f7ef' }}>After:</span> Design a REST microservice for user auth using JWT. Language: Go. No ORM.
            </li>
            <li><strong>Hallucinations:</strong> Anchor with facts.<br />
              Using RFC 6749 standards, explain OAuth2 flows. Cite sections from the RFC.
            </li>
          </ol>
          <hr />
          <div className="pro-tip">
            <h2>Pro Tip: Prompt Chaining</h2>
            <p>Break problems into atomic prompts:</p>
            <pre><code>{`Prompt 1: Generate Terraform module for AWS VPC with public/private subnets.
Prompt 2: Extend module to add NAT gateway using outputs from Prompt 1.`}</code></pre>
            <p>Engineers who treat AI as a <strong>deterministic state machine</strong> (clear inputs → precise outputs) achieve 90%+ accuracy. Test, iterate, and version-control your prompts like code.</p>
          </div>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Prompt Engineering Guide &mdash; Pro Edition</p>
        </footer>
      </div>

    </>
  );
} 