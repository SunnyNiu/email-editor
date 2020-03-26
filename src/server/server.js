const path = require('path');
const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

server.get('/files/paths', (req, res) => {
  const directoryPath = path.dirname('/xml');
  console.log('directoryPath', directoryPath);
});

module.exports = server;
