import { fetchText } from './types';

const initialState = {
  isEmailSaving: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchText.SAVE_TEXT_REQUESTED:
      return {
        ...state,
        isEmailSaving: true,
      };
    case fetchText.SAVE_TEXT_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return {
        ...state,
        isEmailSaving: false,
      };
    case fetchText.SAVE_TEXT_SUCCEEDED:
      return {
        ...state,
        isEmailSaving: false,
      };
    default:
      return state;
  }
};
