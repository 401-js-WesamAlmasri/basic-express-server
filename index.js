'use strict';

const server = require('./src/server');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

server.start(PORT);