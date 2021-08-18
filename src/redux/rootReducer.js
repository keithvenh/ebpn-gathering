import {combineReducers} from 'redux';
import navReducer from './reducers/navReducer';
import hubReducer from './reducers/hubReducer';

export default combineReducers(
    {
        view: navReducer,
        hub: hubReducer
    }
);