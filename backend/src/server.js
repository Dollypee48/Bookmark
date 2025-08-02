const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookmarkRoutes = require('./routes/bookmarks');
const tagRoutes = require('./routes/tags');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));