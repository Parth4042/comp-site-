// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// Endpoint to add attendance
app.post('/add-attendance', (req, res) => {
  const { username, date, status } = req.body;

  const attendanceEntry = `${username},${date},${status}\n`; // Format: username,date,status

  fs.appendFile(path.join(__dirname, 'attendance.csv'), attendanceEntry, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error writing to CSV' });
    }
    res.status(200).json({ message: 'Attendance added successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
