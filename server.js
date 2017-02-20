'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const routes = require('./app/routes/index.js')
const socketHandler = require('./app/handlers/socketHandler.server.js')

require('dotenv').load()

app.use('/controllers', express.static(process.cwd() + '/app/controllers'))
app.use('/public', express.static(process.cwd() + '/public'))

routes(app)
socketHandler(io)

server.listen(process.env.PORT, () => {
  console.log("Server running at port " + process.env.PORT)
})
