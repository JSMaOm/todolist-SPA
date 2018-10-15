let db = require('../models');

exports.getTodos = function(req, res) {
  db.Todo.find()
  .then(todo => res.json(todo))
  .catch(err => res.send(err));
}

exports.createTodo = function(req, res) {
  /* res.send(req.body); */
  db.Todo.create(req.body)
  .then(newTodo => res.status(201).json(newTodo))
  .catch(err => res.send(err));
}

exports.getTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
  .then(foundedTodo =>res.json(foundedTodo))
  .catch(err => res.send(err));
}

exports.updateTodo = function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(updatedTodo => res.json(updatedTodo))
  .catch(err => res.send(err));
}

exports.deleteTodo = function(req, res) {
  db.Todo.remove({_id: req.params.todoId})
  .then(() => res.json({message: 'That todo was deleted successfully'}))
  .catch(err => res.send(err));
}

module.exports = exports;