import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';  // Ensure this file contains your styles for animations

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="intro">
        <h2 className="subtitle">UX Designer</h2>
        <h1 className="name">Fidan Jabrayilova</h1>
      </div>
      <div className="bubble-animation"></div>
    </motion.header>
  );
}

export default Header;
