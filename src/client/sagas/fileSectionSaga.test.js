import { expectSaga } from 'redux-saga-test-plan';
import { fetchSectionPath } from './fileSectionSaga';
import { getSections } from '../api/xmlFile';
import { fetchFile } from '../reducers/types';

jest.mock('../api/xmlFile');

describe('fileSectionSaga', () => {
  it('put a FILE_SECTIONS_FETCH_SUCCEEDED action when succeeded', () => {
    const sections = {
      './src/xml/breakfast.xml': {
        id: 'section_1',
        icon: 'section_1_image.jpg',
        rows: Array(2),
      },
    };
    getSections.mockReturnValueOnce(Promise.resolve(sections));
    return expectSaga(fetchSectionPath)
      .put({ type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED, sections })
      .run();
  });

  it('put a FILE_SECTIONS_FETCH_FAILED action on error', () => {
    const error = 'fetch section path failed';
    getSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchSectionPath)
      .put({ type: fetchFile.FILE_SECTIONS_FETCH_FAILED, error })
      .run();
  });
});
