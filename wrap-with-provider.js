import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/store/configure-store'

export default ({ element }) => {
  const store = configureStore()
  return <Provider store={store}>{element}</Provider>
}
