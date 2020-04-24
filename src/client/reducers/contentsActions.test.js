import {
  addSectionCreator,
  fetchEmailCreator,
  fetchEmailSuccessCreator,
  fetchEmailFailureCreator,
} from './contentsActions';

import { fetchEmail } from './types';

function removeIdFromWidgets(widgets) {
  widgets.forEach(widget => {
    // eslint-disable-next-line no-param-reassign
    delete widget.id;
  });
  return widgets;
}

function removeIdFromColumn(columns) {
  columns.forEach(column => {
    // eslint-disable-next-line no-param-reassign
    delete column.id;
    removeIdFromWidgets(column.widgets);
  });
  return columns;
}

function removeIdFromRow(rows) {
  rows.forEach(row => {
    // eslint-disable-next-line no-param-reassign
    delete row.id;
    removeIdFromColumn(row.columns);
  });

  return rows;
}

describe('contents action tests', () => {
  it('add section, verify add it to widget, column, row', () => {
    const section = {
      name: '32',
      icon: 'icon_1',
      rows: [
        {
          width: '4',
          columns: [
            {
              width: '36',
              widgets: [
                { type: 'text', text: 'button' },
                { type: 'image', src: './abc.png' },
              ],
            },
          ],
        },
      ],
    };

    const action = addSectionCreator(section);
    expect(action.section.id).toBeTruthy();
    // verify each row contain id
    action.section.rows.forEach(row => {
      expect(row.id).toBeTruthy();
      row.columns.forEach(column => {
        expect(column.id).toBeTruthy();
        column.widgets.map(widget => expect(widget.id).toBeTruthy());
      });
    });
  });

  it('add section, verify section content is correct', () => {
    const section = {
      name: '32',
      icon: 'icon_1',
      rows: [
        {
          width: '4',
          columns: [
            {
              width: '36',
              widgets: [
                { type: 'text', text: 'button' },
                { type: 'image', src: './abc.png' },
              ],
            },
          ],
        },
      ],
    };

    const action = addSectionCreator(section);
    expect(action.type).toEqual(fetchEmail.ADD_SECTION);
    expect({
      name: action.section.name,
      icon: action.section.icon,
      rows: removeIdFromRow(action.section.rows),
    }).toEqual(section);
  });

  it('send fetch sections request', () => {
    const emailId = '100';
    const expected = {
      type: fetchEmail.FETCH_EMAIL_REQUESTED,
      emailId,
    };

    const actual = fetchEmailCreator(emailId);
    expect(actual).toEqual(expected);
  });

  it('fetch email content and return email', () => {
    const email = [{ id: 1, image: 'xx.jpg' }];

    const expected = {
      type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
      email,
    };

    const actual = fetchEmailSuccessCreator(email);
    expect(actual).toEqual(expected);
  });

  it('return error when fetch email failed', () => {
    const error = 'fetch email failed';

    const expected = {
      type: fetchEmail.FETCH_EMAIL_FAILED,
      error,
    };

    const actual = fetchEmailFailureCreator(error);
    expect(actual).toEqual(expected);
  });
});
