import { fetchText } from './types';
/* eslint-disable no-case-declarations */
const initialState = {
  text: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchText.ADD_TEXT:
      return {
        ...state,
        text: [...state.text, action.input],
      };
    case fetchText.FETCH_TEXT_SUCCEEDED:
      return {
        ...state,
        text: action.text !== undefined ? JSON.parse(action.text) : [],
      };
    case fetchText.FETCH_TEXT_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case fetchText.SAVE_TEXT_REQUESTED:
      return {
        ...state,
        text: action.text,
      };
    case fetchText.SAVE_TEXT_SUCCEEDED:
      return state;
    case fetchText.SAVE_TEXT_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
