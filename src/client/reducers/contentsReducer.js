import { fetchSections } from './types';

const initialState = {
  email: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchSections.ADD_DROP_SECTION:
      return {
        ...state,
        email: [...state.email, action.section],
      };
    case fetchSections.FETCH_EMAIL_SUCCEEDED:
      return {
        ...state,
        email: action.email !== undefined ? action.email : [],
      };
    case fetchSections.FETCH_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case fetchSections.SAVE_EMAIL_REQUESTED:
      return {
        ...state,
        email: action.dropSections,
      };
    case fetchSections.SAVE_EMAIL_SUCCEEDED:
      return state;
    case fetchSections.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
