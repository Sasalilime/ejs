const router = require('express').Router();
const userController = require("../controllers/user.controller");


router.get("/", userController.getAllUsers);
// router.get("/:id", userController.userInfo);
// router.delete("/:id", userController.deleteUser);




module.exports = router;
