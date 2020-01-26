const getResponseFromDb = require('./migrate');

class Todo {
    static async getAllTodos() {
        const sql = 'SELECT * FROM todo';
        try {
            return await getResponseFromDb(sql, null);
        } catch (e) {
            console.log(e);
        }
    }

    static async getTodoById(id) {
        const sql = 'SELECT * FROM todo WHERE id = $1';
        const params = [id];
        try {
            return await getResponseFromDb(sql, params);
        } catch (e) {
            console.log(e);
        }
    }

    static async createTodo(newTodo) {
        const {
            todo,
            isCompleted
        } = newTodo;
        const sql = 'INSERT INTO todo(todo, isCompleted) VALUES ($1, $2)';
        const params = [todo, isCompleted];
        try {
            return await getResponseFromDb(sql, params);
        } catch (e) {
            console.log(e);
        }
    }

    static async deleteTodo(id) {
        const sql = 'DELETE FROM todo WHERE id = $1';
        const params = [id];
        try {
            return await getResponseFromDb(sql, params);
        } catch (e) {
            console.log(e);
        }
    }

    static async updateTodo(todo, id) {
        const sql = 'UPDATE todo SET todo = $1 WHERE id =$2'
        const params = [todo, id]
        try {
            return await getResponseFromDb(sql, params)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = Todo;