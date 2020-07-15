import reducer from "./reducer.js";
import ActionType from "./action-type";
import mockProps from "../mocks/mock-for-test";

describe(`Reducer`, () => {
  it(`Return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentCity: ``
    });
  });

  it(`Return current city`, () => {
    expect(reducer({
      currentCity: ``
    }, {
      type: ActionType.SET_CURRENT_CITY,
      payload: mockProps.currentCity,
    })).toEqual({
      currentCity: mockProps.currentCity,
    });
  });
});
