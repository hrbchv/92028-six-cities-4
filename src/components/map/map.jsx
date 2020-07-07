import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import leaflet from "leaflet";
import {mapSettings, layerSettings, iconSettings} from "../../utils/map-settings.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._mapRef = React.createRef();
    this._markers = [];
  }

  componentDidMount() {
    this._initMap();
    this._renderMarkes();
  }

  _initMap() {
    this._map = leaflet.map(this._mapRef.current, mapSettings);
    this._map.setView(mapSettings.center, mapSettings.zoom);
    leaflet
      .tileLayer(layerSettings.pic, layerSettings.params)
      .addTo(this._map);
  }

  _renderMarkes() {
    const icon = leaflet.icon(iconSettings);
    const {variantsOfRent} = this.props;
    variantsOfRent.forEach((item) => {
      leaflet
        .marker(item.coordinates, {icon})
        .addTo(this._map);
    });
  }

  render() {
    return <div ref={this._mapRef} id="map" style={{height: `100%`, width: `100%`}}></div>;
  }
}

export default Map;

Map.propTypes = {
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
