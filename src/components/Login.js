import React, { useState } from 'react';
import credentialsData from '../data/credentials.json';
import { motion } from 'framer-motion';
import './Login.css'; // Create a separate CSS file for better styling control

const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = credentialsData.find(cred => cred.username === username && cred.password === password && cred.role === role);
    if (user) {
      // Redirect based on role
      if (user.role === 'student') {
        window.location.href = '/student-dashboard';
      } else if (user.role === 'faculty') {
        window.location.href = '/faculty-dashboard';
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <motion.form
      onSubmit={handleLogin}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="login-form" // Applying the styles via a CSS class
    >
      <h2 className="form-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="form-input"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        className="form-input"
      >
        <option value="" disabled>Select Role</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-input"
      />
      <button type="submit" className="form-button">Login</button>
    </motion.form>
  );
};

export default Login;
