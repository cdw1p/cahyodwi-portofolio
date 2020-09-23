const express = require('express')
const router = express.Router()

module.exports.initialize = function(app) {
  app.use('/',
    router.get('/', (req, res) => {
      res.render('index', {
        page_title: 'Home | Cahyo Dwi Putro',
        page_params: '/'
      })
    }),
    router.get('/projects', (req, res) => {
      res.render('projects', {
        page_title: 'Recent Projects | Cahyo Dwi Putro',
        page_params: '/projects'
      })
    })
  )

  app.use('/api/v1',
    router.get('/getData', (req, res) => {
      let data = [
        {
          "category": [
            { "name": "For Sale", "link": "for-sale" },
            { "name": "Web Apps", "link": "web-apps" },
            { "name": "Mobile Apps", "link": "mobile-apps" },
            { "name": "Web Automation", "link": "web-automation" },
            { "name": "NPM Modules", "link": "npm-modules" },
            { "name": "All", "link": "all" }
          ],
          "data": [
            {
              "name": "Face Detection & Recognition",
              "description": "Detect & Recognize People via Mobile Apps Using Rest-API or Client-side Browser",
              "categoryName": "Web & Mobile Apps",
              "category": "web-apps mobile-apps for-sale",
              "thumbnail": "./assets/img/thumbnail/facial-recognition.jpg",
              "tags": ["Node.js", "Express.js", "React Native", "Tensorflow"],
              "type": [
                {
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "My Logness",
              "description": "Inventory Management of Almost All Electronic Devices at PT Pelabuhan Indonesia III (Persero)",
              "categoryName": "Web & Mobile Apps",
              "category": "mobile-apps web-apps",
              "thumbnail": "./assets/img/thumbnail/mylogness.jpg",
              "tags": [ "React Native", "Laravel" ],
              "type": [
                {
                  "apk": "https://play.google.com/store/apps/details?id=com.mylogness&hl=in",
                  "site": "https://logness.pelindo.co.id/"
                }
              ]
            },
            {
              "name": "Linkedin Bot",
              "description": "Auto Search & Follow People by Keyword.<br/>Features: Multiple Keyword Search, Spam Handling & Detection, Very Fast with Minimum Resource Usage",
              "categoryName": "Web Automation",
              "category": "for-sale web-automation",
              "thumbnail": "./assets/img/thumbnail/linkedin.jpg",
              "tags": [ "Node.js", "Automation Bot" ],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/linkedin-auto.git",
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "Supernova WhatsApp Gateway",
              "description": "Unofficial Whatsapp Bot - Build in With REST-API & Admin Panel. Support Multiple Account Login (Worked Perfect with Multi Session)",
              "categoryName": "Web Automation",
              "category": "for-sale web-automation",
              "thumbnail": "./assets/img/thumbnail/wagateway.jpg",
              "tags": [ "Node.js", "Express.js", "SQLite3", "Automation Bot" ],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/supernova-whatsapp.git",
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "Face Detection",
              "description": "Simple Face Detection in Laravel Framework",
              "categoryName": "Web Apps",
              "category": "web-apps",
              "thumbnail": "./assets/img/thumbnail/face-detection.jpg",
              "tags": ["Laravel"],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/Laravel-Face-Detection.git"
                }
              ]
            },
            {
              "name": "SGB Team API",
              "description": "SGB Team Official API to Check SGB Code Validation",
              "categoryName": "NPM Modules",
              "category": "npm-modules",
              "thumbnail": "./assets/img/thumbnail/sgbteam.jpg",
              "tags": [ "Node.js", "Javascript", "API Wrapper"],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/SGBTeam-API.git",
                  "npm": "https://www.npmjs.com/package/sgbteam-api"
                }
              ]
            }
          ]
        }
      ]
      return res.json(data)
    })
  )
}