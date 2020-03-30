import axios from 'axios';

export function saveText(text) {
  axios
    .post('/contentText', {
      text,
    })
    .then(response => response.body)
    .catch(error => console.log(error));
}
