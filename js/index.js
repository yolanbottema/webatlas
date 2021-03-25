import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';

// var vectorLayerJSON_1 = new ol.source.Vector({
//     projection : 'EPSG:3857',
//     url: 'hills_rome.geojson',
//     format: new ol.format.GeoJSON()
//  });

  
const map = new Map({
    target: 'map-ol',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});



