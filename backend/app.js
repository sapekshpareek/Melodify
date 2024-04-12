const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PASS +
      "@cluster0.30aowyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(8080, () => {
  console.log("Server in running on http://localhost:8080/");
});
