parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KSAx":[function(require,module,exports) {
var e=L.map("mapid-4",{scrollWheelZoom:!1}).setView([52.09329226764612,5.074222349128035],8);function o(e,o){var p="<b>"+e.properties.nameroman+"</b><p>"+e.properties.namenl+"</p>";e.properties&&e.properties.popupContent&&(p+=e.properties.popupContent),o.bindPopup(p)}L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw",{maxZoom:18,id:"mapbox/streets-v11"}).addTo(e);var p={radius:8,fillColor:"#7F2122",color:"#000",weight:1,opacity:1,fillOpacity:1},r=L.geoJSON(limesroad,{style:function(e){return{color:"#FACD1E",weight:3,opacity:1}}}).addTo(e).bindPopup("<b>Romeinse Limes</b><br>Nederland"),i=L.geoJSON(limesnl,{pointToLayer:function(e,o){return L.circleMarker(o,p,{icon:p})},style:function(e){return e.properties&&e.properties.style},onEachFeature:o}).addTo(e);
},{}]},{},["KSAx"], null)
//# sourceMappingURL=limes.3931e859.js.map