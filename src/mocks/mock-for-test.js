const mockProps = {
  variantsOfRent: [{
    name: `Wood and stone place`,
    kind: `Room`,
    rating: 3,
    cost: 189,
    imageUrl: `img/apartment-02.jpg`,
    type: `Standart`,
    isBookMark: false,
    coordinates: [123441, 3423423],
    city: `Amsterdam`
  }],
  jestFn: jest.fn(),
  handlerHover: jest.fn((index) => index),
  index: 2,
  currentCity: `Amsterdam`
};

export default mockProps;
