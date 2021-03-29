var map = L.map('mapid2', { scrollWheelZoom: false }).setView([40.751186866271716, 14.484671021101914], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
}).addTo(map);

// geoserver lagen (gebouwen + functies)
var gebouwen = L.tileLayer.wms('http://localhost:8080/geoserver/pompeii/wms', {
    layers: 'gebouwen_pompeii',
    transparent: true,
    format: 'image/png'
}).addTo(map);

var functies = L.tileLayer.wms('http://localhost:8080/geoserver/pompeii/wms', {
    layers: 'functions_building_pompeii',
    transparent: true,
    format: 'image/png'
}).addTo(map);

var functies = L.layerGroup([functies]);
var gebouwen = L.layerGroup([gebouwen]);

var overlayerLayers = {
    'Gebouwen' : gebouwen,
    'Functies van gebouwen' : functies
}

L.control.layers(null, overlayerLayers).addTo(map);

// regio
var regio_pompeii = L.geoJson(regiopompeii, {
    style: function (feature) {
        return {
            color: "#7F2122",
            weight: 2,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Regio);
    }
}).addTo(map);

// legenda
var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h4>Legenda</h4>";
        div.innerHTML += '<i style="background: #ab7bdd"></i><span>Entertainment Buildings</span><br>';
        div.innerHTML += '<i style="background: #59d3bf"></i><span>Guilds</span><br>';
        div.innerHTML += '<i style="background: #8dce78"></i><span>Market Garden</span><br>';
        div.innerHTML += '<i style="background: #e0c187"></i><span>Private Dwellings</span><br>';
        div.innerHTML += '<i style="background: #cd5c8d"></i><span>Public Buildings</span><br>';
        div.innerHTML += '<i style="background: #d06e61"></i><span>Shops</span><br>';
        div.innerHTML += '<i style="background: #7cde98"></i><span>Temples</span><br>';
        div.innerHTML += '<i style="background: #a7c91d"></i><span>Urban Supply System</span><br>';
        div.innerHTML += '<i style="background: #3a95cd"></i><span>Workshops</span><br>';
        div.innerHTML += '<i style="background: #616acd"></i><span>Unknown</span><br>';
        return div;
    };

    map.on('overlayadd', function (eventLayer) {
        if (eventLayer.name === 'Functies van gebouwen') {
            legend.addTo(map);
        } else { 
            map.removeControl(legend);
        }
    });

