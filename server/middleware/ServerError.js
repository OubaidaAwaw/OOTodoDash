  // error server middleware
const errorHandler = (req, res) => {
    // send error
  res.status(500).json({
    "error": true,
    "message": "internal server error!!"
  });
}

module.exports = errorHandler;