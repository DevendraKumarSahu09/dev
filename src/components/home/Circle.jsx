// AnimatedCircle.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCircle = () => {
  return (
    <motion.svg width="506" height="506" viewBox="0 0 506 506" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="253"
        cy="253"
        r="150"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />
    </motion.svg>
  );
};

export default AnimatedCircle;
