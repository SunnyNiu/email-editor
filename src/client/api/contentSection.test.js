import axios from 'axios';
import { saveSections, getSections } from './contentSection';

jest.mock('axios');

describe('get text', () => {
  it('GET /email/:emailId', () => {
    const data = {
      id: 1,
      emailId: '100',
      text: 'verify contentText',
    };
    axios.get.mockReturnValueOnce(Promise.resolve(data));

    expect(getSections('100')).resolves.toEqual(data);
  });

  it('GET /email/:emailId fail', () => {
    const errorMessage = 'fetch emailId error';
    axios.get.mockReturnValueOnce(Promise.reject(errorMessage));

    expect(getSections('100')).rejects.toEqual(errorMessage);
  });

  it('PUT /email/:emailId', () => {
    const data = {
      id: 1,
      emailId: '100',
      text: 'verify contentText',
    };
    axios.put.mockReturnValueOnce(Promise.resolve(data));

    expect(saveSections('100')).resolves.toEqual(data);
  });

  it('PUT /email/:emailId fail', () => {
    const errorMessage = 'save text error';
    axios.put.mockReturnValueOnce(Promise.reject(errorMessage));

    expect(saveSections('100')).rejects.toEqual(errorMessage);
  });
});
