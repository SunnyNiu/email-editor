import contentsReducer from './contentsReducer';
import { fetchText } from './types';

describe('contentsReducer tests', () => {
  it('fetch text shows text', () => {
    const currentState = {
      text: '',
    };

    const text = 'fetch text';
    const action = {
      type: fetchText.FETCH_TEXT_SUCCEEDED,
      text,
    };
    const expected = {
      text,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch text failed that should show error message', () => {
    const currentState = {
      text: '',
    };

    const error = 'Fetch text failed';

    const action = {
      type: fetchText.FETCH_TEXT_FAILED,
      error,
    };

    const expected = currentState;
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = contentsReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
