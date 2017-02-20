'use strict'

const path = process.cwd()

module.exports = (app) => {

  app.route('/')
    .get((req, res) => {
      res.sendFile(path + '/public/index.html')
    })

  app.route('/api/search')
    .get((req, res) => {
      res.json({body: "something here"})
    })
}
