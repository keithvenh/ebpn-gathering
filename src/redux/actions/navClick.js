import { NAV_CLICK } from "../actionTypes"

const navClick = (view) => {
    console.log("In navClick");
    console.log(view);
    return {
        type: NAV_CLICK,
        view: view
    }    
}

export default navClick;