import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

const mockProps = {
  variantsOfRent: 341,
  accommodationClick: () => {},
  namesOfRent: [`Some other hotel name`, `Some other hotel name`, `Other name for appartament`]
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      accommodationClick={mockProps.accommodationClick}
      variantsOfRent={mockProps.variantsOfRent}
      namesOfRent={mockProps.namesOfRent}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
