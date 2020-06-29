import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const accommodationClick = () => {
};

const App = (props) => {
  const {variantsOfRent} = props;
  return <Main
    variantsOfRent={variantsOfRent}
    accommodationClick={accommodationClick}/>;
};

App.propTypes = {
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

export default App;
