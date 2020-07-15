import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import mockProps from "../../mocks/mock-for-test";
jest.mock(`../map/map.jsx`, () => `Map`);

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      variantsOfRent={mockProps.variantsOfRent}/>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
