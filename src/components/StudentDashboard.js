import React, { useState } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const studentInfo = {
    name: "Jane Smith",
    dob: "August 10, 2002",
    year: "Final Year",
    department: "Computer Engineering",
    contact: "jane.smith@student.edu",
    resume: "/resumes/jane_smith_resume.pdf",
  };

  const [profileImage, setProfileImage] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0); // For star rating

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const alerts = [
    "Company Drive: ABC Technologies on October 25, 2024",
    "Midterm Exams starting from November 2, 2024",
    "Coding Competition: Hackathon on November 10, 2024",
  ];

  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>

      {/* Student Personal Information */}
      <div className="student-info-container">
        {/* Profile Image Section */}
        <div className="student-image">
          <h3>Profile Picture</h3>
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-pic" />
          ) : (
            <div className="placeholder-pic">No Image</div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Student Details Section */}
        <div className="student-info">
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> {studentInfo.name}</p>
          <p><strong>Date of Birth:</strong> {studentInfo.dob}</p>
          <p><strong>Year:</strong> {studentInfo.year}</p>
          <p><strong>Department:</strong> {studentInfo.department}</p>
          <p><strong>Contact:</strong> {studentInfo.contact}</p>
          <a href={studentInfo.resume} target="_blank" rel="noopener noreferrer" className="resume-link">View Resume</a>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="alerts-section">
        <h3>Upcoming Alerts</h3>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      </div>

      {/* Professor Rating Section */}
      <div className="rating-section">
        <h3>Rate Your Professors</h3>
        <form className="rating-form">
          <label htmlFor="professor-name">Professor Name:</label>
          <input type="text" id="professor-name" required />

          <label htmlFor="rating">Rating:</label>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              const starRating = index + 1;
              return (
                <span
                  key={index}
                  className={`star ${starRating <= selectedRating ? 'filled' : ''}`}
                  onClick={() => handleStarClick(starRating)}
                >
                  &#9733;
                </span>
              );
            })}
          </div>

          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" required></textarea>

          <button type="submit" className="submit-btn">Submit Rating</button>
        </form>
      </div>
    </div>
  );
};

export default StudentDashboard;
