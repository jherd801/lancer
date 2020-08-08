const db = require("../models");

module.exports = {
    // find all method to retrieve all services
    findAll: function(req, res) {
      db.Service
        .find(req.query)
        // sorts by date
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // method to retrieve a single servie by it's ID
    findById: function(req, res) {
      db.Service
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // method to create a new service
    create: function(req, res) {
      db.Service
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // method to update a service, locates existing service by ID
    update: function(req, res) {
      db.Service
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // method to delete existing service
    remove: function(req, res) {
      db.Service
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };