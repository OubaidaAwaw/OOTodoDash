  // configure the .env
require('dotenv').config()
  // import express
const express = require('express')
  // import start server function
const StartServer = require('./config/StartServer')
  // declaret the server app
const app = express()
  // Cross Origin Resource Sharing middleware
app.use(require('./middleware/CorsOptions'))
  // check if header is json content type
app.use(require("./middleware/ContentType.js"))
  // json middleware
app.use(require('./middleware/VerifyJson.js'))
  // built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))
  // helmet middleware CSP
app.use(require('./middleware/Helmet'))
  // compress the reqres
app.use(require('./config/Compress'))
  // middleware for sanitizing request body
app.use(require('./middleware/SinitiseHtml'))
  // attachDatabase to use in other middleware
app.use(require("./Middleware/AttachDataBase"))
  // ?? Endpoints
app.use('/todos', require('./router/api/todos.js'))
  // [+499] server errors handler
app.use(require('./Middleware/ServerError'))
  // router error 404 not found
app.all('*', require('./Middleware/RoutesError'))
  // start the server and configure db
StartServer(app)