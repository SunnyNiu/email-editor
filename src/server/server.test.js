import request from 'supertest';
import server from './server';
import { readdir } from './util';
import { getContentText, saveContentText } from './db/db';

jest.mock('./util');
jest.mock('./db/db');

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
    const data = { id: 1, userId: '100', text: 'verify get text' };
    getContentText.mockReturnValueOnce(Promise.resolve(data));
    const expected = data;
    return request(server)
      .get('/api/email/100')
      .then(res => {
        expect(JSON.parse(res.text)).toEqual(expected);
      });
  });

  it('put /email/:userId', () => {
    const data = {
      id: 1,
      userId: '100',
      text: 'verify save, and then get text',
    };
    saveContentText.mockReturnValueOnce(Promise.resolve(data));

    const expected = data;
    return request(server)
      .put('/api/email/100')
      .then(res => {
        expect(JSON.parse(res.text)).toEqual(expected);
      });
  });
});
