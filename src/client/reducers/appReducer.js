import produce from 'immer';
import { fetchFile } from './types';

const initialState = {
  sections: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED:
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.sections = action.sections;
      });
    case fetchFile.FILE_SECTIONS_FETCH_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
