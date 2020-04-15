import {
  addSectionCreator,
  fetchEmailCreator,
  fetchEmailSuccessCreator,
  fetchEmailFailureCreator,
} from './contentsActions';

import { fetchEmail } from './types';

describe('contents action tests', () => {
  it('add section', () => {
    const section = [{ id: 1, image: 'xx.jpg' }];
    const expected = {
      type: fetchEmail.ADD_SECTION,
      section,
    };

    const actual = addSectionCreator(section);
    expect(actual).toEqual(expected);
  });

  it('send fetch sections request', () => {
    const emailId = '100';
    const expected = {
      type: fetchEmail.FETCH_EMAIL_REQUESTED,
      emailId,
    };

    const actual = fetchEmailCreator(emailId);
    expect(actual).toEqual(expected);
  });

  it('fetch email content and return email', () => {
    const email = [{ id: 1, image: 'xx.jpg' }];

    const expected = {
      type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
      email,
    };

    const actual = fetchEmailSuccessCreator(email);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch email failed', () => {
    const error = 'fetch email failed';

    const expected = {
      type: fetchEmail.FETCH_EMAIL_FAILED,
      error,
    };

    const actual = fetchEmailFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
