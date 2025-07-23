import { Link } from 'react-router-dom';

export default function GithubLearn() {
  return (
    <>
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
      <Link to="/promttricks" className="prev-day-btn" aria-label="Go to previous page">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ verticalAlign: 'middle' }}><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" /></svg>
        Previous
      </Link>
    </>
  );
} 