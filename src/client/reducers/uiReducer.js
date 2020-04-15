import { fetchEmail } from './types';

const initialState = {
  isEmailSaving: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.SAVE_EMAIL_REQUESTED:
      return {
        ...state,
        isEmailSaving: true,
      };
    case fetchEmail.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return {
        ...state,
        isEmailSaving: false,
      };
    case fetchEmail.SAVE_Email_SUCCEEDED:
      return {
        ...state,
        isEmailSaving: false,
      };
    default:
      return state;
  }
};
