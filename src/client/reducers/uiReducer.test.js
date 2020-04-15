import uiReducer from './uiReducer';
import { fetchEmail } from './types';

describe('appReducer tests', () => {
  it('the button should be disable when sending save request', () => {
    const currentState = {
      isEmailSaving: false,
    };

    const action = {
      type: fetchEmail.SAVE_EMAIL_REQUESTED,
      email: [{ id: 1, image: 'x.jpg' }],
      emailId: '100',
    };
    const expected = {
      isEmailSaving: true,
    };
    const actual = uiReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('the button should be enable when save email successfully', () => {
    const currentState = {
      isEmailSaving: false,
    };

    const action = {
      type: fetchEmail.SAVE_EMAIL_SUCCEEDED,
    };
    const expected = {
      isEmailSaving: false,
    };
    const actual = uiReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('save failed that should enable button', () => {
    const currentState = {
      isEmailSaving: false,
    };

    const error = 'save email failed';

    const action = {
      type: fetchEmail.SAVE_EMAIL_FAILED,
      error,
    };

    const expected = { isEmailSaving: false };
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = uiReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
