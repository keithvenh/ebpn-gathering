import {HUB_CLICK} from '../actionTypes.js';

const hubReducer = (state='all', action) => {

    console.log("In Hub Reducer");

    switch(action.type) {
        case HUB_CLICK:
            console.log("HUB_CLICK = true");
            console.log(action.hub);
            return action.hub
        default:
            return state;
    }
}

export default hubReducer;