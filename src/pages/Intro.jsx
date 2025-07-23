import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Intro.css';

const navLinks = [
  { to: '/day1', label: 'Day 1' },
  { to: '/day2', label: 'Day 2' },
  { to: '/day3', label: 'Day 3' },
  { to: '/day4', label: 'Day 4' },
  { to: '/day5', label: 'Day 5' },
  { to: '/day6', label: 'Day 6' },
  { to: '/day7', label: 'Day 7' },
  { to: '/day8', label: 'Day 8' },
  { to: '/day9', label: 'Day 9' },
  { to: '/day10', label: 'Day 10' },
  { to: '/day11', label: 'Day 11' },
  { to: '/promttricks', label: 'Prompt Tricks' },
  { to: '/githublearn', label: 'GitHub Learn' },
];

export default function Intro() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="intro-root">
      <nav className={`intro-vertical-nav${navOpen ? ' intro-nav-open' : ''}`}>
        <button className="intro-nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link className="intro-nav-link" to={link.to} onClick={() => setNavOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="intro-content">
        <h1 className="intro-title">CS Roadmap: Interactive Study Guide</h1>
        <p className="intro-desc">Master HTML, CSS, JavaScript, Git, and AI Prompt Engineering with this hands-on, day-by-day roadmap. Each day builds your skills with real-world code, activities, and pro tips. Ready to level up?</p>
        <Link to="/day1" className="intro-start-btn">
          <span>Start the Course</span>
          <svg className="intro-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
        </Link>
      </div>
      <div className="intro-bg-anim" />
    </div>
  );
} 