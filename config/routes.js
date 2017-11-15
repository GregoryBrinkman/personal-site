const path = require('path');
const express = require('express');

const home = path.join(__dirname, '../public/index.html');
const softwarereviews = path.join(__dirname, '../public/reveal.js/demo.html');
const worldmap = path.join(__dirname, '../public/html/worldmap.html');
const versusvim = path.join(__dirname, '../public/html/versusvim.html');

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.use('/', express.static('public'));
    app.use('/images', express.static('public/images'));
    res.sendFile(home);
  });
  app.get('/software-reviews', (req, res) => {
    app.use( '/software-reviews', express.static('public'));
    app.use( '/', express.static('public/reveal.js'));
    res.sendFile(softwarereviews);
  });
  app.get('/worldmap', (req, res) => {
    app.use( '/worldmap', express.static('public/assets'));
    app.use( '/', express.static('public'));
    res.sendFile(worldmap);
  });
  app.get('/versus-vim', (req, res) => {
    app.use( '/versus-vim', express.static('public/assets'));
    app.use( '/', express.static('public'));
    res.sendFile(versusvim);
  });
};
