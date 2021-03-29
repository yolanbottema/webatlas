var mymap = L.map('mapid-4', { scrollWheelZoom: false }).setView([52.09329226764612, 5.074222349128035], 8);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
}).addTo(mymap);

// pop up
function onEachFeature(feature, layer) {
    var popupContent = '<b>' + feature.properties.nameroman + '</b>' + '<p>' + feature.properties.namenl + '</p>';
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
};
//  icon
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#7F2122",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};
var limesweg = L.geoJSON(limesroad,{
    style: function (features) {
        return {
            color: "#FACD1E",
            weight: 3,
            opacity: 1
        };
    }
}).addTo(mymap).bindPopup("<b>Romeinse Limes</b><br>Nederland");

var limes = L.geoJSON(limesnl,{
    pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions,
            {icon: geojsonMarkerOptions}
            );
            },   
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

}).addTo(mymap);



  



