// var express = require("express");
// var PORT = process.env.PORT || 8000;
// var app = express();

// // app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     // not exactly sure where the "/build" comes from
//     app.use(express.static("client/build"))
// };

// // may need to double check on pathing / file names
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//     console.log("Listening on Port: " + PORT)
// });



const express = require("express");

const mongoose = require("mongoose");
// routes => react
const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    // serves up static assests on heroku 
    app.use(express.static("client/build"));
}

// use routes (API may still need. Not sure on react.) => heroku

// connnects to mongo databse
    // may need to change route based on front end
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lancerServices");

// API server starts listening
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });