import request from 'supertest';
import server from '../src/server/server';

describe('get files paths', () => {
  it('GET /files/paths', () => {
    const expected =
      '{"paths":["./src/xml/breakfast.xml","./src/xml/dinner.xml","./src/xml/lunch.xml"]}';
    return request(server)
      .get('/api/files/paths')
      .then(res => {
        expect(res.text).toEqual(expected);
      });
  });
});
