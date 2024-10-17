import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* Department Logo */}
      <Link to="/"><img
        src="/images/logo.png"  // Update this path to your logo's location
        alt="Department Logo"
        style={{ width: '50px', height: '50px', marginRight: '10px' }}  // Adjust the size as per your needs
      /></Link>
      <div class="titel">Department of computer engineering</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/learning-center">Learning Center</Link>
      </div>
    </nav>
  );
};

export default Navbar;
