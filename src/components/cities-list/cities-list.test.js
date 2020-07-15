import React from "react";
import renderer from "react-test-renderer";
import mockProps from "../../mocks/mock-for-test";
import CitiesList from "./cities-list.jsx";

it(`Render Main`, () => {
  const tree = renderer
    .create(<CitiesList
      currentCity={mockProps.currentCity}
      onCityNameClick={mockProps.jestFn}
      cities={[mockProps.currentCity]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
