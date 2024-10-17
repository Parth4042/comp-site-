import React, { useState, useEffect } from 'react';
import AchievementsSection from './AchievementsSection';
import UpcomingEvents from './UpcomingEvents';
import { motion } from 'framer-motion';
import './Home.css';
import eventIcon from './assets/eventIcon.svg'; // Import the SVG icon

const Home = () => {
  const [isBlurred, setIsBlurred] = useState(false); // Handles blur effect for video
  const [showTitle, setShowTitle] = useState(false); // Controls title appearance
  const [isHovered, setIsHovered] = useState(false); // Detects hover over the video
  const [scrollCount, setScrollCount] = useState(0); // Keeps track of scrolls after hover

  useEffect(() => {
    // Delay to blur the video and show the title after 6 seconds
    const timer = setTimeout(() => {
      setIsBlurred(true);
      setShowTitle(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isHovered) {
        if (scrollCount === 0) {
          // Scroll to Achievements section
          document.getElementById('achievements-section').scrollIntoView({ behavior: 'smooth' });
          setScrollCount(1); // Increment scroll count after first scroll
        } else if (scrollCount === 1) {
          // Scroll to Upcoming Events section
          document.getElementById('events-section').scrollIntoView({ behavior: 'smooth' });
          setScrollCount(2); // Increment to second scroll
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered, scrollCount]);

  return (
    <div>
      {/* Background Video Section */}
      <div
        style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}
        onMouseEnter={() => setIsHovered(true)} // Detect hover on video section
        onMouseLeave={() => setIsHovered(false)} // Reset hover state
      >
        <video
          autoPlay
          loop
          muted
          className={isBlurred ? 'blurred' : ''}
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showTitle ? 1 : 0, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            color: '#FFF8E8',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontSize: '4rem',
            textAlign: 'center',
            marginTop: '30vh',
            zIndex: 1,
          }}
        >
          Welcome to Computer Department
        </motion.h1>
      </div>

      {/* Achievements Section with ID for scrolling */}
      <div id="achievements-section">
        <AchievementsSection />
      </div>

      {/* Upcoming Events Section with ID for scrolling */}
      <div
        id="events-section"
        style={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          marginTop: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={eventIcon} alt="Upcoming Events Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ margin: 0, color: '#333', fontSize:'35x' }} // Adjusted margin for h2
          >
            Upcoming Events
          </motion.h2>
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Home;
