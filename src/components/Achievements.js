import React, { useEffect, useState } from 'react';
import achievementsData from '../data/achievements.json';
import { motion } from 'framer-motion';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setAchievements(achievementsData);
  }, []);

  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5em', color: '#333' }}>Achievements</h2>
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5em',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '8px',
              marginRight: '1em',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          />
          <div>
            <h3 style={{ margin: '0', color: '#333' }}>{achievement.title}</h3>
            <p style={{ color: '#666', margin: '0.5em 0', lineHeight: '1.5' }}>{achievement.details}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Achievements;
