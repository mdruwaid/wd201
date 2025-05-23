const express = require("express");
const path = require("path");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const app = express();

// Serve static files like home.html, project.html, etc.
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "project.html"));
});

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});