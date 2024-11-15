import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <motion.section
      className="about-me"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>I'm currently studying Cognitive Science with a focus on Design and Interaction at UC San Diego (UCSD).</p>
      <p>I'm passionate about human-computer interaction, user-centered design, and how cognitive science informs the way we design digital experiences.</p>
      <button>Contact Me</button>
    </motion.section>
  );
}

export default AboutMe;
