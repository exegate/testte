const express = require('express')

require('dotenv').config()

const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const controller = require('./controller')

const app = express()

const whitelist = ['http://localhost:3000', 'http://192.168.56.1:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => res.send('/'))
//
app.post('/login', (req, res) => controller.postLogin(req, res))
//
app.post('/registration', (req, res) => controller.postRegistration(req, res))
//
app.post('/forgetpassword', (req, res) => controller.postForgetpassword(req, res))


app.listen(process.env.PORT || 5000, () => {
    console.log(`app is running on port ${process.env.PORT || 5000}`)
})
