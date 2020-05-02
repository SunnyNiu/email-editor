import produce from 'immer';
import { fetchEmail } from './types';

const initialState = {
  email: {
    children: [],
    widgetMap: {},
    selectedId: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchEmail.ADD_SECTION: {
      return produce(state, draftState => {
        draftState.email.children.splice(action.index, 0, action.section.id);
        Object.entries(action.section.widgetMap).forEach(([key, value]) => {
          // eslint-disable-next-line no-param-reassign
          draftState.email.widgetMap[key] = value;
        });
      });
    }
    case fetchEmail.FETCH_EMAIL_SUCCEEDED:
      return produce(state, draftState => {
        if (action.email) {
          // eslint-disable-next-line no-param-reassign
          draftState.email = action.email;
        }
      });

    case fetchEmail.FETCH_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case fetchEmail.SAVE_EMAIL_REQUESTED:
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.email = action.email;
      });
    case fetchEmail.SAVE_EMAIL_SUCCEEDED:
      return state;
    case fetchEmail.SAVE_EMAIL_FAILED:
      // eslint-disable-next-line no-console
      console.error(action.error);
      return state;
    case 'SELECT_WIDGET':
      return produce(state, draftState => {
        // eslint-disable-next-line no-param-reassign
        draftState.selectedId = action.widgetId;
      });
    case 'UPDATE_WIDGET': {
      return produce(state, draftState => {
        const { widgetId, value } = action;
        const widget = draftState.email.widgetMap[widgetId];
        if (widget) {
          // eslint-disable-next-line no-param-reassign
          if (widget.type === 'text') {
            widget.text = value;
          } else {
            widget.src = value;
          }
        }
      });
    }
    default:
      return state;
  }
};
