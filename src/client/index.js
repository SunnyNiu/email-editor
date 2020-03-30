import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HashRouter } from 'react-router-dom';
import { rootReducer } from './reducers';
import App from './components/App';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(() => {}, undefined, composeWithDevTools(middleware));

store.replaceReducer(rootReducer);
sagaMiddleware.run(rootSaga);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

// Hot reloading setup for render/reducer/saga
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('client/components/App', () => {
      render(App);
    });

    module.hot.accept('client/reducers', () => {
      // eslint-disable-next-line global-require
      const { rootReducer: newReducer } = require('client/reducers');
      store.replaceReducer(newReducer);
    });
  }
}
