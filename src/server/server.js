import path from 'path';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

server.get('/api/files/paths', (req, res) => {
  fs.readdir('./src/xml', function(err, items) {
    if (err) throw err;
    const filesTotal = items.length;
    const array = [];

    items.map(item => array.push(`./src/xml/${item}`));
    res.json({ paths: array, total: filesTotal });
  });
});

module.exports = server;
