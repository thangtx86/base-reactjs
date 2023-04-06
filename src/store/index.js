import ReduxThunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { loggerMiddleware } from '../middlewares';

const middlewares = [ReduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
}
console.log(process.env.NODE_ENV);

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
