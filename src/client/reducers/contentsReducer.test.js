import contentsReducer from './contentsReducer';
import { fetchEmail } from './types';

function generateEmail() {
  return {
    children: ['12345'],
    widgetMap: {
      '12345': {
        id: '12345',
        type: 'section',
        width: '4',
        children: ['12345a', '12345b'],
      },
      '12345a': {
        id: '12345a',
        type: 'row',
        width: '4',
        children: ['12346a'],
      },
      '12345b': {
        id: '12345b',
        type: 'row',
        width: '4',
        children: ['12346b'],
      },
      '12346a': {
        id: '12346a',
        type: 'column',
        width: '4',
        children: ['12347a'],
      },
      '12346b': {
        id: '12346b',
        type: 'column',
        width: '4',
        children: ['12347b'],
      },
      '12347a': {
        id: '12347a',
        type: 'text',
        text: 'test text',
        children: [],
      },
      '12347b': {
        id: '12347b',
        type: 'image',
        src: './src/logo.jpg',
        children: [],
      },
    },
  };
}

describe('contentsReducer tests', () => {
  it('fetch email shows email contents', () => {
    const currentState = {
      email: {},
    };

    const action = {
      type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
      email: generateEmail(),
    };
    const expected = {
      email: generateEmail(),
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch email failed that should show error message', () => {
    const currentState = {
      email: {},
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
    const currentState = {
      email: generateEmail(),
      selectedId: '',
    };

    const selectedId = '12347b';
    const action = {
      type: 'SELECT_WIDGET',
      widgetId: selectedId,
    };
    const expected = {
      email: generateEmail(),
      selectedId,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('update widget', () => {
    const currentState = {
      email: generateEmail(),
    };

    const widgetId = '12347a';
    const value = 'text value';

    const action = {
      type: 'UPDATE_WIDGET',
      widgetId,
      value,
    };

    const newEmail = {
      children: ['12345'],
      widgetMap: {
        '12345': {
          id: '12345',
          type: 'section',
          width: '4',
          children: ['12345a', '12345b'],
        },
        '12345a': {
          id: '12345a',
          type: 'row',
          width: '4',
          children: ['12346a'],
        },
        '12345b': {
          id: '12345b',
          type: 'row',
          width: '4',
          children: ['12346b'],
        },
        '12346a': {
          id: '12346a',
          type: 'column',
          width: '4',
          children: ['12347a'],
        },
        '12346b': {
          id: '12346b',
          type: 'column',
          width: '4',
          children: ['12347b'],
        },
        '12347a': {
          id: '12347a',
          type: 'text',
          text: 'text value',
          children: [],
        },
        '12347b': {
          id: '12347b',
          type: 'image',
          src: './src/logo.jpg',
          children: [],
        },
      },
    };
    const expected = {
      email: newEmail,
    };
    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('add section', () => {
    const currentState = {
      email: generateEmail(),
    };

    const action = {
      type: fetchEmail.ADD_SECTION,
      section: {
        id: '22345',
        type: 'section',
        children: ['22345a'],
        widgetMap: {
          '22345': {
            id: '22345',
            type: 'section',
            width: '4',
            children: ['22345a'],
          },
          '22345a': {
            id: '22345a',
            width: '2',
            type: 'row',
            children: ['22345b'],
          },
          '22345b': {
            id: '22345b',
            width: '4',
            type: 'column',
            children: ['22345c'],
          },
          '22345c': {
            id: '22345c',
            text: 'xx',
            type: 'text',
            children: [],
          },
        },
      },
    };

    const newEmail = {
      children: ['12345', '22345'],
      widgetMap: {
        '12345': {
          id: '12345',
          type: 'section',
          width: '4',
          children: ['12345a', '12345b'],
        },
        '12345a': {
          id: '12345a',
          type: 'row',
          width: '4',
          children: ['12346a'],
        },
        '12345b': {
          id: '12345b',
          type: 'row',
          width: '4',
          children: ['12346b'],
        },
        '12346a': {
          id: '12346a',
          type: 'column',
          width: '4',
          children: ['12347a'],
        },
        '12346b': {
          id: '12346b',
          type: 'column',
          width: '4',
          children: ['12347b'],
        },
        '12347a': {
          id: '12347a',
          type: 'text',
          text: 'test text',
          children: [],
        },
        '12347b': {
          id: '12347b',
          type: 'image',
          src: './src/logo.jpg',
          children: [],
        },
        '22345': {
          id: '22345',
          type: 'section',
          width: '4',
          children: ['22345a'],
        },
        '22345a': {
          id: '22345a',
          width: '2',
          type: 'row',
          children: ['22345b'],
        },
        '22345b': {
          id: '22345b',
          width: '4',
          type: 'column',
          children: ['22345c'],
        },
        '22345c': {
          id: '22345c',
          text: 'xx',
          type: 'text',
          children: [],
        },
      },
    };
    const expected = {
      email: newEmail,
    };

    const actual = contentsReducer(currentState, action);
    expect(actual).toEqual(expected);
  });
});
