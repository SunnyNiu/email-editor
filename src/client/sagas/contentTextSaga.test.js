import { expectSaga } from 'redux-saga-test-plan';
import { fetchContentText, saveContentText } from './contentTextSaga';
import { saveText, getText } from '../api/contentText';
import { fetchText } from '../reducers/types';

jest.mock('../api/contentText');

describe('contentTextSaga', () => {
  it('put a SAVE_TEXT_SUCCEEDED action when succeeded', () => {
    saveText.mockReturnValueOnce(Promise.resolve());
    return expectSaga(saveContentText, { userId: '100' }, { text: 'save text' })
      .put({ type: fetchText.SAVE_TEXT_SUCCEEDED })
      .run();
  });

  it('put a SAVE_TEXT_FAILED action on error', () => {
    const error = 'save text failed';
    saveText.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(saveContentText, { userId: '100' }, { text: 'save text' })
      .put({ type: fetchText.SAVE_TEXT_FAILED, error })
      .run();
  });

  it('put a GET_TEXT_SUCCEEDED action when succeeded', () => {
    const text = { id: 1, userId: '100', text: 'text 100' };
    getText.mockImplementationOnce(() => Promise.resolve({ text }));

    return expectSaga(fetchContentText, { userId: '100' })
      .put({ type: fetchText.FETCH_TEXT_SUCCEEDED, text })
      .run();
  });

  it('put a FETCH_TEXT_FAILED action on error', () => {
    const error = 'get text failed';
    getText.mockReturnValueOnce(Promise.reject(error));

    return expectSaga(fetchContentText, { userId: '100' })
      .put({ type: fetchText.FETCH_TEXT_FAILED, error })
      .run();
  });
});
