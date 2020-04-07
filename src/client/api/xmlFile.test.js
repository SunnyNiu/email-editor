import fetch from 'isomorphic-fetch';
import { getSections } from './xmlFile';

jest.mock('isomorphic-fetch');

describe('get files paths', () => {
  it('GET /files/paths', () => {
    fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ paths: ['xml1', 'xml2'] }),
      })
    );
    const expected = { paths: ['xml1', 'xml2'] };
    return getSections().then(json => {
      expect(json).toEqual(expected);
    });
  });

  it('GET /files/paths fail', () => {
    fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: false,
        status: 504,
        text: () => Promise.resolve('error'),
      })
    );
    const expected = new Error(`Code: 504 Body: error`);
    return getSections().catch(e => {
      expect(e).toEqual(expected);
    });
  });
});
