import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";
import mockProps from "../../mocks/mock-for-test";

jest.mock(`../map/map.jsx`, () => `Map`);

configure({adapter: new Adapter()});

it(`When user click on titile of card - callback returns`, () => {

  const mainComponent = mount(<Main
    variantsOfRent={mockProps.variantsOfRent}
    currentCity={mockProps.currentCity}
    onCityNameClick={mockProps.jestFn}/>, {
    createNodeMock: () => document.createElement(`div`)
  });

  const preventClick = jest.fn();
  const titleOfCard = mainComponent.find(`.place-card__name a`);

  titleOfCard.simulate(`click`, {
    preventClick
  });
});
