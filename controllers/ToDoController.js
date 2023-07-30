const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text, done: false })
    .then((data) => {
      console.log("Added Successfully...");
      //console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text, done } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text, done }, { new: true })
    .then((data) => {
      // console.log(data);
      console.log("Updated Successfully...");
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;
  console.log("id ---> ", _id);
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteAll = (req, res) => {
  ToDoModel.deleteMany()
    .then(() => res.set(201).send("Deleted All Successfully..."))
    .catch((err) => console.log(err));
};
