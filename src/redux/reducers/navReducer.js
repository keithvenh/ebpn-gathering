import {NAV_CLICK} from '../actionTypes.js';

const navReducer = (state='loading', action) => {

    switch(action.type) {
        case NAV_CLICK:
            return action.view;
        default:
            return state;
    }
}

export default navReducer;