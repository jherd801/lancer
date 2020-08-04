const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lancerServices"
);

const postsSeed = [
    {
        id: "1",
        title: "Carpet Installer",
        description: "Laying carpet",
        price: "$15.00 per square ft",
        category: "Trade Skill"
    },
    {
        id: "2",
        title: "Hardwood Installer",
        description: "Professional hardwood installation",
        price: "Price varies per job",
        category: "Trade Skill"
    },
    {
        id: "3",
        title: "Plumber",
        description: "Plumbing installation",
        price: "Price varries per job",
        category: "Trade Skill"
    },
    {
        id: "4",
        title: "Guitar Lessons",
        description: "Learn electric and accoustic guitar",
        price: "$50.00 per hour",
        category: "Musical instrument"
    },
    {
        id: "5",
        title: "Pool cleaning",
        description: "professionally clean your pool",
        price: "$100.00 per cleaning",
        category: "Maintanance"
    },
    {
        id: "6",
        title: "Professional CPA",
        description: "Help filing your taxes",
        price: "$200.00 to file your taxes",
        category: "Accounting"
    }
]