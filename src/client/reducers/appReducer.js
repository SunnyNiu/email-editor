import { fetchFile } from './types';

/* eslint-disable no-case-declarations */
const initialState = {
  paths: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchFile.FILE_SECTION_PATH_FETCH_SUCCEEDED:
      return {
        ...state,
        paths: action.obj,
      };
    case fetchFile.FILE_SECTION_PATH_FETCH_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    default:
      return state;
  }
};
