import { all, fork } from 'redux-saga/effects'

import news from './news'

export default function* root() {
  yield all([
    fork(news)
  ])
}
