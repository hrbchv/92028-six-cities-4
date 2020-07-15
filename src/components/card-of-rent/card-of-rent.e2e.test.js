import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card-of-rent.jsx";
import React from "react";
import mockProps from "../../mocks/mock-for-test";

configure({adapter: new Adapter()});

it(`When user hover on card - card send value`, () => {
  const mainComponent = mount(<Card
    handlerHover={mockProps.handlerHover}
    index={mockProps.index}
    key={`${mockProps.index}-${mockProps.variantsOfRent[0].name}`}
    cardValues={mockProps.variantsOfRent[0]}
  />);

  const preventHover = jest.fn();
  const card = mainComponent.find(`.place-card`);

  card.simulate(`mouseenter`, {
    preventHover
  });

  expect(mockProps.handlerHover.mock.results[0].value).toBe(2);
});
