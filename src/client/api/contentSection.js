import axios from 'axios';

export function saveEmail(emailId, email) {
  return (
    axios
      .put(`/api/email/${emailId}`, {
        email,
      })
      .then(response => {
        return response.data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  );
}

export function getEmail(emailId) {
  return (
    axios
      .get(`/api/email/${emailId}`)
      .then(response => {
        return response.data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  );
}
