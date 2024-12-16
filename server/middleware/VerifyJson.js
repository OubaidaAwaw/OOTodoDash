  // import express 
const express = require('express');

  // this middleware will check if the incoming body is valid JSON
module.exports = express.json({
  strict: true, 
  limit: '100kb',
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf);
    } catch (error) {
      res.status(400).json({ 
        error: true,
        message: 'not valid JSON'
      })
    }
  }
})


