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
  // it('POST /email/:userId fail', () => {
  //   axios.mockReturnValueOnce(
  //     Promise.resolve({
  //       ok: false,
  //       status: 504,
  //       text: () => Promise.resolve('error'),
  //     })
  //   );
  //   const expected = new Error(`Code: 504 Body: error`);
  //   return saveText().catch(e => {
  //     expect(e).toEqual(expected);
  //   });
  // });
});
