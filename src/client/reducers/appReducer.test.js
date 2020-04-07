import appReducer from './appReducer';
import { fetchFile } from './types';

describe('appReducer tests', () => {
  it('fetch paths shows new paths', () => {
    const currentState = {
      sections: {},
    };

    const sections = {
      'xml/breakfast.xml': '<Section />',
      'xml/lunch.xml': '<Section test=text/>',
    };
    const action = {
      type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED,
      sections,
    };
    const expected = {
      sections: {
        'xml/breakfast.xml': '<Section />',
        'xml/lunch.xml': '<Section test=text/>',
      },
    };
    const actual = appReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch sections failed that should show error message', () => {
    const currentState = {
      sections: {},
    };

    const error = 'Fetch section path failed';

    const action = {
      type: fetchFile.FILE_SECTIONS_FETCH_FAILED,
      error,
    };

    const expected = { sections: {} };
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = appReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
