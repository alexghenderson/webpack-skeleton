import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import createLogger from 'redux-logger'

import rootReducer from './Reducers/index'
import MainLayoutContainer from './Containers/MainLayoutContainer'
import Routes from './routes'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, createLogger()));

ReactDOM.render( (
    <Provider store={store}>
      <Router history={browserHistory}>
        {Routes}
      </Router>
    </Provider>
  ), document.querySelector("#main"));
