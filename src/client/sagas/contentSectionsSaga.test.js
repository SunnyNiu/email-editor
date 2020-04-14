import { expectSaga } from 'redux-saga-test-plan';
import {
  fetchContentSections,
  saveContentSections,
} from './contentSectionsSaga';
import { getSections, saveSections } from '../api/contentSection';
import { fetchSections } from '../reducers/types';

jest.mock('../api/contentText');

describe('contentTextSaga', () => {
  it('put a SAVE_SECTIONS_SUCCEEDED action when succeeded', () => {
    saveSections.mockReturnValueOnce(Promise.resolve());
    return expectSaga(saveContentSections, {
      emailId: '100',
      text: 'save text',
    })
      .put({ type: fetchSections.SAVE_EMAIL_SUCCEEDED })
      .run();
  });

  it('put a SAVE_SECTIONS_FAILED action on error', () => {
    const error = 'save text failed';
    saveSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(saveContentSections, {
      emailId: '100',
      text: 'save text',
    })
      .put({ type: fetchSections.SAVE_SECTIONS_FAILED, error })
      .run();
  });

  it('put a GET_SECTIONS_SUCCEEDED action when succeeded', () => {
    const text = { id: 1, emailId: '100', text: 'text 100' };
    getSections.mockReturnValueOnce(Promise.resolve({ text }));

    return expectSaga(fetchContentSections, { emailId: '100' })
      .put({ type: fetchSections.FETCH_EMAIL_SUCCEEDED, text })
      .run();
  });

  it('put a FETCH_SECTIONS_FAILED action on error', () => {
    const error = 'get text failed';
    getSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchContentSections, { emailId: '100' })
      .put({ type: fetchSections.FETCH_EMAIL_FAILED, error })
      .run();
  });
});
