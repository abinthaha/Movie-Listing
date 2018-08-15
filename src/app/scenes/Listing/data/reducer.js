import { handle } from 'redux-pack';
import { LOAD_LIST } from './constants';

const initialState = {
}

const listingReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
    	case LOAD_LIST: {
    		return {
                ...state,
                isLoading: false,
                data: action.data
            }
    	}            
        
        default:
            return state;
    }
}

export default listingReducer;