import ActionType from "./action-type";

export default {
  setCurrentCity: (payload) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload
  })
};
