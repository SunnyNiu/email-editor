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
  it('add section', () => {
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
    const expected = {
      type: fetchEmail.ADD_SECTION,
      section,
    };

    const actual = addSectionCreator(section);
    expect(actual.section.id).toBeTruthy();
    // verify each row contain id
    actual.section.rows.forEach(row => expect(row.id).toBeTruthy());
    actual.section.rows.forEach(row =>
      row.columns.forEach(column => expect(column.id).toBeTruthy())
    );
    actual.section.rows.forEach(row =>
      row.columns.forEach(column =>
        column.widgets.map(widget => expect(widget.id).toBeTruthy())
      )
    );

    const actualWithoutId = {
      type: actual.type,
      section: {
        name: actual.section.name,
        icon: actual.section.icon,
        rows: removeIdFromRow(actual.section.rows),
      },
    };
    expect(actualWithoutId).toEqual(expected);
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
