import React, { useState } from 'react';
import './FacultyDashboard.css'; // Ensure to add your CSS here

const FacultyDashboard = () => {
  const [studentId, setStudentId] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('Present');
  const [attendanceData, setAttendanceData] = useState([]);
  const [marks, setMarks] = useState('');
  const [marksData, setMarksData] = useState([]);

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    const newEntry = { studentId, attendanceStatus };
    setAttendanceData([...attendanceData, newEntry]);
    // Reset form
    setStudentId('');
    setAttendanceStatus('Present');
  };

  const handleMarksSubmit = (e) => {
    e.preventDefault();
    const newMarksEntry = { studentId, marks };
    setMarksData([...marksData, newMarksEntry]);
    // Reset form
    setStudentId('');
    setMarks('');
  };

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

      {/* Attendance Marking Section */}
      <div className="attendance-section">
        <h3>Mark Student Attendance</h3>
        <form className="attendance-form" onSubmit={handleAttendanceSubmit}>
          <label htmlFor="student-id">Student ID:</label>
          <input
            type="text"
            id="student-id"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />

          <label htmlFor="attendance-status">Attendance Status:</label>
          <select
            id="attendance-status"
            value={attendanceStatus}
            onChange={(e) => setAttendanceStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
          </select>

          <button type="submit" className="submit-btn action-btn">Submit Attendance</button>
        </form>

        {/* Attendance Data Table */}
        {attendanceData.length > 0 && (
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.studentId}</td>
                  <td>{entry.attendanceStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Marks Filling Section */}
      <div className="marks-section">
        <h3>Fill Student Marks</h3>
        <form className="marks-form" onSubmit={handleMarksSubmit}>
          <label htmlFor="marks-student-id">Student ID:</label>
          <input
            type="text"
            id="marks-student-id"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />

          <label htmlFor="marks">Marks:</label>
          <input
            type="number"
            id="marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            min="0"
            max="100"
          />

          <button type="submit" className="submit-btn action-btn">Submit Marks</button>
        </form>

        {/* Marks Data Table */}
        {marksData.length > 0 && (
          <table className="marks-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.studentId}</td>
                  <td>{entry.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FacultyDashboard;
