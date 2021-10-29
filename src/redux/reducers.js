import { combineReducers } from 'redux'

const user = (state = "", action) => {
    switch (action.type) {
      case "SET_USER":
        console.log("reducer:", action.value);
        return action.value;
      default:
        return state;
    }
  };

// add switch statements in here
const listings = (state = [], action) => {
    switch (action.type) {
        case "ADD_LISTING":
            return ([...state, action.value])
        case "REMOVE_LISTING":
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({ user, listings })