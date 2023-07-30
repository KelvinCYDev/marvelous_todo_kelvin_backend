//During the test the env variable is set to test
process.env.NODE_ENV = "test";
let ToDoModel = require("../models/ToDoModel");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

describe("ToDo", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    ToDoModel.deleteMany().then(() => done());
  });
  /*
   * Test the /GET route
   */
  describe("/GET ToDo list", () => {
    it("should return empty list of ToDo tasks", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.have.property("todo");
          res.body.todo.should.eql([]);
          res.body.should.have.property("todoDone");
          res.body.todoDone.should.eql([]);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe("/POST save", () => {
    it("it should save a To Do task", (done) => {
      chai
        .request(server)
        .post("/save")
        .send({ text: "task1" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("text");
          res.body.should.have.property("done").eql(false);
          done();
        });
    });
  });

  describe("/PUT updateToDo", () => {
    it("it should update a single To Do task text", (done) => {
      ToDoModel.create({ text: "Task 2", done: false }).then((data) => {
        chai
          .request(server)
          .put("/update")
          .send({ _id: data._id, text: "task A", done: true })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("text").eql("task A");
            res.body.should.have.property("done").eql(true);
            done();
          })
          .catch((err) => console.log(err));
      });
    });
  });

  describe("/POST deleteToDo", () => {
    it("it should delete a single To Do task", (done) => {
      ToDoModel.create({ text: "Task 3", done: false }).then((data) => {
        chai
          .request(server)
          .post("/delete")
          .send({ _id: data._id })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

  describe("/delete DeleteAll", () => {
    it("it should delete all To Do task", (done) => {
      ToDoModel.create({ text: "Task 3", done: false }).then((data) => {
        chai
          .request(server)
          .delete("/deleteAll")
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
});
