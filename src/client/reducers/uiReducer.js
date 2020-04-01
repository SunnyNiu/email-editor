import { fetchText } from './types';
/* eslint-disable no-case-declarations */
const initialState = {
  buttonDisable: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchText.SAVE_TEXT_REQUESTED:
      return {
        ...state,
        buttonDisable: true,
      };
    case fetchText.SAVE_TEXT_FAILED:
      console.error(action.error);
      return {
        ...state,
        buttonDisable: false,
      };
    case fetchText.SAVE_TEXT_SUCCEEDED:
      return {
        ...state,
        buttonDisable: false,
      };
    default:
      return state;
  }
};
