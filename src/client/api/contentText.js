import axios from 'axios';

export function saveText(userId, text) {
  return axios
    .put(`/api/email/${userId}`, {
      text,
    })
    .then(response => {
      return response.data;
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
