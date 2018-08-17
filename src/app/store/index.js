import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import listingReducer from '../scenes/Listing/data/reducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    listingReducer,
})

// const store = createStore (rootReducer);

const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

export default store