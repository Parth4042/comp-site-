import React from 'react';
import { motion } from 'framer-motion';
import Achievements from './Achievements';
import achievementIcon from './assets/achievementIcon.svg'; // Update the path to your SVG file

const AchievementsSection = () => {
  return (
    <motion.div
      className="cards1"
      style={{
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
      }}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      transition={{ duration: 0.3 }} // Duration for the scaling transition
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <img
          src={achievementIcon}
          alt="Achievements Icon"
          style={{
            width: '40px', // Set a width for the icon
            height: '40px', // Set a height for the icon
            marginRight: '10px',marginTop: '20px' // Space between the icon and title
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ margin: 0, fontSize: '35px',marginTop: '20px' }} // Remove default margin
        >
          Achievements
        </motion.h2>
      </div>
      <Achievements />
    </motion.div>
  );
};

export default AchievementsSection;
