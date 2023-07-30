const { Router } = require("express");

const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  deleteAll,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.put("/update", updateToDo);

router.post("/delete", deleteToDo);

router.delete("/deleteAll", deleteAll);

module.exports = router;
