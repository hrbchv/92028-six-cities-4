import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import mockProps from "../../mocks/mock-for-test";
jest.mock(`../map/map.jsx`, () => `Map`);

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      variantsOfRent={mockProps.variantsOfRent}
      currentCity={mockProps.currentCity}
      onCityNameClick={mockProps.jestFn}/>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
