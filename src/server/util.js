import fs from 'fs';

export function readdir(path, callback) {
  fs.readdir(path, callback);
}
