import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index'

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares);

export default createStoreWithMiddleware(rootReducer);