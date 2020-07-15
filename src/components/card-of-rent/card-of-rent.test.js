import React from "react";
import renderer from "react-test-renderer";
import Card from "./card-of-rent.jsx";
import mockProps from "../../mocks/mock-for-test";

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      handlerHover={mockProps.handlerHover}
      index={mockProps.index}
      key={`${mockProps.index}-${mockProps.variantsOfRent[0].name}`}
      cardValues={mockProps.variantsOfRent[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
