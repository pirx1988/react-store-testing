import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import thunk from 'redux-thunk';

export const middlewares = [thunk]

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer);