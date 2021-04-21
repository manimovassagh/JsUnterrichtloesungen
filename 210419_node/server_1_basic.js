'use strict';

const express = require('express');
const server = express();

server.use(express.static('htdocs')); 

server.listen(80, err => console.log(err || 'Server läuft'));
