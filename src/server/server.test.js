import request from 'supertest';
import server from './server';
import { readdir } from './util';

jest.mock('./util');

jest.mock('./db/db', () => ({
  getContentText: () =>
    Promise.resolve({ id: 1, userId: '100', text: 'verify get text' }),
  saveContentText: () =>
    Promise.resolve({
      id: 1,
      userId: '100',
      text: 'verify save, and then get text',
    }),
}));

describe('get files paths', () => {
  it('GET /files/paths', () => {
    readdir.mockImplementation((path, callback) =>
      callback(undefined, ['xml1', 'xml2'])
    );
    const expected = '{"paths":["./src/xml/xml1","./src/xml/xml2"]}';
    return request(server)
      .get('/api/files/paths')
      .then(res => {
        expect(res.text).toEqual(expected);
      });
  });

  it('GET /email/:userId', () => {
    const expected = { id: 1, userId: '100', text: 'verify get text' };
    return request(server)
      .get('/api/email/100')
      .then(res => {
        expect(JSON.parse(res.text)).toEqual(expected);
      });
  });

  it('put /email/:userId', () => {
    const expected = {
      id: 1,
      userId: '100',
      text: 'verify save, and then get text',
    };
    return request(server)
      .put('/api/email/100')
      .then(res => {
        expect(JSON.parse(res.text)).toEqual(expected);
      });
  });
});
