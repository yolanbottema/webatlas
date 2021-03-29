import { V4MAPPED } from "dns";

mapboxgl.accessToken = 'pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yolan/ckmi1f7he385k17nr5ir2yx9h',
  center: [13.32570195433817, 45.338667448264964],
  zoom: 3
});

map.on('load', function () {
  map.addSource("places", {
    "type": "geojson",
    "data": "romanplaces.json"
  })
});


map.addLayer({
  "id": "places",
  "type": "circle",
  "source": "places",
  "paint": {
    "circle-radius": 2,
    "circle-color": "#BF3234"
  }
});


map.on('click', 'places', function (e) {
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.modern)
    .addTo(map);
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());