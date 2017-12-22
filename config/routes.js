const path = require('path');
const express = require('express');

const home = path.join(__dirname, '../public/personal/index.html');

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.use('/', express.static('public/personal'));
    res.sendFile(home);
  });
};
