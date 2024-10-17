import React, { useState } from 'react';
import credentialsData from '../data/credentials.json';
import { motion } from 'framer-motion';
import './Login.css'; // Updated CSS for styling

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
    <div className="login-page">
      <div className="login-container">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="login-form"
        >
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Log in to continue</p>
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
         
          <button type="submit" className="form-button primary-button">Log in</button>
          
        </motion.form>
       
      </div>
    </div>
  );
};

export default Login;
