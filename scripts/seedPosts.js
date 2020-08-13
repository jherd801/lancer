const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lancerDB"
);

const postsSeed = [
    {
        title: "Piano Lessons",
        name: "Bill Ivory",
        description: "Ever tried the piano? It's hard as can be. Let me help you get started with some introductory lessons.",
        price: "$15 / square ft",
        image: "https://images.unsplash.com/photo-1583356766567-edb20320d8a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Hardwood Installer",
        name: "Charles Floorsby",
        description: "Professional hardwood installation",
        price: "$25 / square foot",
        image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Tile Installation",
        name: "Sandra Mosaic",
        description: "Whether you need a backsplash, shower surround, kitchen floor, or any other tile project, I've got you covered",
        price: "$80 / hour",
        image: "https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Guitar Lessons",
        name: "Wendy Strings",
        description: "Learn electric and accoustic guitar",
        price: "$50 / hour",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Professional CPA",
        name: "Martin Abacus",
        description: "Get more back on your taxes this year, hire me!",
        price: "$200 federal and state",
        image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Front End Web Development",
        name: "Charles Sharp",
        description: "I can help you build some cool, functional web tools that your customers will love",
        price: "$90 / hour",
        image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Chemical Process Engineering",
        name: "Margaret Metallurgy",
        description: "Looking for ways to improve your process? I can engineer the solution for you!",
        price: "$200 federal and state",
        image: "https://images.unsplash.com/photo-1574689049868-e94ed5301745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Business Consultant",
        name: "Dilbert Dilbert",
        description: "Let's move your business to the next level with meaningful KPI's and other metrics",
        price: "$180 / hour",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Graphic Designer",
        name: "Artie Markson",
        description: "Let's get you the logo that gets you more business!",
        price: "$60 / hour",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
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