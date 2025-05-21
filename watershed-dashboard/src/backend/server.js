import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*******',
  database: 'water_quality_tracker',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Endpoint to Fetch Data
app.get('/api/water-quality', (req, res) => {
  const { year } = req.query;
  let query = 'SELECT * FROM water_quality_tracker.water_quality_record';

  if (year && year !== 'all') {
    query += ` WHERE YEAR(EventDate) = ${db.escape(year)}`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
