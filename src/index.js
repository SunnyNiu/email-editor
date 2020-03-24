import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from 'reducers';
import App from 'components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

// Hot reloading setup for render/reducer/saga
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('components/App', () => {
      render(App);
    });

    module.hot.accept('reducers', () => {
      // eslint-disable-next-line global-require
      const { rootReducer: newReducer } = require('reducers');
      store.replaceReducer(newReducer);
    });
  }
}
