import React from "react";
import renderer from "react-test-renderer";

import Card from "./card-of-rent.jsx";

const mockProps = {
  name: `Some name for card`,
  accommodationClick: () => {}
};

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      accommodationClick={mockProps.accommodationClick}
      name={mockProps.name}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
