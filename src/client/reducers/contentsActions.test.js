import {
  addTextCreator,
  fetchTextCreator,
  fetchTextSuccessCreator,
  fetchTextFailureCreator,
} from './contentsActions';

import { fetchText } from './types';

describe('contents action tests', () => {
  it('add Text', () => {
    const input = 'type input';
    const expected = {
      type: fetchText.ADD_TEXT,
      input,
    };

    const actual = addTextCreator(input);
    expect(actual).toEqual(expected);
  });

  it('send fetch text request', () => {
    const userId = '100';
    const expected = {
      type: fetchText.FETCH_TEXT_REQUESTED,
      userId,
    };

    const actual = fetchTextCreator(userId);
    expect(actual).toEqual(expected);
  });

  it('fetch text and return text', () => {
    const text = 'verify fetch text succeeded';

    const expected = {
      type: fetchText.FETCH_TEXT_SUCCEEDED,
      text,
    };

    const actual = fetchTextSuccessCreator(text);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch text failed', () => {
    const error = 'fetch text failed';

    const expected = {
      type: fetchText.FETCH_TEXT_FAILED,
      error,
    };

    const actual = fetchTextFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
