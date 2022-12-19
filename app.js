const express = require('express')
const app = express()
const port = 3000

// Comment Line
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    res.send(`Hello Guest`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
