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
  Task.DONE(id).then(_ => {
    Task.find(req.body.id).then(task => res.json(task));
  });
};

exports.delete = (req, res) => {
  let id = req.body.id;
  Task.delete(id).then(task => res.json(task));
};
