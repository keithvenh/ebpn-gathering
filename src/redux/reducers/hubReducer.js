import {HUB_CLICK} from '../actionTypes.js';

const hubReducer = (state='all', action) => {

    switch(action.type) {
        case HUB_CLICK:
            return action.hub
        default:
            return state;
    }
}

export default hubReducer;