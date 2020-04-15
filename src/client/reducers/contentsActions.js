import { fetchEmail } from './types';

export const addSectionCreator = section => ({
  type: fetchEmail.ADD_SECTION,
  section,
});

export const fetchEmailCreator = emailId => ({
  type: fetchEmail.FETCH_EMAIL_REQUESTED,
  emailId,
});

export const fetchEmailSuccessCreator = email => ({
  type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
  email,
});

export const fetchEmailFailureCreator = error => ({
  type: fetchEmail.FETCH_EMAIL_FAILED,
  error,
});

export const saveEmailCreator = (emailId, email) => ({
  type: fetchEmail.SAVE_EMAIL_REQUESTED,
  emailId,
  email,
});

export const saveEmailSuccessCreator = () => ({
  type: fetchEmail.SAVE_EMAIL_SUCCEEDED,
});

export const saveEmailFailureCreator = error => ({
  type: fetchEmail.SAVE_EMAIL_FAILED,
  error,
});
