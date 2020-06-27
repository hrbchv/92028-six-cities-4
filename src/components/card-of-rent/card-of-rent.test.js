import React from "react";
import renderer from "react-test-renderer";

import Card from "./card-of-rent.jsx";

const mockProps = {
  cardValues: {
    name: `Wood and stone place`,
    kind: `Room`,
    rating: 3,
    cost: 189,
    imageUrl: `img/apartment-02.jpg`,
    type: `Standart`,
    isBookMark: false
  },
  accommodationClick: () => {
  },
  handlerHover: () => {
  },
  index: 1
};

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      accommodationClick={mockProps.accommodationClick}
      handlerHover={mockProps.handlerHover}
      index={mockProps.index}
      key={`${mockProps.index}-${mockProps.cardValues.name}`}
      cardValues={mockProps.cardValues}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
