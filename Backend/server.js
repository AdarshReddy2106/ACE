const express = require('express');
const cors = require('cors');
const contactApi = require('./api/contact');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Contact API route
app.use('/api/contact', contactApi);

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 2050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});