import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

configure({adapter: new Adapter()});

it(`When user click on titile of card - callback returns`, () => {

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
    accommodationClick: jest.fn()
  };

  const mainComponent = mount(<Main
    variantsOfRent={mockProps.variantsOfRent}
    accommodationClick={mockProps.accommodationClick}
  />);

  const preventClick = jest.fn();

  const titleOfCard = mainComponent.find(`.place-card__name a`);

  titleOfCard.simulate(`click`, {
    preventClick
  });

  expect(mockProps.accommodationClick).toHaveBeenCalledTimes(1);
});
