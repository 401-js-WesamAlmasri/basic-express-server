'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    throw new Error('No name was specified');
  }
};
