const express = require("express");
const path = require("path");
const minimist = require("minimist");

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

// Serve static files (e.g., project.html)
app.use(express.static(path.join(__dirname)));

// Route to serve registration.html
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});