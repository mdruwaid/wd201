const express = require("express");
const path = require("path");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();

// Serve all static files in the folder (home.html, project.html, etc.)
app.use(express.static(path.join(__dirname)));

// Explicitly define /registration route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});