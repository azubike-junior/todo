const pool = require('./config');

module.exports = getResponseFromDb = async (sql, params = []) => {
    try {
        const client = await pool.connect()
        const result = await client.query(sql, params);
        return result.rows
    } catch (e) {
        console.log(e)
    }
}