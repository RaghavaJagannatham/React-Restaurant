import { createStore,applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducer'

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;