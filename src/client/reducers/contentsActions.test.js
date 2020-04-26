import {
  addSectionCreator,
  fetchEmailCreator,
  fetchEmailSuccessCreator,
  fetchEmailFailureCreator,
  editSelectedIdCreator,
  updateWidgetValueCreator,
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
  it('add section, verify section content is correct which widgetMap contains widgetId and its widget', () => {
    const section = {
      name: '32',
      icon: 'icon_1',
      children: [
        {
          width: '4',
          children: [
            {
              width: '36',
              children: [
                { type: 'text', text: 'button', children: [] },
                { type: 'image', src: './abc.png', children: [] },
              ],
            },
          ],
        },
      ],
    };

    const action = addSectionCreator(section);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(action.section.widgetMap)) {
      expect(key).toEqual(value.id);
      expect(typeof value.id).toEqual('string');
    }
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

  it('return selected edited widgetId', () => {
    const widgetId = '12345';

    const expected = {
      type: 'SELECT_WIDGET',
      widgetId,
    };

    const actual = editSelectedIdCreator(widgetId);
    expect(actual).toEqual(expected);
  });

  it('return updated widget value', () => {
    const widgetId = '12345';
    const value = 'test text';

    const expected = {
      type: 'UPDATE_WIDGET',
      widgetId,
      value,
    };

    const actual = updateWidgetValueCreator(widgetId, value);
    expect(actual).toEqual(expected);
  });
});
