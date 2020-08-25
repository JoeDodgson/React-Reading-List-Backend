// Require in npm modules
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

// Set up express server
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  // Set static build folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Add API routes and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server listening on PORT ${PORT}!`);
});
