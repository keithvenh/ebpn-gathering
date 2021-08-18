import {NAV_CLICK} from '../actionTypes.js';

const navReducer = (state='loading', action) => {

    console.log("In Nav Reducer");

    switch(action.type) {
        case NAV_CLICK:
            console.log("NAV_CLICK = true");
            console.log(action.view);
            return action.view
        default:
            return state;
    }
}

export default navReducer;