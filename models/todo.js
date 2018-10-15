//here where we will do all the logic to do todo_api schema
//three things to care about in our api
//name
//completed
//created_date

let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
      required: "F**k it's not working"
    },
    completed: {
      type: Boolean,
      default: false
    },
    created_date: {
      type: Date,
      default: Date.now
  }
});

//now we have to compile it to a model
let Todo = mongoose.model('Todo', todoSchema);


//then we add it to modules using this command
module.exports = Todo;