const express = require('express');
const router = express.Router();
const TodoController = require('./controller')

router.get('/todos', TodoController.allTodos);

router.get('/todo/:id', TodoController.todoById);

router.post('/todo', TodoController.createNewTodo);

router.delete('/todo/:id', TodoController.removeTodo)

router.put('/todo/:id', TodoController.updateATodo)

module.exports = router;