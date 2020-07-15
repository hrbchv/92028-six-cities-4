import React from "react";
import renderer from "react-test-renderer";
import mockProps from "../../mocks/mock-for-test";
import CardsList from "./cards-list.jsx";

it(`Render Main`, () => {
  const tree = renderer
    .create(<CardsList
      variantsOfRent={mockProps.variantsOfRent}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
