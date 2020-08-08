const router = require("express").Router();
const { Service } = require("../../controllers");

// => /api/service/lancerServices
router.route("/lancerServices")
// 'lancerServices' -or- 'services'
    .get(Service.findAll)
    .post(Service.create);

// finds specific service by ID and allows for updates and deletions
// => /api/service/:id
router
    .route("/:id")
    .get(Service.findById)
    .put(Service.update)
    .delete(Service.remove);
  
module.exports = router;