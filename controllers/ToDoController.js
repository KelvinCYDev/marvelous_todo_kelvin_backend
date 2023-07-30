const ToDoModel = require("../models/ToDoModel");

const sortAlphabetically = (array) => {
  return array.sort((a, b) => {
    const textA = a.text.toUpperCase();
    const textB = b.text.toUpperCase();
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    return 0;
  });
};

module.exports.getToDo = async (req, res) => {
  const todoAll = await ToDoModel.find();
  let todo = sortAlphabetically(
    todoAll.filter((task) => {
      return task.done == false;
    })
  );
  let todoDone = todoAll.filter((task) => {
    return task.done == true;
  });
  if (todoDone.length > 10) {
    todoDone = todoDone
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 10);
  }
  res.send({ todo, todoDone: sortAlphabetically(todoDone) });
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
