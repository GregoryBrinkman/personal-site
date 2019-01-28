const path = require('path');
const express = require('express');

const home = path.join(__dirname, '../public/personal/index.html');
const styleGuide = path.join(__dirname, '../public/styles/index.html');
const ai = path.join(__dirname, '../public/presentations/ai/index.html');
const lifetracker = path.join(__dirname, '../public/life-tracker/dist/index.html');

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.use('/', express.static('dist'));
    app.use('/assets', express.static('public/personal/assets'));
    res.sendFile(home);
  });
  app.get('/styles', (req, res) => {
    app.use('/styles', express.static('public/styles'));
    app.use('/', express.static('public/styles'));
    res.sendFile(styleGuide);
  });

  app.get('/life-tracker', (req, res) => {
    app.use('/life-tracker', express.static('public/life-tracker/dist'));
    app.use('/', express.static('public/life-tracker/dist'));
    res.sendFile(lifetracker);
  });
  app.get('/ai', (req, res) => {
    app.use('/', express.static('public/presentations/ai'));
    app.use('/reveal', express.static('public/presentations/reveal.js'));
    app.use('/assets', express.static('public/presentations/ai/assets'));
    res.sendFile(ai);
  });
};
