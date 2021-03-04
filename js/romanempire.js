var mymap = L.map('mapid', { scrollWheelZoom: false }).setView([44.95623642300958, 8.30558259409421], 5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

var romanmap = L.geoJSON(romanmap, {
    style: function (feature) {
        return {
            color: "#7F2122",
            weight: 4,
            opacity: 5
        };
    }
}).addTo(map);

