'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const pageNotFoundHandler = require('./error-handlers/404');
const errorHanlder = require('./error-handlers/500');

app.use(logger);

app.get('/person', validator, (req, res, next) => {
  const name = req.query.name;
  res.json({
    name: name,
  });
});

app.use('*', pageNotFoundHandler);
app.use(errorHanlder);

function start(port) {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
