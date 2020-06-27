import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import mockedValues from "./mocks/offers";

ReactDOM.render(
    <App
      variantsOfRent={mockedValues}/>,
    document.getElementById(`root`)
);
