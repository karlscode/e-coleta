import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json('Hello world!')
})

app.listen(3333)