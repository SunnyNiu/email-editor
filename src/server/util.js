import fs from 'fs';
import { translateSection } from './functions/parseXmlToJson';

export function readdir(path, callback) {
  fs.readdir(path, callback);
}

export function readFile(filePath) {
  return new Promise(resolve => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const section = translateSection(data);
      resolve({ [filePath]: section });
    });
  });
}
