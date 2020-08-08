const router = require("express").Router();
const { User } = require("../../controllers");

// routes to user page
// **** NOT SURE IF THERE SHOULD BE A USERS PAGE WITH ALL USERS ****
    // router.route("/lancerUsers")
    // // not sure if route shoudl be 'lancerUsers' or 'users'
    //     .get(userController.findAll)
    //     .post(userController.create);



// routes
// => /api/user/:id
router
    .route("/:id")
    .get(User.findById)
    .put(User.update)
    .delete(User.remove)

module.exports = router;