import PropTypes from "prop-types";
import React from "react";

const CitiesList = (props) => {
  const {cities, currentCity, onCityNameClick} = props;

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => {
          return <li
            className="locations__item"
            key={`${index}-${city}`}>
            <a
              className={`locations__item-link tabs__item  ${city === currentCity && `tabs__item--active`}`}
              onClick={onCityNameClick} href="#">
              <span>{city}</span>
            </a>
          </li>;
        })}
      </ul>
    </section>
  </div>;
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default CitiesList;
