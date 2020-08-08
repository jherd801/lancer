const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lancerDB"
);

const postsSeed = [
    {
        title: "Carpet Installer",
        description: "Laying carpet",
        price: "$15.00 per square ft",
    },
    {
        title: "Hardwood Installer",
        description: "Professional hardwood installation",
        price: "Price varies per job",
    },
    {
        title: "Plumber",
        description: "Plumbing installation",
        price: "Price varries per job",
    },
    {
        title: "Guitar Lessons",
        description: "Learn electric and accoustic guitar",
        price: "$50.00 per hour",
    },
    {
        title: "Pool cleaning",
        description: "professionally clean your pool",
        price: "$100.00 per cleaning",
    },
    {
        title: "Professional CPA",
        description: "Help filing your taxes",
        price: "$200.00 to file your taxes",
    }
];

db.Service
  .remove({})
  .then(() => db.Service.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });