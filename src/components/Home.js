import React, { useState } from 'react';
import Achievements from './Achievements';
import UpcomingEvents from './UpcomingEvents';
import { motion } from 'framer-motion';
import './Home.css'; // Import the CSS file for additional styles

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {/* Background Video Section */}
      <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          className={isHovered ? 'blurred' : ''}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isHovered ? 1 : 0.8, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontSize: '3rem',
            textAlign: 'center',
            marginTop: '20vh',
            zIndex: 1,
          }}
        >
          Welcome to Computer Department
        </motion.h1>
      </div>

      {/* Achievements Section */}
      <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '40px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '15px' }}
        >
          Achievements
        </motion.h2>
        <Achievements />
      </div>

      {/* Upcoming Events Section */}
      <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '15px' }}
        >
          Upcoming Events
        </motion.h2>
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Home;
