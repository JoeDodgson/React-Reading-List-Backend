// Require in npm modules
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Set up express server
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add API routes and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server listening on PORT ${PORT}!`);
});
