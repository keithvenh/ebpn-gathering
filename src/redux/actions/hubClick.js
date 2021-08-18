import { HUB_CLICK } from "../actionTypes"

const navClick = (hub) => {
    console.log("In hubClick");
    console.log(hub);
    return {
        type: HUB_CLICK,
        hub: hub
    }    
}

export default navClick;