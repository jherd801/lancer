const router = require("express").Router();
const userController = require("");

// routes to user page
// **** NOT SURE IF THERE SHOULD BE A USERS PAGE WITH ALL USERS ****
    // router.route("/lancerUsers")
    // // not sure if route shoudl be 'lancerUsers' or 'users'
    //     .get(userController.findAll)
    //     .post(userController.create);



// routes 
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;