import {
  addSectionCreator,
  fetchSectionsCreator,
  fetchSectionsSuccessCreator,
  fetchSectionsFailureCreator,
} from './contentsActions';

import { fetchSections } from './types';

describe('contents action tests', () => {
  it('add Text', () => {
    const section = 'type input';
    const expected = {
      type: fetchSections.ADD_DROP_SECTION,
      section,
    };

    const actual = addSectionCreator(section);
    expect(actual).toEqual(expected);
  });

  it('send fetch text request', () => {
    const emailId = '100';
    const expected = {
      type: fetchSections.FETCH_EMAIL_SUCCEEDED,
      emailId,
    };

    const actual = fetchSectionsCreator(emailId);
    expect(actual).toEqual(expected);
  });

  it('fetch text and return text', () => {
    const text = 'verify fetch text succeeded';

    const expected = {
      type: fetchSections.FETCH_EMAIL_SUCCEEDED,
      text,
    };

    const actual = fetchSectionsSuccessCreator(text);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch text failed', () => {
    const error = 'fetch text failed';

    const expected = {
      type: fetchSections.FETCH_EMAIL_FAILED,
      error,
    };

    const actual = fetchSectionsFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
