import fetch from 'isomorphic-fetch';

export function getXmlPath() {
  return fetch('/api/files/paths').then(response => response.json());
}
