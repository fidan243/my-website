import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Fidan Jabrayilova</h1>
      <p>Welcome to my personal website. I'm a Cognitive Science major with a focus on Design and Interaction at UC San Diego (UCSD).</p>
    </motion.header>
  );
}

export default Header;
