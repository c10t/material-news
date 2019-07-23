import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/_root'
import rootSaga from './sagas/_root'
import { NewsState } from './ducks/news'

export interface Store {
  news: NewsState
}

const configureStore = () => {
  const saga = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(saga, logger))
  saga.run(rootSaga)
  return store
}

export default configureStore()
