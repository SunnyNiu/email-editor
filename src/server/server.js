import path from 'path';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { readdir } from './util';
import { saveContentText, getContentText } from './db/db';
import { translateSection } from './functions/parseXmlToJson';

const server = express();

server.use(express.static(path.join(__dirname, '../assets')));
server.use(express.json());
server.use(cors());

const route = express.Router();

function readFile(filePath) {
  return new Promise(resolve => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const section = translateSection(data);
      resolve({ [filePath]: section });
    });
  });
}

route.get('/files/paths', (req, res) => {
  readdir('./src/xml', (err, items) => {
    if (err) throw err;
    const promises = items.map(item => readFile(`./src/xml/${item}`));
    Promise.all(promises).then(sections => {
      const obj = {};
      sections.map(section => {
        obj[Object.keys(section)[0]] = section[Object.keys(section)[0]];
      });
      res.json({ obj });
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
