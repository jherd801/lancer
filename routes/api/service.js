const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/lancerServices")
// 'lancerServices' -or- 'services'
    .get(serviceController.findAll())
    .post(serviceController.create);

// finds specific service by ID and allows for updates and deletions
router
    .route("/:id")
    .get(serviceController.findById)
    .put(serviceController.update)
    .delete(serviceController.remove);
  
  module.exports = router;