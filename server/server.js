const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const genreRoutes = require("./routes/genre.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors()
);
app.use(
  session({
    secret: "your_secret_key",
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    resave: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/genres", genreRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️ Server running on port: ${port} 🚀`);
    });
  })
  .catch((err) => console.log("❌ DB connection error:", err));
