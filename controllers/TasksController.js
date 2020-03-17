const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then(id => {
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Task.find(id).then(task => res.json(task));
    } else {
      res.redirect("/");
    }
  });
};

exports.changeDone = (req, res) => {
  let id = req.body.id;
  Task.DONE(id).then(id => {
    console.log("Changed status to DONE for task with id: ", id);
    res.redirect("/");
  });
};
