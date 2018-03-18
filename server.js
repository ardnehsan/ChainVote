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

// const 
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/VoteChain");
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "Mongo DB connection error"));

// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true,
//   proxy: true,
//   store: new MongoStore({ mongooseConnection: db })
// }))

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
