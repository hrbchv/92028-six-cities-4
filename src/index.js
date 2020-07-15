import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import App from "./components/app/app.jsx";
import mockedValues from "./mocks/offers";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        variantsOfRent={mockedValues}/>
    </Provider>,
    document.getElementById(`root`)
);
