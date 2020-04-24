import { v4 as uuidv4 } from 'uuid';
import { fetchEmail } from './types';

function addIdToWidget(widget) {
  return {
    ...widget,
    id: uuidv4(),
  };
}

function addIdToColumn(column) {
  return {
    ...column,
    id: uuidv4(),
    widgets: column.widgets.map(widget => addIdToWidget(widget)),
  };
}

function addIdToRow(row) {
  return {
    ...row,
    id: uuidv4(),
    columns: row.columns.map(column => addIdToColumn(column)),
  };
}

export const addSectionCreator = section => ({
  type: fetchEmail.ADD_SECTION,
  section: {
    ...section,
    id: uuidv4(),
    rows: section.rows.map(row => addIdToRow(row)),
  },
});

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
