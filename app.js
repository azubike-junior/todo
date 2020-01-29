const express = require('express');
const app = express();
const route = require('./src/route')

app.use(express.json())

app.use('/api/v1', route)

app.get('/', (req, res) => {
    console.log('responding to root route')
    res.send('its finally working')
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})