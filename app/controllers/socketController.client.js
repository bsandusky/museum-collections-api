'use strict'

const socket = io.connect('http://localhost:8000')

socket.on('connect', (data) => {

  socket.emit('join', 'Client connected to server')

  $('#search-query-form').on('submit', function(event) {
    socket.emit('query', $("#search-query").val())
    this.reset()
    return false
  })

  socket.on('result', (data) => {
    $('#result').append('<p>' + data.query + '</p>')
  })

})
