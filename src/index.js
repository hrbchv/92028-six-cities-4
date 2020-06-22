import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const mockSettings = {
  variantsOfRent: 123,
  namesOfRent: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

ReactDOM.render(
    <App
      variantsOfRent={mockSettings.variantsOfRent}
      namesOfRent={mockSettings.namesOfRent}/>,
    document.getElementById(`root`)
);
