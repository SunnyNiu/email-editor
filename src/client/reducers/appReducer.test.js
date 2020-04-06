import appReducer from './appReducer';
import { fetchFile } from './types';

describe('appReducer tests', () => {
  it('fetch paths shows new paths', () => {
    const currentState = {
      paths: [],
    };

    const paths = ['xml/section1.xml', 'xml/section2.xml'];
    const action = {
      type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED,
      paths,
    };
    const expected = {
      paths: ['xml/section1.xml', 'xml/section2.xml'],
    };
    const actual = appReducer(currentState, action);
    expect(actual).toEqual(expected);
  });

  it('fetch paths failed that should show error message', () => {
    const currentState = {
      paths: [],
    };

    const error = 'Fetch section path failed';

    const action = {
      type: fetchFile.FILE_SECTIONS_FETCH_FAILED,
      error,
    };

    const expected = { paths: [] };
    const consoleSpy = jest.spyOn(console, 'error');
    const actual = appReducer(currentState, action);
    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(actual).toEqual(expected);
  });
});
