
const express = require('express')
const axios = require('axios')
const { posts } = require('./endpoints')
const { authenticate } = require('./middlewares')
const app = express()
const port = 3000

app.use(express.json())
const postsHandlers = posts({ axios })
app.post('/', authenticate, postsHandlers.post)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
