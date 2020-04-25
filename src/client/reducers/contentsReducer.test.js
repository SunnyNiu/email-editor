import contentsReducer from './contentsReducer';
import { fetchEmail } from './types';

describe('contentsReducer tests', () => {
  it('fetch email shows email contents', () => {
    const currentState = {
      email: [],
    };

    const email = [
      { id: 'section_1', icon: 'section_1_image.jpg' },

      { id: 'section_2', icon: 'section_2_image.jpg' },
    ];
    const action = {
      type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
      email,
    };
    const expected = {
      email,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch email failed that should show error message', () => {
    const currentState = {
      email: '',
    };

    const error = 'Fetch email failed';

    const action = {
      type: fetchEmail.FETCH_EMAIL_FAILED,
      error,
    };

    const expected = currentState;
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = contentsReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });

  it('select widget', () => {
    const email = [
      { id: 'section_1', icon: 'section_1_image.jpg' },

      { id: 'section_2', icon: 'section_2_image.jpg' },
    ];
    const currentState = {
      email,
      selectedId: '',
    };

    const selectedId = '12345';
    const action = {
      type: 'SELECT_WIDGET',
      widgetId: selectedId,
    };
    const expected = {
      email,
      selectedId,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('update widget', () => {
    const email = [
      {
        name: 'section_1',
        icon: 'section_1_image.jpg',
        rows: [
          {
            width: '6',
            columns: [
              {
                width: '3',
                widgets: [{ text: 'section_1', type: 'text', id: '12345' }],
              },
            ],
          },
        ],
      },
    ];
    const currentState = {
      email,
      selectedId: '',
    };

    const widgetId = '12345';
    const value = 'text value';
    const action = {
      type: 'UPDATE_WIDGET',
      widgetId,
      value,
    };

    const newEmail = [
      {
        name: 'section_1',
        icon: 'section_1_image.jpg',
        rows: [
          {
            width: '6',
            columns: [
              {
                width: '3',
                widgets: [{ text: value, type: 'text', id: '12345' }],
              },
            ],
          },
        ],
      },
    ];
    const expected = {
      email: newEmail,
      selectedId: widgetId,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });
});
