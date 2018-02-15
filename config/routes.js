const path = require('path');
const express = require('express');

const home         = path.join(__dirname, '../public/personal/index.html');
const lifetracker = path.join(__dirname, '../public/life-tracker/dist/index.html');

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.use('/', express.static('public/personal'));
    app.use('/assets', express.static('public/personal/assets'));
    res.sendFile(home);
  });
  app.get('/life-tracker', (req, res) => {
    app.use('/life-tracker', express.static('public/life-tracker/dist'));
    app.use('/', express.static('public/life-tracker/dist'));
    res.sendFile(lifetracker);
  });
};
