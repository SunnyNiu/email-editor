import axios from 'axios';

export function saveText(text, userId) {
  axios
    .post(`/contentText/${userId}`, {
      text,
    })
    .then(response => response.body)
    .catch(error => console.log(error));
}

export function getText(userId) {
  axios
    .get(`/contentText/${userId}`)
    .then(response => response.body)
    .catch(error => console.log(error));
}
