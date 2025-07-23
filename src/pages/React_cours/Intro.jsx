import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Intro.css';
import LetterGlitch from './LetterGlitch';
import GradientText from './GradientText';

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

export default function Intro() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        className="particles-container"
      />
      <div >
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
        <main className="intro-content" tabIndex={-1} aria-label="Main content">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="intro-title"
          >
            CS Roadmap Interactive Study Guide
          </GradientText>
          <div className="intro-desc">
            Master HTML, CSS, JavaScript, Git, and AI Prompt Engineering with this hands-on, day-by-day roadmap. Each day builds your skills with theory, real-world code, and practical projects. Use the navigation to jump to any topic or start from Day 1!
          </div>
          <Link to="/day1" className="intro-start-btn">
            Start the Course
            <svg className="intro-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.293 15.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" fill="currentColor" />
            </svg>
          </Link>
        </main>
      </div>
    </>
  );
}
