const express = require('express');
const {collection, addDoc, getDocs } = require('firebase/firestore');
const cors = require('cors')
const attendance=require('./route/attendance.js');
const markingAttendance=require('./route/markingAttendance.js');
const track=require('./route/tracked.js');
const db = require('./config.js')
const app = express();
const axios = require('axios');
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: [
      'http://localhost:3000', 'http://localhost:3001'
  ],
  credentials: true,
}))


app.use('/',attendance);
app.use('/track', track);
app.use('/attendance', markingAttendance);

// Start the server
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
