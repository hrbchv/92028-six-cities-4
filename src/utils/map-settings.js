const iconSettings = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

const mapSettings = {
  zoomControl: false,
  marker: true,
  center: [52.38333, 4.9],
  zoom: 12,
};

const layerSettings = {
  pic: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  params: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  }
};

export {iconSettings, layerSettings, mapSettings};

