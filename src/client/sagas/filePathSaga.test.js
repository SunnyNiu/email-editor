import { expectSaga } from 'redux-saga-test-plan';
import { fetchFilePath } from './filePathSaga';
import { getXmlPath } from '../api/xmlFile';
import { fetchFile } from '../reducers/types';

jest.mock('../api/xmlFile');

describe('filePathSaga', () => {
  it('put a FILE_SECTION_PATH_FETCH_SUCCEEDED action when succeeded', () => {
    const paths = ['xml1', 'xml2'];
    getXmlPath.mockReturnValueOnce(Promise.resolve({ paths }));
    return expectSaga(fetchFilePath)
      .put({ type: fetchFile.FILE_SECTION_PATH_FETCH_SUCCEEDED, paths })
      .run();
  });

  it('put a FILE_SECTION_PATH_FETCH_FAILED action on error', () => {
    const error = 'fetch section path failed';
    getXmlPath.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchFilePath)
      .put({ type: fetchFile.FILE_SECTION_PATH_FETCH_FAILED, error })
      .run();
  });
});
