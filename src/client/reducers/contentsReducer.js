import { fetchEmail } from './types';

const initialState = {
  email: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.ADD_SECTION:
      return {
        ...state,
        email: [...state.email, action.section],
      };
    case fetchEmail.FETCH_EMAIL_SUCCEEDED:
      return {
        ...state,
        email: action.email !== undefined ? action.email : [],
      };
    case fetchEmail.FETCH_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case fetchEmail.SAVE_EMAIL_REQUESTED:
      return {
        ...state,
        email: action.email,
      };
    case fetchEmail.SAVE_EMAIL_SUCCEEDED:
      return state;
    case fetchEmail.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
