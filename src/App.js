import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Work from './components/Work';  // New Work Page
import Resume from './components/Resume';  // New Resume Page

function App() {
  return (
    <Router>
      <div className="App">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Header />
          <Routes>
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Experience />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;