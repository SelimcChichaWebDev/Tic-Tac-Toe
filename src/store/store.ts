import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { reducerApp } from './reducers/reducerApp'

export const store = createStore(reducerApp, composeWithDevTools())
