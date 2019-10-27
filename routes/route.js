const router = require("express").Router();
const postController = require("../controllers/posts.controller");
const loginController = require("../controllers/loginController");
const passwordController = require("../controllers/password.controller");
const registerController = require("../controllers/register.controller");

//getall posts from mongodb
router.get("/", postController.getallposts);
router.post("/save", postController.save);

// Saving Login Information
router.post("/getLoginInfo", loginController.authenticate);

//Update password
router.post("/getUserInfo", passwordController.getUserDetails);
router.put("/updatePassword", passwordController.resetPassword);

//register
router.post("/register", registerController.save);

module.exports = router;
