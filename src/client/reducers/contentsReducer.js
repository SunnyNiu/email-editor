import produce from 'immer';
import { fetchEmail } from './types';

const initialState = {
  email: {
    children: [],
    widgetMap: {},
    selectedId: '',
  },
};

function getWidget(root, widgetMap) {
  if (root.children === undefined) return;
  let s = '';
  if (root.type === undefined) {
    s += `<!DOCTYPE html>
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <title>Email Editor</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <meta name="viewport" content="width=500, initial-scale=1">
      <style>
          * {
              font-family: 'Quicksand', sans-serif;
          }
      </style>
    </head>
    <body> `;
  } else if (
    root.type === 'section' ||
    root.type === 'row' ||
    root.type === 'column'
  ) {
    s += `<div id='${root.id}' class='${root.type}'>`;
  } else if (root.type === 'image') {
    s += `<img src='${root.src}' id='${root.id}' class='${root.type}' />`;
  } else if (root.type === 'text') {
    s += `<p id='${root.id}' class='${root.type}'> ${root.text} </p>`;
  }

  for (let i = 0; i < root.children.length; i++) {
    s += getWidget(widgetMap[root.children[i]], widgetMap);
  }

  if (root.type === undefined) {
    s += ` </body>
    </html>`;
  } else if (
    root.type === 'section' ||
    root.type === 'row' ||
    root.type === 'column'
  ) {
    s += `</div>`;
  }
  return s;
}

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
    case 'JSON_TO_XML': {
      const { email } = action;
      const sections = getWidget(email, email.widgetMap);
      console.log(sections);
      return state;
    }
    default:
      return state;
  }
};
