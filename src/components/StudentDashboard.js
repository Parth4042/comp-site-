import React, { useState } from 'react';
import './StudentDashboard.css';
import Papa from 'papaparse'; // CSV parsing library
import resumeFile from '../components/dummyResume.pdf'; // Update the path as necessary
import attendanceCSV from '../data/student_attendance.csv'; // Import the attendance CSV file
import marksCSV from '../data/student_marks.csv'; // Import the marks CSV file
import upcomingAlerts from '../data/upcomingAlerts.json'; // Import the alerts data

const StudentDashboard = () => {
  const studentInfo = {
    name: "Jane Smith",
    dob: "August 10, 2002",
    year: "Final Year",
    department: "Computer Engineering",
    contact: "jane.smith@student.edu",
    resume: resumeFile, // Use the imported file here
  };

  const [attendanceData, setAttendanceData] = useState([]); // To store attendance data
  const [marksData, setMarksData] = useState([]); // To store marks data
  const [showAttendance, setShowAttendance] = useState(false); // Control attendance table visibility
  const [showMarks, setShowMarks] = useState(false); // Control marks table visibility
  const [selectedAlert, setSelectedAlert] = useState(null); // State for selected alert details
  const [selectedRating, setSelectedRating] = useState(0); // For star rating

  // Function to handle the "View Attendance" button click
  const handleViewAttendance = () => {
    // Parse the attendance CSV file
    Papa.parse(attendanceCSV, {
      download: true,
      header: true,
      complete: (result) => {
        setAttendanceData(result.data); // Set parsed data
        setShowAttendance(true); // Show attendance table
      },
      error: (err) => {
        console.error("Error reading CSV file", err);
      }
    });
  };

  // Function to handle the "View Marks" button click
  const handleViewMarks = () => {
    // Parse the marks CSV file
    Papa.parse(marksCSV, {
      download: true,
      header: true,
      complete: (result) => {
        setMarksData(result.data); // Set parsed data
        setShowMarks(true); // Show marks table
      },
      error: (err) => {
        console.error("Error reading CSV file", err);
      }
    });
  };

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>

      {/* Student Personal Information */}
      <div className="student-info-container">
        {/* Profile Image Section */}
        <div className="student-image">
          <h3>Profile Picture</h3>
          <img 
            src="https://via.placeholder.com/150" // Demo image URL
            alt="Profile" 
            className="profile-pic" 
          />
        </div>

        {/* Student Details Section */}
        <div className="student-info">
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> {studentInfo.name}</p>
          <p><strong>Date of Birth:</strong> {studentInfo.dob}</p>
          <p><strong>Year:</strong> {studentInfo.year}</p>
          <p><strong>Department:</strong> {studentInfo.department}</p>
          <p><strong>Contact:</strong> {studentInfo.contact}</p>
          <a href={studentInfo.resume} target="_blank" rel="noopener noreferrer" className="resume-link">
            <button className="view-resume-btn">View Resume</button>
          </a>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="alerts-section">
        <h3>Upcoming Alerts</h3>
        <ul>
          {upcomingAlerts.map((alert, index) => (
            <li key={index} onClick={() => handleAlertClick(alert)} className="alert-item">
              {alert.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Alert Details Section */}
      {selectedAlert && (
        <div className="alert-details">
          <h3>{selectedAlert.title}</h3>
          <img src={selectedAlert.image} alt={selectedAlert.title} className="alert-image" />
          <p><strong>Date:</strong> {selectedAlert.date}</p>
          {selectedAlert.package && <p><strong>Package:</strong> {selectedAlert.package}</p>}
          <p>{selectedAlert.description}</p>
          {selectedAlert.link && (
            <a href={selectedAlert.link} target="_blank" rel="noopener noreferrer" className="event-link">
              Click here for more details
            </a>
          )}
        </div>
      )}

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
                  onClick={() => setSelectedRating(starRating)}
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

      {/* Attendance Section */}
      <div className="attendance-section">
        <h3>Attendance</h3>
        <button onClick={handleViewAttendance} className="view-attendance-btn">View Attendance</button>

        {showAttendance && (
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Lecture Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={index}>
                  <td>{row.Date}</td>
                  <td>{row.Subject}</td>
                  <td>{row.Lecture}</td>
                  <td>{row.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Marks Section */}
      <div className="marks-section">
        <h3>Marks</h3>
        <button onClick={handleViewMarks} className="view-marks-btn">View Marks</button>

        {showMarks && (
          <table className="marks-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((row, index) => (
                <tr key={index}>
                  <td>{row.Subject}</td>
                  <td>{row.Marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
