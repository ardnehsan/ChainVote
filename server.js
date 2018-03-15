const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const app = express();
//const PeerServer = require('peer').PeerServer;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, 'client/build/')));

app.get('*', function(req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/votechain");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Mongo DB connection error"));

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  saveUnitialized: true,
  resave: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}))

//Start persisent session for user
app.use(function(req, res, next) {
  req.session.email;
  req.session.save();
});

//persisent login
app.use(session({
  secret: 'secret',
  saveUnitialized: true,
  resave: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
  if (req.session.email == undefined) {
    console.log("User not in sesison yet");
  } else {
    console.log("Email from session: " + req.session.email);
  }
});
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
