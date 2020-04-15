import { expectSaga } from 'redux-saga-test-plan';
import {
  fetchContentSections,
  saveContentSections,
} from './contentSectionsSaga';
import { getSections, saveSections } from '../api/contentSection';
import { fetchSections } from '../reducers/types';

jest.mock('../api/contentSection');

describe('contentTextSaga', () => {
  it('put a SAVE_EMAIL_SUCCEEDED action when succeeded', () => {
    saveSections.mockReturnValueOnce(Promise.resolve());
    return expectSaga(saveContentSections, {
      emailId: '100',
      email: [
        { id: 1, text: 'hello' },
        { id: 2, text: 'world!' },
      ],
    })
      .put({ type: fetchSections.SAVE_EMAIL_SUCCEEDED })
      .run();
  });

  it('put a SAVE_EMAIL_FAILED action on error', () => {
    const error = 'save email failed';
    saveSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(saveContentSections, {
      emailId: '100',
      email: [
        { id: 1, text: 'hello' },
        { id: 2, text: 'world!' },
      ],
    })
      .put({ type: fetchSections.SAVE_EMAIL_FAILED, error })
      .run();
  });

  it('put a GET_EMAIL_SUCCEEDED action when succeeded', () => {
    const section = {
      id: 1,
      emailId: '100',
      email: [
        { id: 1, text: 'hello' },
        { id: 2, text: 'world!' },
      ],
    };
    const { email } = getSections.mockReturnValueOnce(
      Promise.resolve({ section })
    );

    return expectSaga(fetchContentSections, { emailId: '100' })
      .put({ type: fetchSections.FETCH_EMAIL_SUCCEEDED, email })
      .run();
  });

  it('put a FETCH_EMAIL_FAILED action on error', () => {
    const error = 'get text failed';
    getSections.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchContentSections, { emailId: '100' })
      .put({ type: fetchSections.FETCH_EMAIL_FAILED, error })
      .run();
  });
});
