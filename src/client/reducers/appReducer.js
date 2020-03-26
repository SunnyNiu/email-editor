/* eslint-disable no-case-declarations */
const initialState = {
  paths: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILE_SECTION_PATH_FETCH_SUCCEEDED':
      return {
        ...state,
        paths: action.paths,
      };
    case 'FILE_SECTION_PATH_FETCH_FAILED':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
