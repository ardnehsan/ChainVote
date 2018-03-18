const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
=======

>>>>>>> 18fd7314d0a93d38a01e5b0cbd822f1e31c42401
// Serve up static assets
app.use(express.static(path.join(__dirname, 'client/build/')));

// Add routes, both API and view
app.use(routes);

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'client/build', 'index.html');
  res.sendFile(index);
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/VoteChain");

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
