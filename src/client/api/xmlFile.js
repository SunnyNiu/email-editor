import fetch from 'isomorphic-fetch';

export function getXmlPath() {
  return fetch('/files/paths').then(response => response.json());
}
