const router = require("express").Router();
const homepageController = require("../controllers/HomepageController");
const tasksController = require("../controllers/TasksController");

router.get("/", homepageController.index);
router.post("/tasks", tasksController.store);
router.post("/change/done", tasksController.changeDone);
router.delete("/delete", tasksController.delete);

module.exports = router;
