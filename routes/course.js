const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();

/**
 * @description :post course
 * @path : http://localhost:8000/api/course
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/course", controllers.addCourse);
router.get("/course", controllers.getCoursesByCategory);
router.get("/course/:id", controllers.getCourseById);
module.exports = router;
