import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ActionCreator from "../../reducer/action-creator";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setDefaultCity(this.props.variantsOfRent[0].city);
  }

  render() {
    const {variantsOfRent} = this.props;
    return <Main
      variantsOfRent={variantsOfRent}/>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDefaultCity: (city) => {
      dispatch(ActionCreator.setCurrentCity(city));
    }
  };
};

App.propTypes = {
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
  setDefaultCity: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(App);
