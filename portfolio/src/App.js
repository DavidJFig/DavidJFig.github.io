import './App.css';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Hidden from './Components/Hidden';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-container">      
        <Routes>
          <Route path="/" element={<><Header /><AboutMe /></>} />
          <Route path="/hidden" element={<Hidden />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
