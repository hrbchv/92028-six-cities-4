import ActionType from "./action-type";
import extend from "../utils/extend";

const initialState = {
  currentCity: ``,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        currentCity: payload
      });
    default:
      return state;
  }
};
