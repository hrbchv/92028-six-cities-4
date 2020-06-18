import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {variantsOfRent} = props;
  return <Main
    variantsOfRent={variantsOfRent}/>;
};

export default App;
