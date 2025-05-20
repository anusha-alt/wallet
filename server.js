const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome back, ${req.user.email}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
