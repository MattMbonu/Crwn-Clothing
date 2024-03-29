import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  currentUser: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
}
