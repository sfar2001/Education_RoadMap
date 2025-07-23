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

export default function GithubLearn() {
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
          <h1>Git &amp; GitHub for Engineers: Pro Guide</h1>
          <p>Master version control and collaboration with this concise, engineer-focused guide to Git and GitHub. Learn the essential commands, workflows, and best practices for professional software development.</p>
          <hr />
          <h2>1. Git Basics: Local Version Control</h2>
          <ul>
            <li><strong>Initialize a repo:</strong> <code>git init</code></li>
            <li><strong>Check status:</strong> <code>git status</code></li>
            <li><strong>Add files:</strong> <code>git add &lt;file&gt;</code> or <code>git add .</code></li>
            <li><strong>Commit:</strong> <code>git commit -m "Your message"</code></li>
            <li><strong>View log:</strong> <code>git log --oneline</code></li>
          </ul>
          <hr />
          <h2>2. Branching &amp; Merging</h2>
          <ul>
            <li><strong>Create branch:</strong> <code>git branch feature-x</code></li>
            <li><strong>Switch branch:</strong> <code>git checkout feature-x</code> or <code>git switch feature-x</code></li>
            <li><strong>Merge branch:</strong> <code>git checkout main</code> + <code>git merge feature-x</code></li>
            <li><strong>Delete branch:</strong> <code>git branch -d feature-x</code></li>
          </ul>
          <hr />
          <h2>3. Remote Repositories (GitHub)</h2>
          <ul>
            <li><strong>Add remote:</strong> <code>git remote add origin https://github.com/user/repo.git</code></li>
            <li><strong>Push:</strong> <code>git push -u origin main</code></li>
            <li><strong>Pull:</strong> <code>git pull origin main</code></li>
            <li><strong>Clone:</strong> <code>git clone https://github.com/user/repo.git</code></li>
          </ul>
          <hr />
          <h2>4. Collaboration &amp; Pull Requests</h2>
          <ol>
            <li>Fork the repository on GitHub.</li>
            <li>Clone your fork: <code>git clone ...</code></li>
            <li>Create a feature branch: <code>git checkout -b feature-x</code></li>
            <li>Commit and push your changes.</li>
            <li>Open a Pull Request (PR) on GitHub.</li>
            <li>Discuss, review, and merge PRs.</li>
          </ol>
          <hr />
          <h2>5. Essential GitHub Features</h2>
          <table className="github-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Issues</strong></td>
                <td>Track bugs, feature requests, and tasks.</td>
              </tr>
              <tr>
                <td><strong>Actions</strong></td>
                <td>Automate workflows (CI/CD, testing, deployments).</td>
              </tr>
              <tr>
                <td><strong>Projects</strong></td>
                <td>Kanban-style boards for project management.</td>
              </tr>
              <tr>
                <td><strong>Wiki</strong></td>
                <td>Collaborative documentation for your repo.</td>
              </tr>
              <tr>
                <td><strong>Releases</strong></td>
                <td>Package and version your software for distribution.</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h2>6. Pro Tips &amp; Best Practices</h2>
          <ul>
            <li>Write clear, descriptive commit messages.</li>
            <li>Use <code>.gitignore</code> to exclude files/folders from version control.</li>
            <li>Pull before you push to avoid conflicts.</li>
            <li>Review code in PRs before merging.</li>
            <li>Protect your <code>main</code> branch with branch protection rules.</li>
            <li>Use <code>git stash</code> to save work-in-progress changes.</li>
          </ul>
          <div className="pro-tip">
            <h2>Pro Tip: Interactive Rebase</h2>
            <p>Use <code>git rebase -i HEAD~n</code> to clean up your commit history before merging. Squash, edit, or reorder commits for a professional, readable log.</p>
          </div>
        </section>
        <footer>
          <div className="signature">By Adam Sfar</div>
          <p>Git &amp; GitHub Pro Guide</p>
        </footer>
      </div>
    
    </>
  );
} 