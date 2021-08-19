import { NAV_CLICK } from "../actionTypes"

const navClick = (view) => {
    return {
        type: NAV_CLICK,
        view: view,
        hub: 'all'
    }    
}

export default navClick;