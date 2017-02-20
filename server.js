'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const routes = require('./app/routes/index.js')

require('dotenv').load()

app.use('/controllers', express.static(process.cwd() + '/app/controllers'))
app.use('/public', express.static(process.cwd() + '/public'))

routes(app)

io.on('connection', (client) => {
  console.log("Server received client connection")
  client.on('join', (data) => { console.log(data) })

})

server.listen(process.env.PORT, () => {
  console.log("Server running at port " + process.env.PORT)
})
