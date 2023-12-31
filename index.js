require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT | (process.env.NODE_ENV == "test") ? 5001 : 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.NODE_ENV == "test"
      ? process.env.TEST_MONGODB_URL
      : process.env.DOCKER_MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Mongodb Connected Successfully"))
  .catch((err) => console.error(err));

app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));

module.exports = app; // for testing
