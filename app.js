const express = require('express');
const app = express();
const route = require('./src/route')

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1', route)

app.listen('3000', () => {
    console.log('server running on port 3000')
})