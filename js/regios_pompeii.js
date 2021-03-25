var mymap = L.map('mapid3', { scrollWheelZoom: false }).setView([41.16704637604475, 17.78911655659329], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
}).addTo(mymap);

// var romanmap = L.geoJSON(romanmap, {
//     style: function (features) {
//         return {
//             color: "#7F2122",
//             weight: 1,
//             opacity: 1
//         };
//     }
// }).addTo(mymap);
L.geoJSON(romanmap).addTo(mymap);