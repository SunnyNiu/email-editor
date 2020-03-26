import fetch from 'isomorphic-fetch';

export function getXmlPath() {
  return fetch('/api/files/paths').then(response => {
    if (!response.ok) {
      return response
        .text()
        .then(text =>
          Promise.reject(new Error(`Code: ${response.status} Body: ${text}`))
        );
    }
    return response.json();
  });
}
