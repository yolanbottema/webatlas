parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dL6d":[function(require,module,exports) {
mapboxgl.accessToken="pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw";var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/yolan/ckmi1f7he385k17nr5ir2yx9h",center:[13.32570195433817,45.338667448264964],zoom:3});e.on("load",function(){e.addSource("places",{type:"geojson",data:"romanplaces.geojson"}),e.addLayer({id:"places",type:"circle",source:"places",paint:{"circle-radius":2,"circle-color":"#BF3234"}})}),e.on("click","places",function(o){(new mapboxgl.Popup).setLngLat(o.lngLat).setHTML(o.features[0].properties.modern).addTo(e)}),e.scrollZoom.disable(),e.addControl(new mapboxgl.NavigationControl);
},{}]},{},["dL6d"], null)
//# sourceMappingURL=mapbox.da76eb17.js.map