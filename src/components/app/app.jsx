import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {variantsOfRent, namesOfRent} = props;
  return <Main
    variantsOfRent={variantsOfRent}
    namesOfRent={namesOfRent}/>;
};

App.propTypes = {
  namesOfRent: PropTypes.arrayOf(PropTypes.string).isRequired,
  variantsOfRent: PropTypes.number.isRequired
};

export default App;
