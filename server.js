// // "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",




// const express = require("express");

// const routes = require("./routes");
// const path = require("path")

// const mongoose = require("mongoose");
// // routes => react
// const app = express();
// const PORT = process.env.PORT || 8000;
// require("dotenv").config()
// // middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//     console.log("asdf")
//     // serves up static assests on heroku 
//     app.use(express.static("client/build"));
// }
// app.use(require("morgan")("dev"))
// // use routes (API may still need. Not sure on react.) => heroku
// // app.get("*", (req,res) =>{
// //     res.sendFile(path.join(__dirname, "client","build"))
// // })
// app.use(routes);
// // connnects to mongo databse
//     // may need to change route based on front end
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lancerDB");

// // API server starts listening
// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });


//==========================================================

  
const express = require("express");
const routes = require("./routes");

const mongoose = require("mongoose");
// routes => react
const app = express();
const PORT = process.env.PORT || 8000;



// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    // serves up static assests on heroku 
    app.use(express.static("build"));
}

// use routes (API may still need. Not sure on react.) => heroku

app.use(routes);

// connnects to mongo databse
    // may need to change route based on front end
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lancerDB");

// API server starts listening
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
