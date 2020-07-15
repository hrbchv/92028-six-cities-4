import CardsList from "../cards-list/cards-list.jsx";
import PropTypes from "prop-types";
import React from "react";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import {getFilteredCollection, getUnicCollection} from "../../utils/get-collection";
import {connect} from "react-redux";
import ActionCreator from "../../reducer/action-creator";

export const Main = (props) => {
  const {variantsOfRent, currentCity, onCityNameClick} = props;
  const keyName = `city`;
  const cities = getUnicCollection(variantsOfRent, keyName);
  const filteredVariantsOfRent = getFilteredCollection(variantsOfRent, keyName, currentCity);
  const isPluralVariantsOfRent = filteredVariantsOfRent.length !== 1;

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList
        currentCity={currentCity}
        onCityNameClick={onCityNameClick}
        cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredVariantsOfRent.length} plac{isPluralVariantsOfRent ? `es` : `e`} to
              stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            {filteredVariantsOfRent ? <CardsList
              variantsOfRent={filteredVariantsOfRent}/> : <div>No places to stay available</div>}
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                variantsOfRent={filteredVariantsOfRent}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  variantsOfRent: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    isBookMark: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCityNameClick: (e) => {
      e.preventDefault();
      dispatch(ActionCreator.setCurrentCity(e.currentTarget.textContent));
    }
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
