const express = require("express");
const app = express();
const path = require("path");

// View engine setup (EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const messageRoutes = require("./routes/indexRoute");
app.use("/", messageRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
