import { fetchEmail } from './types';

const initialState = {
  email: {
    children: [],
    selectedId: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.ADD_SECTION: {
      return {
        ...state,
        email: {
          ...state.email,
          children: [...state.email.children, action.section.id],
          widgetMap: {
            ...state.email.widgetMap,
            ...action.section.widgetMap,
          },
        },
      };
    }
    case fetchEmail.FETCH_EMAIL_SUCCEEDED:
      return {
        ...state,
        email: action.email !== undefined ? action.email : {},
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

      const widget = state.email.widgetMap[widgetId];

      if (widget) {
        let newWidget;
        // eslint-disable-next-line no-param-reassign
        if (widget.type === 'text') {
          newWidget = { ...widget, text: value };
        } else {
          newWidget = { ...widget, src: value };
        }
        // eslint-disable-next-line no-param-reassign
        state.email.widgetMap[widgetId] = newWidget;
      }

      return {
        ...state,
        email: {
          children: [...state.email.children],
          widgetMap: { ...state.email.widgetMap },
        },
      };
    }
    default:
      return state;
  }
};
