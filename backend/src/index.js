const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app  = express();

app.get('/downloads', (req, res) => {
  var URL = req.query.URL;
  res.json({url:URL});
})

app.listen(3000);