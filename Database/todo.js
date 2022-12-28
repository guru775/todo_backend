const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: { type: String },
});

const Todo = mongoose.model("Todo-collection", todoSchema);

module.exports = Todo;
