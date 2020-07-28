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

    app.post("api/new/user", function(req, res) {
        var user = req.body;

        var routeName = user.name.replace(/\s+/g, "").toLowerCase();

        User.create({
            routeName: routeName,
            name: user.name,
            email: user.email,
            password: user.password
        });

        res.status(204).end();
    })

    app.post("api/new/service", function(req, res) {
        var service = req.body;

        var routeName = service.title.replace(/\s+/g, "").toLowerCase();

        Service.create({
            title: service.title,
            // need to add image
            description: service.description
            // get username
            // get user location
            // average rating (service or user?)
        })
    })
    res.status(204).end();
};