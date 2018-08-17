import { handle } from 'redux-pack';
import {
    LOAD_LIST_FINISHED, LOAD_LIST_STARTED, LOAD_LIST_ERROR
} from './constants';

const initialState = {
    isLoading: false,
}

const listingReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case LOAD_LIST_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOAD_LIST_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.err
            }
        }
        
        case LOAD_LIST_FINISHED: {
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        }
        
        default:
            return state;
    }
}

export default listingReducer;