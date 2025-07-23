import { Link } from 'react-router-dom';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro-root">
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