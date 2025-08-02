
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../config/db");
const corsOptions = require("../config/corsOptions");
const bookmarkRoutes = require("../routes/bookmarks");
const tagRoutes = require("../routes/tags");
const userRoutes = require("../routes/users");

require("dotenv").config(); 


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bookmark app backend is running ✅");
});


app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
