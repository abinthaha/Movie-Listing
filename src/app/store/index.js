import { createStore, combineReducers } from 'redux'
import listingReducer from '../scenes/Listing/data/reducer.js';

const rootReducer = combineReducers({
    listingReducer,
})

const store = createStore (rootReducer);

export default store