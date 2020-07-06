import renderer from "react-test-renderer";
import React from "react";
import App from "./app.jsx";
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
  }]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      variantsOfRent={mockProps.variantsOfRent}/>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
