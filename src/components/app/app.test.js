import renderer from "react-test-renderer";
import React from "react";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import mockProps from "../../mocks/mock-for-test";
import configureStore from "redux-mock-store";

jest.mock(`../map/map.jsx`, () => `Map`);

const mockStore = configureStore([]);

const store = mockStore({
  currentCity: mockProps.currentCity
});

it(`Render App`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App
        variantsOfRent={mockProps.variantsOfRent}
        setDefaultCity={mockProps.jestFn}/></Provider>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
