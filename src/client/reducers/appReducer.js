import { fetchFile } from './types';

/* eslint-disable no-case-declarations */
const initialState = {
  sections: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED:
      return {
        ...state,
        sections: action.sections,
      };
    case fetchFile.FILE_SECTIONS_FETCH_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
