import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
  const {cardValues, handlerHover, index} = props;

  return <article
    className="cities__place-card place-card"
    onMouseEnter={(evt) => {
      evt.preventDefault();
      handlerHover(index);
    }}>
    <div className="place-card__mark">
      <span>{cardValues.type}</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={cardValues.imageUrl} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{cardValues.cost}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span className="visually-hidden">{cardValues.rating}</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a
          href="#">{cardValues.name}</a>
      </h2>
      <p className="place-card__type">{cardValues.type}</p>
    </div>
  </article>;
};

Card.propTypes = {
  handlerHover: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  cardValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isBookMark: PropTypes.bool.isRequired
  }).isRequired
};

export default Card;
