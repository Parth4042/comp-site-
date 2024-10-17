import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useGoogleFont from './useGoogleFont'; // Import the custom hook

const Navbar = () => {
  useGoogleFont('Vollkorn+SC:wght@400;600;700;900'); // Use the hook to add the font link

  return (
    <nav>
      {/* Department Logo */}
      <Link to="/">
        <img
          src="/images/logo.png" // Update this path to your logo's location
          alt="Department Logo"
          style={{ width: '50px', height: '50px', marginRight: '10px' }} // Adjust the size as per your needs
        />
      </Link>
      <div className="titel vollkorn-sc-semibold">Department of Computer Engineering</div>
      <div className="nav-links">
        <Link to="/" className="vollkorn-sc-regular">
          {/* Home SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '20px', marginRight: '10px', fill: 'white' , marginTop: '5px'}}>
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          Home
        </Link>
        <Link to="/login" className="vollkorn-sc-regular">
          {/* Login SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="nav-icon" style={{ width: '20px', marginRight: '10px', fill: 'white', marginTop: '5px' }}>
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
          </svg>
          Login
        </Link>
        <Link to="/learning-center" className="vollkorn-sc-regular">
          {/* Learning Center SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ width: '20px', marginRight: '10px', fill: 'white', marginTop: '9px' }}>
            <path d="M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" />
          </svg>
          Learning Center
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
