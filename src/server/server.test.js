import request from 'supertest';
import server from './server';

jest.mock('./util', () => ({
  readdir: (path, callback) => callback(undefined, ['xml1', 'xml2']),
}));

describe('get files paths', () => {
  it('GET /files/paths', () => {
    const expected = '{"paths":["./src/xml/xml1","./src/xml/xml2"]}';
    return request(server)
      .get('/api/files/paths')
      .then(res => {
        // console.log(res);
        expect(res.text).toEqual(expected);
      });
  });
});
