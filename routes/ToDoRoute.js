const { Router } = require("express");

const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  updateDone,
  deleteAll,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/updateDone", updateDone);

router.post("/delete", deleteToDo);

router.delete("/deleteAll", deleteAll);

module.exports = router;
