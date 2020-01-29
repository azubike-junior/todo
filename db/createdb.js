const pool = require('./config')
const todo = require('./todo')

const addTodo = async () => {
    const client = await pool.connect()
    try {
        const sql = 'INSERT INTO todo (todo, isCompleted) VALUES ($1, $2)'
        const params = todo.todoList;
        const results = await client.query(sql, params)
        console.log(results)
    } catch (e) {
        throw (e)
    }
}

addTodo();


(async () => {
    const client = await pool.connect()
    try {
        const sql = 'CREATE TABLE IF NOT EXISTS todo(id BIGSERIAL PRIMARY KEY, todo VARCHAR(255) NOT NULL, isCompleted BOOLEAN NOT NULL)';
        const result = await client.query(sql)
        return result.row
    } catch (e) {
        throw (e)
    }
})()