import {
  fetchSectionPathCreator,
  fetchSectionPathFailure,
  fetchSectionPathSuccess,
} from '../src/client/reducers/actions';

describe('action tests', () => {
  it('send fetch section request', () => {
    const expected = {
      type: 'FILE_SECTION_PATH_FETCH_REQUESTED',
    };

    const actual = fetchSectionPathCreator();
    expect(actual).toEqual(expected);
  });

  it('fetch section and return paths', () => {
    const paths = ['xml/breakfast.xml', 'xml/lunch.xml'];

    const expected = {
      type: 'FILE_SECTION_PATH_FETCH_SUCCEEDED',
      paths,
    };

    const actual = fetchSectionPathSuccess(paths);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch section failed', () => {
    const error = 'fetch section failed';

    const expected = {
      type: 'FILE_SECTION_PATH_FETCH_FAILED',
      error,
    };

    const actual = fetchSectionPathFailure(error);
    expect(actual).toEqual(expected);
  });
});
