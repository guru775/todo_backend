const mongoose = require("mongoose");
const exp = require("express");
const db = require("./Database/todo");
const app = exp();
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://guruprakash:guru1999@social.zxambn1.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("database is connected")
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await db.find();
    res.json({
      status: "success",
      todos,
    });
  } catch (err) {
    res.json({
      status: "failure",
      message: err.message,
    });
  }
});

app.post("/newTodo", async (req, res) => {
  try {
    await db.create({
      todo: req.body.todo,
    });
    res.json({
      status: "success",
      message: "successfully created",
    });
    console.log(req.body);
  } catch (err) {
    res.json({
      status: "failure",
      message: err.message,
    });
  }
});

app.listen(5000, () => console.log("port started at 5000"));
