import { fetchSections } from './types';

export const addSectionCreator = section => ({
  type: fetchSections.ADD_DROP_SECTION,
  section,
});

export const fetchSectionsCreator = emailId => ({
  type: fetchSections.FETCH_EMAIL_REQUESTED,
  emailId,
});

export const fetchSectionsSuccessCreator = email => ({
  type: fetchSections.FETCH_EMAIL_SUCCEEDED,
  email,
});

export const fetchSectionsFailureCreator = error => ({
  type: fetchSections.FETCH_EMAIL_FAILED,
  error,
});

export const saveEmailCreator = (emailId, dropSections) => ({
  type: fetchSections.SAVE_EMAIL_REQUESTED,
  emailId,
  dropSections,
});

export const saveEmailSuccessCreator = () => ({
  type: fetchSections.SAVE_EMAIL_SUCCEEDED,
});

export const saveEmailFailureCreator = error => ({
  type: fetchSections.SAVE_EMAIL_FAILED,
  error,
});
