import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const mockProps = {
  variantsOfRent: [{
    name: `Wood and stone place`,
    kind: `Room`,
    rating: 3,
    cost: 189,
    imageUrl: `img/apartment-02.jpg`,
    type: `Standart`,
    isBookMark: false,
    coordinates: [123441, 3423423]
  }]
};

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      variantsOfRent={mockProps.variantsOfRent}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
