import { fetchText } from './types';
/* eslint-disable no-case-declarations */
const initialState = {
  text: 'default',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchText.ADD_TEXT:
      return {
        ...state,
        input: action.input,
      };
    case fetchText.FETCH_TEXT_SUCCEEDED:
      return {
        ...state,
        text: action.text,
      };
    case fetchText.FETCH_TEXT_FAILED:
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
