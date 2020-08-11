const router = require("express").Router();
const serviceRoutes = require("./service");
const userRoutes = require("./user")


// API Routes
// => /api/service
router.use("/service", serviceRoutes);
// => /api/user
router.use("/user", userRoutes);


module.exports = router;
