import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => f => f)

export default function configureStore(initialState = {}) {
  const middlewares = [thunk]
  const enhancers = [applyMiddleware(...middlewares), devtools()]
  const store = createStore(rootReducer, initialState, compose(...enhancers))
  return store
}
