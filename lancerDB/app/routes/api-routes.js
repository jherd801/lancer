var User = require("../models/lancer");
var Service = require("../models/lancer");

module.exports = function(app) {
    // function to search for specific service
    app.get("/api/:services?", function(req, res) {
        if (req.params.services) {
            Service.findOne({
                where: {
                    routeName = req.params.services
                }
            }).then(function(result) {
                console.log(result);
            });
        } else {
            // display service not found
            console.log("No such service found")
        }
    });

    





}