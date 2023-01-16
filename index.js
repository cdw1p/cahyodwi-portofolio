const express = require('express')
const path = require('path')
const cors = require('cors')
const compression = require('compression')
const expressMinify = require('express-minify-html-2')
const expressSpider = require('express-spider-middleware')
const app = express()
const port = process.env.PORT || 4000

app.enable('trust proxy')
app.disable('x-powered-by')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)
app.use(express.static('public', { maxAge: 31557600 }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(compression())
app.use(expressSpider.middleware())
app.use(expressMinify({
  override: true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}))

const Routes = require('./routes')
Routes.initialize(app)

app.use('*', function (req, res) {
  if (req.isSpider()) {
    return res.status('302').redirect('https://www.google.com/')
  }
  return res.redirect(`${req.protocol}://${req.headers.host}/`)
})

app.listen(port, () => console.info(`Web server listening on port ${port}`))