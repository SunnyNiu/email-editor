import axios from 'axios';
import { saveText, getText } from './contentText';

jest.mock('axios');

describe('get text', () => {
  it('GET /email/:userId', () => {
    const data = {
      id: 1,
      userId: '100',
      text: 'verify contentText',
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    expect(getText('100')).resolves.toEqual(data);
  });

  it('GET /email/:userId fail', () => {
    const errorMessage = 'fetch userId error';
    axios.get.mockImplementationOnce(() => Promise.resolve(errorMessage));

    expect(getText('100')).resolves.toEqual(errorMessage);
  });

  it('PUT /email/:userId', () => {
    const data = {
      id: 1,
      userId: '100',
      text: 'verify contentText',
    };
    axios.put.mockImplementationOnce(() => Promise.resolve(data));

    expect(saveText('100')).resolves.toEqual(data);
  });

  it('PUT /email/:userId fail', () => {
    const errorMessage = 'save text error';
    axios.put.mockImplementationOnce(() => Promise.resolve(errorMessage));

    expect(saveText('100')).resolves.toEqual(errorMessage);
  });
});
