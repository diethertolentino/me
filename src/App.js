import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
