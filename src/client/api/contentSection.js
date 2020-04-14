import axios from 'axios';

export function saveSections(userId, dropSections) {
  return (
    axios
      .put(`/api/email/${userId}`, {
        email: dropSections,
      })
      .then(response => {
        return response.data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  );
}

export function getSections(userId) {
  return (
    axios
      .get(`/api/email/${userId}`)
      .then(response => {
        return response.data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  );
}
