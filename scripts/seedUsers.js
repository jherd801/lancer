const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/lancerDB"
);

const usersSeed = [
    {
        firstName: "Michael",
        lastName: "Scott",
        email: "michael@email.com",
        password: "password",
        zipcode: "18503"
    },
    {
        firstName: "John",
        lastName: "Smith",
        email: "Johnsmith@hotmail.com",
        password: "joeshmoe",
        zipcode: "84128"
    },
    {
        firstName: "Mary",
        lastName: "Jones",
        email: "Sunshine1421@gmail.com",
        password: "Flowers",
        zipcode: "78653"
    },
    {
        firstName: "Derek",
        lastName: "Crockett",
        email: "Furryhat33@hotmail.com",
        password: "Bears1433",
        zipcode: "30309"
    },
    {
        firstName: "Breanna",
        lastName: "smitchell",
        email: "Brismitch@hotmail.com",
        password: "!momaBear33",
        zipcode: "94105"
    },
    {
        firstName: "Kerry",
        lastName: "Hindell",
        email: "HindySmiles14@gmail.com",
        password: "14@putts",
        zipcode: "80123"
    },
    {
        firstName: "Biggie",
        lastName: "Smalls",
        email: "Notorious33@gmail.com",
        password: "MakinMoney14",
        zipcode: "10467"
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });