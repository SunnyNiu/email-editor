/* eslint-disable no-case-declarations */
const initialState = {
  text: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};
