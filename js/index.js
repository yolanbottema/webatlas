import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import TileWMS from 'ol/source/TileWMS';
import {Control, defaults as defaultControls} from 'ol/control';
// import { control, defaults as defaultControls } from 'ol/control';
// import TileWMS from 'ol/sorce/TileWMS';
// import VectorLayer from 'ol/layer/Vector';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import VectorSource from 'ol/source/Vector'; 

var image = new CircleStyle({
    radius: 5,
    fill: null,
    stroke: new Stroke({color: 'red', width: 1}),
  });
  
  var styles = {
    'Point': new Style({
      image: image,
    }),
  };
// var styles = {
//     'Point': new Style({
//         radius: 5,
//         fill: new Fill({
//             color: '#7F2122',
//         }),
//         stroke: new Stroke({ color: 'red', width: 1 }),
//     }),
// };

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
        })
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
    layers: layers,
    target: 'map-ol',
    view: new View({
      center: [579076.15, 6862209.10],
      zoom: 4,
    }),
  });

// import {fromLonLat} from 'ol/proj';

// var vectorLayerJSON_1 = new ol.source.Vector({
//     projection : 'EPSG:3857',
//     url: 'hills_rome.geojson',
//     format: new ol.format.GeoJSON()
//  });

// new Map({
//     target: 'map-ol',
//     layers: [
//         new TileLayer({
//             source: new OSM()
//         }),
//         new VectorLayer({
//             source: new VectorSource({
//                 format: new GeoJSON(),
//                 url: "hills_rome.json"
//             })
//         })
//     ],
//     view: new View({
//         center: [579076.15, 6862209.10],
//         zoom: 4
//     })
// });

// const map = new Map({
//     target: 'map-ol',
//     layers: [
//         new TileLayer({
//             source: new OSM()
//         })
//     ],
//     view: new View({
//         center: [0, 0],
//         zoom: 2
//     })
// });






