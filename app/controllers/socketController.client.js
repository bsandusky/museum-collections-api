'use strict'

const socket = io.connect('http://localhost:8000')

socket.on('connect', (data) => {
  socket.emit('join', 'Client connected to server')

})
