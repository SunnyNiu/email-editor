import fetch from 'isomorphic-fetch';

export function getSections() {
  return fetch('/api/sections').then(response => {
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
