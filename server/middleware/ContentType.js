

const ContentTypeHeader = (req ,res ,next)=> {
  if(req.headers['content-type'] !== 'application/json')
    return res.status(400).json({
      error: true,
      message: "you should use 'application/json' content-type header"
    })
  next()
}

module.exports = ContentTypeHeader