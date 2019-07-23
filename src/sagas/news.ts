import { all, call, fork, take, put, select } from 'redux-saga/effects'
import { REQUEST_TOP_STORIES, requestTopStories, successTopStories } from '../ducks/news'

function* watchRequestTopStories() {
  while (true) {
    const action: ReturnType<typeof requestTopStories> = yield take(REQUEST_TOP_STORIES)
    yield put(successTopStories())
  }
}

export default function* root() {
  yield all([
    fork(watchRequestTopStories)
  ])
}
