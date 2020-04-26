import { v4 as uuidv4 } from 'uuid';
import { fetchEmail } from './types';

function addIdToWidget(widget) {
  return {
    ...widget,
    id: uuidv4(),
    children: [],
    type: widget.type,
  };
}

function addIdToColumn(column) {
  return {
    ...column,
    id: uuidv4(),
    children: column.children.map(widget => addIdToWidget(widget)),
    type: column.type,
  };
}

function addIdToRow(row) {
  return {
    ...row,
    id: uuidv4(),
    children: row.children.map(column => addIdToColumn(column)),
    type: row.type,
  };
}

export const addSectionCreator = section => {
  const sectionWithIds = {
    ...section,
    id: uuidv4(),
    children: section.children.map(row => addIdToRow(row)),
    type: section.type,
  };

  const widgetMap = {};
  const rowIds = [];

  function f(root) {
    widgetMap[root.id] = root;
    root.children.forEach(x => f(x));
  }

  f(sectionWithIds);

  // eslint-disable-next-line no-restricted-syntax
  for (const [, value] of Object.entries(widgetMap)) {
    value.children = value.children.map(x => x.id);
  }

  const sectionWithWidgetMap = {
    ...section,
    children: rowIds,
    widgetMap,
  };

  return {
    type: fetchEmail.ADD_SECTION,
    section: sectionWithWidgetMap,
  };
};

export const fetchEmailCreator = emailId => ({
  type: fetchEmail.FETCH_EMAIL_REQUESTED,
  emailId,
});

export const fetchEmailSuccessCreator = email => ({
  type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
  email,
});

export const fetchEmailFailureCreator = error => ({
  type: fetchEmail.FETCH_EMAIL_FAILED,
  error,
});

export const saveEmailCreator = (emailId, email) => ({
  type: fetchEmail.SAVE_EMAIL_REQUESTED,
  emailId,
  email,
});

export const saveEmailSuccessCreator = () => ({
  type: fetchEmail.SAVE_EMAIL_SUCCEEDED,
});

export const saveEmailFailureCreator = error => ({
  type: fetchEmail.SAVE_EMAIL_FAILED,
  error,
});

export const editSelectedIdCreator = widgetId => ({
  type: 'SELECT_WIDGET',
  widgetId,
});

export const updateWidgetValueCreator = (widgetId, value) => ({
  type: 'UPDATE_WIDGET',
  widgetId,
  value,
});
