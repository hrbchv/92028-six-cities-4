import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const mockSettings = {
  variantsOfRent: 123
};

ReactDOM.render(
    <App
      variantsOfRent={mockSettings.variantsOfRent}/>,
    document.getElementById(`root`)
);
