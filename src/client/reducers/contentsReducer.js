import { fetchEmail } from './types';

const initialState = {
  email: [],
  selectedId: '',
};

function updateWidget(widget, widgetId, value) {
  if (widget.id === widgetId) {
    if (widget.type === 'text') {
      return { ...widget, text: value, children: [], type: widget.type };
    }
    return { ...widget, src: value, children: [], type: widget.type };
  }
  return widget;
}

function updateColumn(column, widgetId, value) {
  return {
    ...column,
    children: column.children.map(widget =>
      updateWidget(widget, widgetId, value)
    ),
    type: column.type,
  };
}

function updateRow(row, widgetId, value) {
  return {
    ...row,
    children: row.children.map(column => updateColumn(column, widgetId, value)),
    type: row.type,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.ADD_SECTION: {
      return {
        ...state,
        email: [...state.email, action.sectionWithWidgetMap],
      };
    }
    case fetchEmail.FETCH_EMAIL_SUCCEEDED:
      return {
        ...state,
        email: action.email !== undefined ? action.email : [],
      };
    case fetchEmail.FETCH_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case fetchEmail.SAVE_EMAIL_REQUESTED:
      return {
        ...state,
        email: action.email,
      };
    case fetchEmail.SAVE_EMAIL_SUCCEEDED:
      return state;
    case fetchEmail.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case 'SELECT_WIDGET':
      return {
        ...state,
        selectedId: action.widgetId,
      };
    case 'UPDATE_WIDGET': {
      const { widgetId, value } = action;
      const newEmail = state.email.map(section => ({
        ...section,
        children: section.children.map(row => updateRow(row, widgetId, value)),
        type: section.type,
      }));
      return {
        ...state,
        email: newEmail,
        selectedId: widgetId,
      };
    }
    default:
      return state;
  }
};
