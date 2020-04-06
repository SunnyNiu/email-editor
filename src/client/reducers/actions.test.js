import {
  fetchSectionsCreator,
  fetchSectionsFailureCreator,
  fetchSectionsSuccessCreator,
} from './actions';

import { fetchFile } from './types';

describe('action tests', () => {
  it('send fetch section request', () => {
    const expected = {
      type: fetchFile.FILE_SECTIONS_FETCH_REQUESTED,
    };

    const actual = fetchSectionsCreator();
    expect(actual).toEqual(expected);
  });

  it('fetch section and return paths', () => {
    const paths = ['xml/breakfast.xml', 'xml/lunch.xml'];

    const expected = {
      type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED,
      paths,
    };

    const actual = fetchSectionsSuccessCreator(paths);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch section failed', () => {
    const error = 'fetch section failed';

    const expected = {
      type: fetchFile.FILE_SECTIONS_FETCH_FAILED,
      error,
    };

    const actual = fetchSectionsFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
