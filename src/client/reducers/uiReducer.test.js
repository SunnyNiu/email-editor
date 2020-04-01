import uiReducer from './uiReducer';
import { fetchText } from './types';

describe('appReducer tests', () => {
  it('the button should be disable when sending save request', () => {
    const currentState = {
      buttonDisable: false,
    };

    const action = {
      type: fetchText.SAVE_TEXT_REQUESTED,
      text: 'text',
      userId: '100',
    };
    const expected = {
      buttonDisable: true,
    };
    const actual = uiReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('the button should be enable when save text successfully', () => {
    const currentState = {
      buttonDisable: false,
    };

    const action = {
      type: fetchText.SAVE_TEXT_SUCCEEDED,
    };
    const expected = {
      buttonDisable: false,
    };
    const actual = uiReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('save failed that should enable button', () => {
    const currentState = {
      buttonDisable: false,
    };

    const error = 'save text failed';

    const action = {
      type: fetchText.SAVE_TEXT_FAILED,
      error,
    };

    const expected = { buttonDisable: false };
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = uiReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
