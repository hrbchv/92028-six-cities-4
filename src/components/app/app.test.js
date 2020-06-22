import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const mockProps = {
  variantsOfRent: 321,
  namesOfRent: [`Some hostel name`, `Some hotel name`, `Name for appartament`]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      variantsOfRent={mockProps.variantsOfRent}
      namesOfRent={mockProps.namesOfRent}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
