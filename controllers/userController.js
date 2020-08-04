const db = require("../models/user");

module.exports = {
    // create funciton for creating new user
    create: function(req, res) {
        db.User
            .create(req.body)
            // .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // function to find a specific user by their ID
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    // update function for changing user
    update: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // delete function for deleting a user
    remove: function(req, res) {
        db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}