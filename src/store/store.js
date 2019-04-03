import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = process.env.NODE_ENV === 'develop'
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: null || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
