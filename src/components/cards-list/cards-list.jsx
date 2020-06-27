import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card-of-rent/card-of-rent.jsx";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeElementIndex: null
    };
    this.handlerHover = this.handlerHover.bind(this);
  }

  handlerHover(index) {
    this.setState({
      activeElementIndex: index
    });
  }

  render() {
    const {variantsOfRent, accommodationClick} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {variantsOfRent.map((cardValues, index) => {
        return <Card
          accommodationClick={accommodationClick}
          handlerHover={this.handlerHover}
          index={index}
          key={`${index}-${cardValues.name}`}
          cardValues={cardValues}/>;
      })}
    </div>;
  }
}

CardsList.propTypes = {
  accommodationClick: PropTypes.func.isRequired,
  variantsOfRent: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isBookMark: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default CardsList;
