  // import client
const { getDatabase } = require('../config/DB')

const attachDatabase = (req, res, next) => {
  try {
      // get the db and put it in the db req
    req.db = getDatabase()
    next()
  } catch (err) {
    res.status(500).send('Database unavailable')
  }
}

module.exports = attachDatabase;
