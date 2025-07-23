import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Intro from './pages/React_cours/Intro';
import Day1 from './pages/React_cours/Day1';
import Day2 from './pages/React_cours/Day2';
import Day3 from './pages/React_cours/Day3';
import Day4 from './pages/React_cours/Day4';
import Day5 from './pages/React_cours/Day5';
import Day6 from './pages/React_cours/Day6';
import Day7 from './pages/React_cours/Day7';
import Day8 from './pages/React_cours/Day8';
import Day9 from './pages/React_cours/Day9';
import Day10 from './pages/React_cours/Day10';
import Day11 from './pages/React_cours/Day11';
import PromtTricks from './pages/React_cours/PromtTricks';
import GithubLearn from './pages/React_cours/GithubLearn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7" element={<Day7 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="/day10" element={<Day10 />} />
        <Route path="/day11" element={<Day11 />} />
        <Route path="/promttricks" element={<PromtTricks />} />
        <Route path="/github-learn" element={<GithubLearn />} />
        <Route path="/githublearn" element={<GithubLearn />} />
      </Routes>
    </Router>
  );
}

export default App;
