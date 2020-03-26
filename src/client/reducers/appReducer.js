/* eslint-disable no-case-declarations */
const initialState = {
  paths: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILE_PATH_FETCH_SUCCEEDED':
      return {
        ...state,
        paths: action.paths,
      };
    default:
      return state;
  }
};
