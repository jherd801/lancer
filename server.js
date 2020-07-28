var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    // not exactly sure where the "/build" comes from
    app.use(express.static("client/build"))
};

// may need to double check on pathing / file names
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT)
});