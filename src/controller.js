const Todo = require('../db/models');
const {
    sendResponse,
    handleError
} = require('../src/helper');

class TodoContoller {
    static async allTodos(req, res, next) {
        try {
            const allTodos = await Todo.getAllTodos();
            return sendResponse(res, allTodos, 200, 'todos retrieved');
        } catch (e) {
            next(e);
        }
    }

    static async todoById(req, res, next) {
        try {
            const foundTodo = await Todo.getTodoById(req.params.id);
            if (foundTodo.length === 0) {
                return handleError('todo not found', null, next);
            }
            return sendResponse(res, foundTodo, 200, 'todo retrieved');
        } catch (e) {
            next(e);
        }
    }

    static async createNewTodo(req, res, next) {
        const {
            todo,
            isCompleted
        } = req.body;
        const newTodo = {
            todo,
            isCompleted
        };
        try {
            const returnedTodo = await Todo.createTodo(newTodo);
            return sendResponse(res, returnedTodo, 200, 'todo created');
        } catch (e) {
            next(e);
        }
    }

    static async removeTodo(req, res, next) {
        try {
            const deletedTodo = await Todo.deleteTodo(req.params.id);
            return sendResponse(res, deletedTodo, 200, 'todo deleted');
        } catch (e) {
            next(e);
        }
    }

    static async updateATodo(req, res, next) {
        const {
            todo
        } = req.body
        try {
            const foundTodo = await Todo.getTodoById(req.params.id);
            if (foundTodo.length === 0) {
                return handleError('todo not found', null, next);
            }
            const updatedTodo = await Todo.updateTodo(todo, req.params.id)
            return sendResponse(res, updatedTodo, 200, 'todo updated');
        } catch (e) {
            next(e)
        }
    }
}

module.exports = TodoContoller;