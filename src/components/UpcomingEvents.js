import React, { useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5em', color: '#333' }}>Upcoming Events</h2>
      {events.map((event, index) => (
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
            src={event.image}
            alt={event.title}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '8px',
              marginRight: '1em',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0', color: '#333' }}>{event.title}</h3>
            <p style={{ color: '#666', margin: '0.5em 0', lineHeight: '1.5' }}>{event.details}</p>
            <button
              style={{
                padding: '10px 15px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onClick={() => alert(`Viewing details for: ${event.title}`)} // Replace this with actual navigation logic
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} // Darker blue on hover
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'} // Original blue
            >
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default UpcomingEvents;
