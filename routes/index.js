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
            { "name": "AI & ML", "link": "ai-ml" },
            { "name": "Web Apps", "link": "web-apps" },
            { "name": "Mobile Apps", "link": "mobile-apps" },
            { "name": "Web Automation", "link": "web-automation" },
            { "name": "NPM Modules", "link": "npm-modules" },
            { "name": "All", "link": "all" }
          ],
          "data": [
            {
              "name": "Pelindo External Attendance",
              "description": "App Offers the Surest Way to Track Field Employees Time, Attendance with Face Recognition & Location",
              "categoryName": "Web & Mobile Apps",
              "category": "ai-ml web-apps mobile-apps",
              "thumbnail": "/assets/img/thumbnail/attendance-system.jpg",
              "tags": ["Node.js", "Express.js", "React Native", "Tensorflow"],
              "type": [
                {
                  "apk": "https://play.google.com/store/apps/details?id=com.pelindoexternalattendance",
                  "site": "https://linexa.itopsp3.my.id/"
                }
              ]
            },
            {
              "name": "KTP Validation Using OCR",
              "description": "Detect & Recognize Indonesian Identity Card (KTP) with Digital Image Processing Pattern",
              "categoryName": "Web Apps",
              "category": "ai-ml web-apps",
              "thumbnail": "/assets/img/thumbnail/ktp-ocr.jpg",
              "tags": ["Node.js", "Express.js", "Tesseract.js", "Image Processing"],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/ktp-validation-image.git"
                }
              ]
            },
            {
              "name": "React Native Fancy Drawer",
              "description": "React Native Navigation Drawer Implementation Using Custom Fancy Design",
              "categoryName": "Mobile Apps",
              "category": "mobile-apps",
              "thumbnail": "/assets/img/thumbnail/fancy-drawer-rn.jpg",
              "tags": ["React Native"],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/rn-example-fancydrawer.git"
                }
              ]
            },
            {
              "name": "React Native Video Stream",
              "description": "React Native Video Stream Implementation Using Protocol RTSP (Real-time Monitoring)",
              "categoryName": "Mobile Apps",
              "category": "mobile-apps",
              "thumbnail": "/assets/img/thumbnail/video-stream-rstp-rn.jpg",
              "tags": ["React Native"],
              "type": [
                {
                  "repo": "https://github.com/cdw1p/RN-RTSP-Video-Stream.git"
                }
              ]
            },
            {
              "name": "Face Detection & Recognition",
              "description": "Detect & Recognize People via Mobile Apps Using Rest-API or Client-side Browser",
              "categoryName": "Web & Mobile Apps",
              "category": "for-sale ai-ml web-apps mobile-apps",
              "thumbnail": "/assets/img/thumbnail/facial-recognition.jpg",
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
              "category": "web-apps mobile-apps",
              "thumbnail": "/assets/img/thumbnail/mylogness.jpg",
              "tags": [ "React Native", "Laravel" ],
              "type": [
                {
                  "apk": "https://play.google.com/store/apps/details?id=com.mylogness&hl=in",
                  "site": "https://logness.pelindo.co.id/"
                }
              ]
            },
            {
              "name": "SSO (Single Sign-On) Gateway",
              "description": "Features: Allowing Specific Domains, Security Challenge Using 2FA (SMS or Email) & MFA",
              "categoryName": "Web Apps",
              "category": "for-sale web-apps",
              "thumbnail": "/assets/img/thumbnail/sso.jpg",
              "tags": ["Node.js", "Express.js", "React Native"],
              "type": [
                {
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "Linkedin Bot",
              "description": "Features: Auto Search & Follow People by Keyword, Multiple Keyword Search, Spam Handling & Detection, Very Fast with Minimum Resource Usage",
              "categoryName": "Web Automation",
              "category": "for-sale web-automation",
              "thumbnail": "/assets/img/thumbnail/linkedin.jpg",
              "tags": [ "Node.js", "Automation Bot" ],
              "type": [
                {
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "Supernova WhatsApp Gateway",
              "description": "Unofficial Whatsapp Bot - Build in With REST-API & Admin Panel. Support Multiple Account Login (Worked Perfect with Multi Session)",
              "categoryName": "Web Automation",
              "category": "for-sale web-automation",
              "thumbnail": "/assets/img/thumbnail/wagateway.jpg",
              "tags": [ "Node.js", "Express.js", "SQLite3", "Automation Bot" ],
              "type": [
                {
                  "contact": "mailto:cdw1@outlook.co.id"
                }
              ]
            },
            {
              "name": "Face Detection",
              "description": "Simple Face Detection in Laravel Framework",
              "categoryName": "Web Apps",
              "category": "web-apps",
              "thumbnail": "/assets/img/thumbnail/face-detection.jpg",
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
              "thumbnail": "/assets/img/thumbnail/sgbteam.jpg",
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