import path from 'path';
import express from 'express';
import cors from 'cors';
import { readdir } from './util';
import db from './db/db';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

const route = express.Router();

route.get('/files/paths', (req, res) => {
  readdir('./src/xml', (err, items) => {
    if (err) throw err;
    const paths = items.map(item => `./src/xml/${item}`);
    res.json({ paths });
  });
});

route.post('/contentText/:userId', (req, res) => {
  const userId = Number(req.param.userId);
  const { text } = req.body;
  return db
    .saveContentText(userId, text)
    .then(contentText => res.json(contentText));
});

route.get('/contentText/:userId', (req, res) => {
  const userId = Number(req.param.userId);
  return db
    .getContentText(userId)
    .then(text => res.json(text))
    .catch(error => res.status(500).send(`${error.message}`));
});

server.use('/api', route);

export default server;
