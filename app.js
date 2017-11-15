const express = require('express');
const errorHandler = require('errorhandler');
const path = require('path');
const dotenv = require('dotenv');
const chalk = require('chalk');

dotenv.load({ path: '.env' });

const app = express();

require('./config/config')(app);
require('./config/routes')(app);

app.use(errorHandler());

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
