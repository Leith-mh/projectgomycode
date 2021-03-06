const express = require("express");
const router = express.Router();

// import controller
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const {
  read,
  update,
  addCourse,
  getAllUsers,
  deleteUsers,
} = require("../controllers/user");

router.get("/user/:id", requireSignin, read);
router.put("/user/update", requireSignin, update);
router.put("/admin/update", requireSignin, update);
router.get("/admin/users", requireSignin, getAllUsers);
router.delete("/admin/user/:id", requireSignin, deleteUsers);
module.exports = router;
