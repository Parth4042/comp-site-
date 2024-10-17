import React from 'react';
import './FacultyDashboard.css'; // Add a CSS file for styling

const FacultyDashboard = () => {
  // You can dynamically fetch this data from an API or database later
  const facultyInfo = {
    name: "Dr. John Doe",
    dob: "April 12, 1980",
    degree: "PhD in Computer Science",
    specialization: "Artificial Intelligence",
    contact: "john.doe@university.edu",
    image: "/images/faculty.jpg", // Image path
  };

  return (
    <div className="dashboard-container">
      <h2>Faculty Dashboard</h2>
      
      {/* Faculty Personal Information Section */}
      <div className="faculty-info">
        <img src={facultyInfo.image} alt="Faculty" className="faculty-image" />
        <div className="faculty-details">
          <h3>{facultyInfo.name}</h3>
          <p><strong>Date of Birth:</strong> {facultyInfo.dob}</p>
          <p><strong>Degree:</strong> {facultyInfo.degree}</p>
          <p><strong>Specialization:</strong> {facultyInfo.specialization}</p>
          <p><strong>Contact:</strong> {facultyInfo.contact}</p>
        </div>
      </div>

      {/* Faculty Dashboard Actions */}
      <div className="dashboard-actions">
        <button className="action-btn">Mark Student Attendance</button>
        <button className="action-btn">Fill Student Marks</button>
      </div>
    </div>
  );
};

export default FacultyDashboard;
