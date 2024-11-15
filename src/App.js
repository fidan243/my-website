import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <AboutMe />
        <Experience />
      </motion.div>
    </div>
  );
}

export default App;
