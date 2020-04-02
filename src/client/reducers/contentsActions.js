import { fetchText } from './types';

export const addTextCreator = input => ({
  type: fetchText.ADD_TEXT,
  input,
});

export const fetchTextCreator = userId => ({
  type: fetchText.FETCH_TEXT_REQUESTED,
  userId,
});

export const fetchTextSuccessCreator = text => ({
  type: fetchText.FETCH_TEXT_SUCCEEDED,
  text,
});

export const fetchTextFailureCreator = error => ({
  type: fetchText.FETCH_TEXT_FAILED,
  error,
});

export const saveTextCreator = (userId, text) => ({
  type: fetchText.SAVE_TEXT_REQUESTED,
  userId,
  text,
});

export const saveTextSuccessCreator = () => ({
  type: fetchText.SAVE_TEXT_SUCCEEDED,
});

export const saveTextFailureCreator = error => ({
  type: fetchText.SAVE_TEXT_FAILED,
  error,
});
