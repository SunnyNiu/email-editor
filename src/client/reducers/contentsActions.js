import { fetchSections } from './types';

export const addSectionCreator = section => ({
  type: fetchSections.ADD_DROP_SECTION,
  section,
});

export const fetchSectionsCreator = emailId => ({
  type: fetchSections.FETCH_SECTIONS_REQUESTED,
  emailId,
});

export const fetchSectionsSuccessCreator = email => ({
  type: fetchSections.FETCH_SECTIONS_SUCCEEDED,
  email,
});

export const fetchSectionsFailureCreator = error => ({
  type: fetchSections.FETCH_SECTIONS_FAILED,
  error,
});

export const saveSectionsCreator = (emailId, dropSections) => ({
  type: fetchSections.SAVE_SECTIONS_REQUESTED,
  emailId,
  dropSections,
});

export const saveSectionsSuccessCreator = () => ({
  type: fetchSections.SAVE_SECTIONS_SUCCEEDED,
});

export const saveSectionsFailureCreator = error => ({
  type: fetchSections.SAVE_SECTIONS_FAILED,
  error,
});
