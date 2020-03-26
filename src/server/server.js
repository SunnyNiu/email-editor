import path from 'path';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

server.get('/files/paths', (req, res) => {
  fs.readdir('./src/xml', function(err, items) {
    if (err) throw err;
    const filesTotal = items.length;
    const array = [];
    for (let i = 0; i < items.length; i++) {
      array.push(`./src/xml/${items[i]}`);
    }
    res.json({ path: array, total: filesTotal });
  });
});

module.exports = server;
