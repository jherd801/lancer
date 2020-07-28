var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var User = sequelize.define("user", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    created: Sequelize.DATE
});

var Service = sequelize.define("service", {
    title: Sequelize.STRING,
    // need to add image
    description: Sequelize.STRING,
    // seller username
    // seller location
    // average rating (service or user?)
});

User.sync();
Service.sync();

module.exports = User;
module.exports = Service;