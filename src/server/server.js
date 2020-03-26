import path from 'path';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

const route = express.Router();

route.get('/files/paths', (req, res) => {
  fs.readdir('./src/xml', (err, items) => {
    if (err) throw err;
    const paths = items.map(item => `./src/xml/${item}`);
    res.json({ paths });
  });
});

server.use('/api', route);

export default server;
