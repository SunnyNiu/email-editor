import { expectSaga } from 'redux-saga-test-plan';
import { fetchFilePath } from './fileSectionSaga';
import { getSections } from '../api/xmlFile';
import { fetchFile } from '../reducers/types';

jest.mock('../api/xmlFile');

describe('filePathSaga', () => {
  it('put a FILE_SECTIONS_FETCH_SUCCEEDED action when succeeded', () => {
    const paths = ['xml1', 'xml2'];
    getSections.mockReturnValueOnce(Promise.resolve({ paths }));
    return expectSaga(fetchFilePath)
      .put({ type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED, paths })
      .run();
  });

  it('put a FILE_SECTIONS_FETCH_FAILED action on error', () => {
    const error = 'fetch section path failed';
    getSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchFilePath)
      .put({ type: fetchFile.FILE_SECTIONS_FETCH_FAILED, error })
      .run();
  });
});
