import fs from 'fs';

export function readFile(path, callback) {
  fs.readFile(path, callback);
}
