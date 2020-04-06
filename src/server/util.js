import fs from 'fs';

export function readdir(path, callback) {
  fs.readdir(path, callback);
}

export function readFile(path, callback) {
  fs.readFile(path, callback);
}
