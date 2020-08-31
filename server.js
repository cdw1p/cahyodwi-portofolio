
const webServerPORT = 80
const server = require('./app')
server.use('*', function(req, res) {
  if (req.isSpider()) {
    return res.status('302').redirect('https://www.google.com/')
  }
  return res.redirect(`${req.protocol}://${req.headers.host}/`)
})
server.listen(webServerPORT, () => console.info(`Web server listening on port ${webServerPORT}`))