import axios from 'axios';

export function saveText(text, userId) {
  return axios
    .put(`/api/email/${userId}`, {
      text,
    })
    .then(response => {
      return response.body;
    })
    .catch(error => console.log(error));
}

export function getText(userId) {
  return axios
    .get(`/api/email/${userId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
