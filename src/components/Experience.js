import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      className="experience"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <h3>Intern at ABC Tech Solutions</h3>
      <p>Worked on designing interactive prototypes and user interfaces to improve user experience.</p>
      
      <h3>Research Assistant</h3>
      <p>Assisted with research on cognitive processing and its implications for design and technology.</p>

      <ul>
        <li>Collaborated on creating user personas and wireframes.</li>
        <li>Conducted usability tests on product designs.</li>
        <li>Participated in team meetings to brainstorm design solutions.</li>
      </ul>
    </motion.section>
  );
}

export default Experience;
