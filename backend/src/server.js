// src/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../config/db");
const corsOptions = require("../config/corsOptions");

const bookmarkRoutes = require("../routes/bookmarks");
const tagRoutes = require("../routes/tags");
const userRoutes = require("../routes/users");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to DB
connectDB();

// API Routes
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Bookmark app backend is running ✅");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
