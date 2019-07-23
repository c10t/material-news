import { Reducer } from 'redux'

export interface NewsState {
  stories: string[]
}

export const initialState: NewsState = {
  stories: []
}

export const REQUEST_TOP_STORIES = 'REQUEST_TOP_STORIES'
export const SUCCESS_TOP_STORIES = 'REQUEST_TOP_STORIES'
export const FAILURE_TOP_STORIES = 'REQUEST_TOP_STORIES'

export const requestTopStories = () => ({
  type: REQUEST_TOP_STORIES as typeof REQUEST_TOP_STORIES,
  payload: {}
})

export const successTopStories = () => ({
  type: REQUEST_TOP_STORIES as typeof REQUEST_TOP_STORIES,
  payload: {}
})

export const failureTopStories = () => ({
  type: REQUEST_TOP_STORIES as typeof REQUEST_TOP_STORIES,
  payload: {}
})

export type Action = ReturnType<
  typeof requestTopStories |
  typeof successTopStories |
  typeof failureTopStories>

const news: Reducer<NewsState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOP_STORIES:
      return state
    case SUCCESS_TOP_STORIES:
      return state
    case FAILURE_TOP_STORIES:
      return state
    default:
      return state
  }
}

export default news
