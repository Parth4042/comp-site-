import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import Achievements from './components/Achievements';
import UpcomingEvents from './components/UpcomingEvents';
import LearningCenter from './components/LearningCenter';

const App = () => {
  return (
    <Router>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: 'calc(100vh - 100px)' }} // Ensure the content takes full height excluding footer
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/learning-center" element={<LearningCenter />} />
        </Routes>
      </motion.div>
      <Footer />
    </Router>
  );
};

export default App;
