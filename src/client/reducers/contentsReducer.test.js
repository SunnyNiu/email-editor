import contentsReducer from './contentsReducer';
import { fetchSections } from './types';

describe('contentsReducer tests', () => {
  it('fetch text shows text', () => {
    const currentState = {
      email: [],
    };

    const email = [
      { id: 'section_1', icon: 'section_1_image.jpg' },

      { id: 'section_2', icon: 'section_2_image.jpg' },
    ];
    const action = {
      type: fetchSections.FETCH_EMAIL_SUCCEEDED,
      email,
    };
    const expected = {
      email,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch text failed that should show error message', () => {
    const currentState = {
      email: '',
    };

    const error = 'Fetch text failed';

    const action = {
      type: fetchSections.FETCH_EMAIL_FAILED,
      error,
    };

    const expected = currentState;
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = contentsReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
