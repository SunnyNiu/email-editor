import { fetchText } from './types';

export const addTextCreator = input => ({
  type: fetchText.ADD_TEXT,
  input,
});

export const fetchTextCreator = userId => ({
  type: fetchText.FETCH_TEXT_REQUESTED,
  userId,
});

export const fetchTextSuccess = text => ({
  type: fetchText.FETCH_TEXT_SUCCEEDED,
  text,
});

export const fetchTextFailure = error => ({
  type: fetchText.fetchTextFailure,
  error,
});
