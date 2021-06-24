const express = require('express')
const router = express.Router()
const fs = require('fs-extra')

module.exports.initialize = function (app) {
  app.use('/',    
    router.get('/', async (req, res) => {
      res.render('index', {
        page_title: 'Home | Cahyo Dwi Putro',
        page_params: '/',
        page_data: JSON.parse(await fs.readFileSync('./public/data.json', 'utf-8'))
      })
    }),
    router.get('/viewContent/:name', async (req, res) => {
      const pageData = JSON.parse(await fs.readFileSync('./public/data.json', 'utf-8'))
      const findData = (pageData.data).filter(data => data.name === req.params.name)
      if (findData.length > 0) {
        res.send(`
          <div class="section-title bottom_30">
            <span></span>
            <h2>Project: ${findData[0].name}</h2>
          </div>
          <p><b>Description: </b></p>
          <p>${findData[0].description}</p>
          <br>
            <p><span><b>Tags: </b></span> ${findData[0].tags.join(', ')}</p>
            <div class="col-md-12 top_30 bottom_30">
              <div class="row">
                ${findData[0].type[0].site ? `<a href="${findData[0].type[0].site || '#'}"><button class="site-btn icon">Website<i class="fa fa-globe" aria-hidden="true"></i></button></a>` : ''}
                ${findData[0].type[0].repo ? `<a href="${findData[0].type[0].repo || '#'}"><button class="site-btn icon">Github<i class="fa fa-github" aria-hidden="true"></i></button></a>` : ''}
                ${findData[0].type[0].video ? `<a href="${findData[0].type[0].video || '#'}"><button class="site-btn icon">Video Preview<i class="fa fa-play" aria-hidden="true"></i></button></a>` : ''}
                ${findData[0].type[0].npm ? `<a href="${findData[0].type[0].npm || '#'}"><button class="site-btn icon">NPM Module<i class="fa fa-gift" aria-hidden="true"></i></button></a>` : ''}
                ${findData[0].type[0].apk ? `<a href="${findData[0].type[0].apk || '#'}"><button class="site-btn icon">App Store<i class="fa fa-download" aria-hidden="true"></i></button></a>` : ''}
                ${findData[0].type[0].contact ? `<a href="${findData[0].type[0].contact || '#'}"><button class="site-btn icon">Contact Email<i class="fa fa-envelope" aria-hidden="true"></i></button></a>` : ''}
              </div>
            </div>
          <br>
          <figure class="top_25 bottom_45"> 
            <img style="max-height: 1000px; max-width: 1000px;" src="${findData[0].thumbnail}" alt="${findData[0].name}">
          </figure>
        `)
      } else {
        res.send('<center>Sorry, Data is Not Available!</center>')
      }
    })
  )
}