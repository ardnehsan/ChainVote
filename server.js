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

const PORT = process.env.PORT || 5000;

// Add routes, both API and view
app.use(routes);
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

<<<<<<< HEAD

=======
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9

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
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Mongo DB connection error"));


app.use(cookieParser());
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
  proxy: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}))

//Start persisent session for user
app.use(function(req, res, next) {
  req.session.firstName;
  req.session.save();
});

//persisent login
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
  if (req.session.firstName == undefined) {
    console.log("User not in session yet");
  } else {
    console.log("Name from session: " + req.session.firstName);
  }
});

//save user
app.post('/firstName', function(req, res){
  console.log("First name set to" + req.body.firstName);
  req.session.firstName = req.body.firstName;
  req.session.save();
  console.log("Session value" + req.session.firstName);
  res.end();
});
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
