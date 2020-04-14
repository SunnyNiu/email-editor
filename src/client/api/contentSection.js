import axios from 'axios';

export function saveSections(emailId, dropSections) {
  return (
    axios
      .put(`/api/email/${emailId}`, {
        email: dropSections,
      })
      .then(response => {
        return response.data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  );
}

export function getSections(emailId) {
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
