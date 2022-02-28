import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/pages/HomePage/HomePage';
import PlayerProfiles from './components/pages/PlayerProfiles/PlayerProfiles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player-profiles" element={<PlayerProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;
