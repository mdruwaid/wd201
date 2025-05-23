const express = require("express");
const path = require("path");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const port = args._[0] || 5000; // Use positional arg, not --port

const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Route for project page
app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "project.html"));
});

// Route for registration page
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registration.html")); // Corrected spelling
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});