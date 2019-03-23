import {GET_ITEMS} from '../actions/constants'

const itemReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_ITEMS:
        return payload
      default:
        return state
    }
}

export default itemReducer;
