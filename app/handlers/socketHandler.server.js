'use strict'
const fetch = require('node-fetch')

module.exports = (io) => {

  io.on('connection', (client) => {
    console.log("Server connected to client")

    client.on('join', (data) => { console.log(data) })

    client.on('query', (data) => {
      let response = {query: data}
      client.emit('result', response)
    })
  })
}
