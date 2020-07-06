import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
jest.mock(`../map/map.jsx`, () => `Map`);

const mockProps = {
  variantsOfRent: [{
    name: `Wood and stone place`,
    kind: `Room`,
    rating: 3,
    cost: 189,
    imageUrl: `img/apartment-02.jpg`,
    type: `Standart`,
    isBookMark: false
  }],
  accommodationClick: () => {
  },
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      accommodationClick={mockProps.accommodationClick}
      variantsOfRent={mockProps.variantsOfRent}/>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
