import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

//A middleware can be used to do something between dispatching an action
//and the moment it reached the reducer.

//the logger middleware shows us console output for each action
const logger = createLogger();
const router = routerMiddleware(browserHistory);

//wire our store to the middleware we created
const createStoreWithMiddleware = applyMiddleware(router, logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}