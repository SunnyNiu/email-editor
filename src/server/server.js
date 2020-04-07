import path from 'path';
import express from 'express';
import cors from 'cors';
import { readdir, readFile } from './util';
import { saveContentText, getContentText } from './db/db';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

const route = express.Router();

route.get('/sections', (req, res) => {
  readdir('./src/xml', (err, items) => {
    if (err) throw err;
    const promises = items.map(item => readFile(`./src/xml/${item}`));
    Promise.all(promises).then(sections => {
      const obj = sections.reduce(
        (accumulator, currentValue) => ({ ...accumulator, ...currentValue }),
        {}
      );
      res.json(obj);
    });
  });
});

route.put('/email/:userId', (req, res) => {
  const { userId } = req.params;
  const { text } = req.body;
  saveContentText(userId, text)
    .then(body => res.json(body))
    .catch(error => res.status(500).send(`${error.message}`));
});

route.get('/email/:userId', (req, res) => {
  const { userId } = req.params;
  getContentText(userId)
    .then(body => res.json(body))
    .catch(error => res.status(500).send(`${error.message}`));
});

server.use('/api', route);

export default server;
