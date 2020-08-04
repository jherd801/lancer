const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/lancerUsers"
);

const usersSeed = [
    {
        firstName: "Michael",
        lastName: "Scott",
        email: "michael@email.com",
        password: "password",
        city: "Scranton",
        state: "Pennsylvania",
        zipcode: "18503"
    },
    {
        firstName: "John",
        lastName: "Smith",
        email: "Johnsmith@hotmail.com",
        password: "joeshmoe",
        city: "magna",
        state: "Utah",
        zipcode: "84128"
    },
    {
        firstName: "Mary",
        lastName: "Jones",
        email: "Sunshine1421@gmail.com",
        password: "Flowers",
        city: "Austin",
        state: "Texas",
        zipcode: "78653"
    },
    {
        firstName: "Derek",
        lastName: "Crockett",
        email: "Furryhat33@hotmail.com",
        password: "Bears1433",
        city: "Atlanta",
        state: "Georgia",
        zipcode: "30309"
    },
    {
        firstName: "Breanna",
        lastName: "smitchell",
        email: "Brismitch@hotmail.com",
        password: "!momaBear33",
        city: "San Francisco",
        state: "California",
        zipcode: "94105"
    },
    {
        firstName: "Kerry",
        lastName: "Hindell",
        email: "HindySmiles14@gmail.com",
        password: "14@putts",
        city: "Denver",
        state: "Colorado",
        zipcode: "80123"
    },
    {
        firstName: "Biggie",
        lastName: "Smalls",
        email: "Notorious33@gmail.com",
        password: "MakinMoney14",
        city: "Bronx",
        state: "New York",
        zipcode: "10467"
    }
]