import request from 'supertest';
import server from './server';
import { readdir, readFile } from './util';
import { getContentSections, saveContentSections } from './db/db';

jest.mock('./util');
jest.mock('./db/db');

describe('get sections', () => {
  it('GET /sections', () => {
    readFile.mockReturnValueOnce(
      Promise.resolve({
        './xml/s.xml': '{"id":"section_2","icon":"section_2_image.jpg"}',
      })
    );
    readdir.mockImplementation((path, callback) =>
      callback(undefined, ['./xml/s.xml'])
    );

    const expected = {
      './xml/s.xml': '{"id":"section_2","icon":"section_2_image.jpg"}',
    };
    return request(server)
      .get('/api/sections')
      .then(res => {
        expect(res.body).toEqual(expected);
      });
  });

  it('GET /email/:emailId', () => {
    const data = { id: 1, emailId: '100', text: 'verify get text' };
    getContentSections.mockReturnValueOnce(Promise.resolve(data));
    const expected = data;
    return request(server)
      .get('/api/email/100')
      .then(res => {
        expect(res.body).toEqual(expected);
      });
  });

  it('put /email/:emailId', () => {
    const data = {
      id: 1,
      emailId: '100',
      text: 'verify save, and then get text',
    };
    saveContentSections.mockReturnValueOnce(Promise.resolve(data));

    const expected = data;
    return request(server)
      .put('/api/email/100')
      .then(res => {
        expect(res.body).toEqual(expected);
      });
  });
});

/*
  //Async tests examples
  function asyncF() {
    return new Promise(resolve => {
      setTimeout(() => resolve(10), 1);
    });
  }

  it('test async function 1', () => {
    const expected = 10;
    return asyncF().then(v => {
      expect(v).toEqual(expected);
    });
  });

  it('test async function 2', done => {
    const expected = 10;
    asyncF().then(v => {
      expect(v).toEqual(expected);
      done();
    });
  });

  it('test async function 2', async () => {
    const expected = 10;
    const v = await asyncF();
    expect(v).toEqual(expected);
  });
*/
