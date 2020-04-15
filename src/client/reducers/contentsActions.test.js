import {
  addSectionCreator,
  fetchSectionsCreator,
  fetchSectionsSuccessCreator,
  fetchSectionsFailureCreator,
} from './contentsActions';

import { fetchSections } from './types';

describe('contents action tests', () => {
  it('add section', () => {
    const section = [{ id: 1, image: 'xx.jpg' }];
    const expected = {
      type: fetchSections.ADD_DROP_SECTION,
      section,
    };

    const actual = addSectionCreator(section);
    expect(actual).toEqual(expected);
  });

  it('send fetch sections request', () => {
    const emailId = '100';
    const expected = {
      type: fetchSections.FETCH_EMAIL_REQUESTED,
      emailId,
    };

    const actual = fetchSectionsCreator(emailId);
    expect(actual).toEqual(expected);
  });

  it('fetch email content and return email', () => {
    const email = [{ id: 1, image: 'xx.jpg' }];

    const expected = {
      type: fetchSections.FETCH_EMAIL_SUCCEEDED,
      email,
    };

    const actual = fetchSectionsSuccessCreator(email);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch email failed', () => {
    const error = 'fetch email failed';

    const expected = {
      type: fetchSections.FETCH_EMAIL_FAILED,
      error,
    };

    const actual = fetchSectionsFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
