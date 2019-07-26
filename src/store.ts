import { createStore, applyMiddleware, Middleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/_root'
import rootSaga from './sagas/_root'
import { NewsState } from './ducks/news'

export interface Store {
  news: NewsState
}

const configureStore = () => {
  let middlewares: Middleware[] = []

  const saga = createSagaMiddleware()

  if (process.env.NODE_ENV === 'development') {
    middlewares = [saga, logger]
  } else {
    middlewares = [saga]
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  saga.run(rootSaga)
  return store
}

export default configureStore()
