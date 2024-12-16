  // import CORS allowed origins
const allowedOrigins = require('../Config/AllowedOrigins');
  // import cors lib
const cors = require('cors')

  // check if the origin is allowed by cors
const CorsOptions = cors({
  origin: (origin, callback) => {
    if(allowedOrigins.indexOf(origin) !== -1 || !origin)
      callback(null, true)
    else
      callback(new Error("Not allowed by CORS"))
  },
  methods: "GET,PUT,POST,DELETE",
  optionsSuccessStatus: 200
})

module.exports = CorsOptions