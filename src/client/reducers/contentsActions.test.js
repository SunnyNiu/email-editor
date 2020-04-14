import {
  addSectionCreator,
  fetchSectionsCreator,
  fetchSectionsSuccessCreator,
  fetchSectionsFailureCreator,
} from './contentsActions';

import { fetchSections } from './types';

describe('contents action tests', () => {
  it('add Text', () => {
    const input = 'type input';
    const expected = {
      type: fetchSections.ADD_TEXT,
      input,
    };

    const actual = addSectionCreator(input);
    expect(actual).toEqual(expected);
  });

  it('send fetch text request', () => {
    const emailId = '100';
    const expected = {
      type: fetchSections.FETCH_TEXT_REQUESTED,
      emailId,
    };

    const actual = fetchSectionsCreator(emailId);
    expect(actual).toEqual(expected);
  });

  it('fetch text and return text', () => {
    const text = 'verify fetch text succeeded';

    const expected = {
      type: fetchSections.FETCH_TEXT_SUCCEEDED,
      text,
    };

    const actual = fetchSectionsSuccessCreator(text);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch text failed', () => {
    const error = 'fetch text failed';

    const expected = {
      type: fetchSections.FETCH_TEXT_FAILED,
      error,
    };

    const actual = fetchSectionsFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
