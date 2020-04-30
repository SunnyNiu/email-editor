import produce from 'immer';
import { fetchEmail } from './types';

const initialState = {
  isEmailSaving: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.SAVE_EMAIL_REQUESTED:
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.isEmailSaving = true;
      });

    case fetchEmail.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.isEmailSaving = false;
      });
    case fetchEmail.SAVE_Email_SUCCEEDED:
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.isEmailSaving = false;
      });
    default:
      return state;
  }
};
