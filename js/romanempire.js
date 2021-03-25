var mymap = L.map('mapid', { scrollWheelZoom: false }).setView([41.16704637604475, 17.78911655659329], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
}).addTo(mymap);

var romanmap = L.geoJSON(roman, {
    style: function (features) {
        return {
            color: "#7F2122",
            weight: 1,
            opacity: 1
        };
    }
}).addTo(mymap);

// Custom Info Control
var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Romeinse rijk (provincies) </h4>' +  (props ?
			'<b>' + props.name + '</b>'
			: 'Beweeg over de kaart');
	};

    info.addTo(mymap);
    
    // style
function style(feature) {
    return {
        fillColor: '#7F2122',
        weight: 3,
        // stroke: false,
        // opacity: 1,
        color: '#b22e30',
        // dashArray: '',
        fillOpacity: 0.3
    };
};
// highlight
L.geoJson(roman, {style: style}).addTo(mymap);
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#7F2122',
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
};

function resetHighlight(e) {
    geojson.resetStyle(e.target);
};

function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
};

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
};

geojson = L.geoJson(roman, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);
