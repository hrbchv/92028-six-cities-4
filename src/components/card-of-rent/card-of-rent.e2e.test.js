import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card-of-rent.jsx";

configure({adapter: new Adapter()});

it(`When user hover on card - card send value`, () => {
  const mockProps = {
    accommodationClick: jest.fn(),
    handlerHover: jest.fn((index) => index),
    cardValues: {
      name: `Prinsengracht Canal View`,
      kind: `Room`,
      rating: 3,
      cost: 150,
      imageUrl: `img/apartment-02.jpg`,
      type: `Standart`,
      isBookMark: false
    },
    index: 2
  };

  const mainComponent = mount(<Card
    accommodationClick={mockProps.accommodationClick}
    handlerHover={mockProps.handlerHover}
    index={mockProps.index}
    key={`${mockProps.index}-${mockProps.cardValues.name}`}
    cardValues={mockProps.cardValues}
  />);

  const preventHover = jest.fn();

  const card = mainComponent.find(`.place-card`);

  card.simulate(`mouseenter`, {
    preventHover
  });

  expect(mockProps.handlerHover.mock.results[0].value).toBe(2);

});
