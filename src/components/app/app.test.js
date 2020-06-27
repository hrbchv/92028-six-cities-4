import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const mockProps = {
  variantsOfRent: [{
    name: `Wood and stone place`,
    kind: `Room`,
    rating: 3,
    cost: 189,
    imageUrl: `img/apartment-02.jpg`,
    type: `Standart`,
    isBookMark: false
  }]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      variantsOfRent={mockProps.variantsOfRent}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
