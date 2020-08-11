const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    // "lancer" (seller) -> pull from user db?
    date: { 
        type: Date, 
        default: Date.now 
    },
    description: { 
        type: String, 
        required: true
     },
    price: { 
        type: String, 
        required: false
    },
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

const Service = mongoose.model("service", servicesSchema);

module.exports = Service;