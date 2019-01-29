const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  app.use('/', express.static('public/personal'));
  app.use('/assets', express.static('public/personal/assets'));
  res.sendFile(path.join(__dirname, 'public/personal/index.html'));
});

app.listen(port, () =>
  console.log(`Server listening on port ${port}\nCtrl+C to close`)
);
