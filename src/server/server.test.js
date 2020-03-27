import request from 'supertest';
import server from './server';
import { readdir } from './util';

jest.mock('./util');

describe('get files paths', () => {
  it('GET /files/paths', () => {
    readdir.mockImplementation((path, callback) =>
      callback(undefined, ['xml1', 'xml2'])
    );
    const expected = '{"paths":["./src/xml/xml1","./src/xml/xml2"]}';
    return request(server)
      .get('/api/files/paths')
      .then(res => {
        // console.log(res);
        expect(res.text).toEqual(expected);
      });
  });
});
