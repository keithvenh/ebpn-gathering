import { HUB_CLICK } from "../actionTypes"

const hubClick = (hub) => {
    return {
        type: HUB_CLICK,
        hub: hub
    }    
}

export default hubClick;