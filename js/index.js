import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import TileWMS from 'ol/source/TileWMS';
import { Control, defaults as defaultControls } from 'ol/control';


var image = new CircleStyle({
  radius: 10,
  fill: new Fill({
    color: '#7F2122',
  }),
  stroke: new Stroke({ color: 'red', width: 1 }),
});

var styles = {
  'Point': new Style({
    image: image,
  }),
};

var styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()];
};

const data = require('/data/hills.json')
var geojsonObject = data;

var vectorSource = new VectorSource({
  features: (new GeoJSON()).readFeaturesFromObject(geojsonObject,
    {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    }
    )
});

var vectorLayer = new VectorLayer({
  source: vectorSource,
  style: styleFunction,
});

var layers = [
  new TileLayer({
    source: new OSM(),
  }),
  vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction,
  }),
];

var map = new Map({
  interactions: ol.interaction.defaults({mouseWheelZoom:false}),
  layers: layers,
  target: 'map-ol',
  view: new View({
    center: [1390236.67, 5144288.44],
    zoom: 14,
  }),
});

