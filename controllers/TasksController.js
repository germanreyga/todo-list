const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then(id => {
    console.log("Task created with id: ", id);
    res.redirect("/");
  });
};

exports.changeDone = (req, res) => {
  let id = req.body.id;
  Task.DONE(id).then(id => {
    console.log("Changed status to DONE for task with id: ", id);
    res.redirect("/");
  });
};
