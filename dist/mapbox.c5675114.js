// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/mapbox.js":[function(require,module,exports) {
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
    "data": {
      "type": "FeatureCollection",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      "features": [{
        "type": "Feature",
        "properties": {
          "id": "2",
          "modern": "Trier",
          "latin": "Augusta Treverorum",
          "greek": "Αὐγούστα Τριβήρων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.64376, 49.756227]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "3",
          "modern": "Mainz",
          "latin": "Mogontiacum",
          "greek": "Μοκοντίακον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.273869, 49.998912]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10",
          "modern": "Augsburg",
          "latin": "Augusta Vindelicum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.89655, 48.37277]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15",
          "modern": "Salzburg",
          "latin": "Iuvavum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.046621, 47.797844]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "19",
          "modern": "Augst",
          "latin": "Augusta Raurica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.722311, 47.533226]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24",
          "modern": "Avenches",
          "latin": "Aventicum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.040668, 46.880282]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "29",
          "modern": "Besançon",
          "latin": "Vesontio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.03039, 47.23369]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "30",
          "modern": "Langres",
          "latin": "Andematunnum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.335214, 47.864221]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "52",
          "modern": "Reims",
          "latin": "Durocortorum",
          "greek": "Δουροκόττορον/Δουρικορτόρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.033901, 49.253801]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "104",
          "modern": "Aosta",
          "latin": "Augusta Praetoria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.317846, 45.7381]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "105",
          "modern": "Lyon",
          "latin": "Lugdunum",
          "greek": "Λούγδουνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.819827, 45.759683]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "106",
          "modern": "Vienne",
          "latin": "Vienna",
          "greek": "Οὐιέννη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.873247, 45.524204]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "117",
          "modern": "Autun",
          "latin": "Augustodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.299041, 46.945032]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "119",
          "modern": "Bourges",
          "latin": "Avaricum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.399168, 47.08221]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "120",
          "modern": "Orléans",
          "latin": "Cenabum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.910357, 47.9019]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "121",
          "modern": "Tours",
          "latin": "Caesarodunum",
          "greek": "Καισαρόδουνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.694452, 47.395584]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "123",
          "modern": "Angers",
          "latin": "Iuliomagus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.55495, 47.47057]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "142",
          "modern": "Clermont-Ferrand",
          "latin": "Augustonemetum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.08577, 45.77873]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "143",
          "modern": "Limoges",
          "latin": "Augustoritum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.266666, 45.828922]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "144",
          "modern": "Poitiers",
          "latin": "Limonum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.349348, 46.580342]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "145",
          "modern": "Saintes",
          "latin": "Mediolanum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.631898, 45.744534]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "147",
          "modern": "Bordeaux",
          "latin": "Burdigala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.57918, 44.837789]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "149",
          "modern": "Agen",
          "latin": "Aginnum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.619245, 44.206791]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "150",
          "modern": "Cahors",
          "latin": "Divona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.442975, 44.447304]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "151",
          "modern": "Rodez",
          "latin": "Segodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.574133, 44.350785]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "153",
          "modern": "Toulouse",
          "latin": "Tolosa",
          "greek": "Τολῶσσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.443, 43.6044]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "156",
          "modern": "Narbonne",
          "latin": "Narbo Martius",
          "greek": "Νάρβων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.003611, 43.184722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "159",
          "modern": "Béziers",
          "latin": "Baeterrae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.2178, 43.3416]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "163",
          "modern": "Périgueux",
          "latin": "Vesunna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.722653, 45.183541]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "166",
          "modern": "Orange",
          "latin": "Arausio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.807393, 44.138048]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "167",
          "modern": "Saint-Paul-Trois-Châteaux",
          "latin": "Augusta Tricastinorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.767668, 44.349504]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "171",
          "modern": "Nîmes",
          "latin": "Nemausus",
          "greek": "Νέμαυσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.36041, 43.83837]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "173",
          "modern": "Arles",
          "latin": "Arelate",
          "greek": "Ἀρελᾶτε",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.62266, 43.67586]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "175",
          "modern": "Aix-en-Provence",
          "latin": "Aquae Sextiae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.447301, 43.531883]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "176",
          "modern": "Marseille",
          "latin": "Massalia",
          "greek": "Μασσαλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.365307, 43.299467]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "183",
          "modern": "Cimiez",
          "latin": "Cemenelum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.276296, 43.718954]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "184",
          "modern": "Fréjus",
          "latin": "Forum Iulii",
          "greek": "Φόρος Ἰούλιος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.736911, 43.43321]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "190",
          "modern": "Die",
          "latin": "Dea Vocontiorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.37102, 44.75216]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "191",
          "modern": "Valence",
          "latin": "Valentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.889528, 44.931632]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "299",
          "modern": "Köln",
          "latin": "Claudia Ara Agrippinensium",
          "greek": "Ἀγριππινηηνσίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.958162, 50.941335]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "348",
          "modern": "Kempten",
          "latin": "Cambodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.322897, 47.72761]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "384",
          "modern": "Nijmegen",
          "latin": "Batavodurum",
          "greek": "Βοταυόδουρον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.8698, 51.84812]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "395",
          "modern": "Saint-Bertrand-de-Comminges",
          "latin": "Lugdunum Convenarum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.571311, 43.026707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "558",
          "modern": "Xanten",
          "latin": "Ulpia Traiana",
          "greek": "Τραινὴ/Τραιανή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.45, 51.666667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1438",
          "modern": "Roma",
          "latin": "Roma",
          "greek": "Ῥώμη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.4843457, 41.89262]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1439",
          "modern": "Verona",
          "latin": "Verona",
          "greek": "Οὐήρων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.997007, 45.447243]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1445",
          "modern": "Milano",
          "latin": "Mediolanium",
          "greek": "Μεδιόλανον/Μεδιολάνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.1881, 45.4637]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1446",
          "modern": "Ivrea",
          "latin": "Eporedia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.87527, 45.4681]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1448",
          "modern": "Parma",
          "latin": "Parma",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.327967, 44.801507]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1449",
          "modern": "Bologna",
          "latin": "Bononia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.3418224, 44.4946274]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1450",
          "modern": "Cividale del Friuli",
          "latin": "Forum Iulii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.431685, 46.093107]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1452",
          "modern": "Ravenna",
          "latin": "Ravenna",
          "greek": "Ῥάυεννα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.19702, 44.41536]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1453",
          "modern": "Firenze",
          "latin": "Florentia",
          "greek": "Φλωρεντία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.2569, 43.7687]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1454",
          "modern": "Ancona",
          "latin": "Ancona",
          "greek": "Ἀγκών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.510256, 43.625323]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1455",
          "modern": "Spoleto",
          "latin": "Spoletium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.740319, 42.73528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1457",
          "modern": "Capua",
          "latin": "Casilinum",
          "greek": "Κασιλῖνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.2130486, 41.1061258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1461",
          "modern": "Vicenza",
          "latin": "Vicetia",
          "greek": "Οὐικετία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.5403, 45.5459]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1463",
          "modern": "Brescia",
          "latin": "Brixia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.2229, 45.5398]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1465",
          "modern": "Bergamo",
          "latin": "Bergomum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.6687, 45.6947]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1466",
          "modern": "Piacenza",
          "latin": "Placentia",
          "greek": "Πλακεντία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.696586, 45.052752]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1467",
          "modern": "Torino",
          "latin": "Augusta Taurinorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.685433, 45.073361]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1468",
          "modern": "Aquileia",
          "latin": "Aquileia",
          "greek": "Ἀκυληία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -181,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.370946, 45.769631]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1482",
          "modern": "Benevento",
          "latin": "Beneventum",
          "greek": "Βενεουεντόν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.77433, 41.13155]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1517",
          "modern": "Isernia",
          "latin": "Aesernia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.2267, 41.58991]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1518",
          "modern": "Veroli",
          "latin": "Verulae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.417276, 41.690532]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1519",
          "modern": "Lucca",
          "latin": "Luca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.50602, 43.840677]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1520",
          "modern": "Tortona",
          "latin": "Dertona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.8655, 44.8972]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1521",
          "modern": "Vercelli",
          "latin": "Vercellae",
          "greek": "Οὐερκέλλοι/Οὐερκέλλαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.4263, 45.321]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1522",
          "modern": "Trento",
          "latin": "Tridentium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.12154, 46.06692]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1523",
          "modern": "Salerno",
          "latin": "Salernum",
          "greek": "Σάλερνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.7659122, 40.6779567]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1524",
          "modern": "Napoli",
          "latin": "Neapolis",
          "greek": "Νέα πόλις/Νεάπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.25807, 40.8509]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1525",
          "modern": "Venosa",
          "latin": "Venusia",
          "greek": "Οὐενουσία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.827406, 40.969056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1527",
          "modern": "Rieti",
          "latin": "Reate",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.858932, 42.402042]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1529",
          "modern": "Rottweil",
          "latin": "Arae Flaviae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.6279301, 48.1666854]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1888",
          "modern": "London",
          "latin": "Londinium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.099181, 51.512514]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "1889",
          "modern": "Canterbury",
          "latin": "*Durovernum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.078376, 51.277036]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "2240",
          "modern": "Saint-Marcel",
          "latin": "*Argentomagus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.516462, 46.598854]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "2718",
          "modern": "Como",
          "latin": "Comum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.0855, 45.812]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "2720",
          "modern": "Modena",
          "latin": "Mutina",
          "greek": "Μο[υ]τίνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.9252, 44.6471]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "3123",
          "modern": "Wels",
          "latin": "Ovilava",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": 40,
          "endyear": 488
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.02701, 48.1578]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5064",
          "modern": "Arezzo",
          "latin": "Arretium",
          "greek": "Αρρέτιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.88344, 43.46707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5472",
          "modern": "Istanbul",
          "latin": "Byzantium",
          "greek": "Βυζάντιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.975926, 41.012379]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5537",
          "modern": "Novara",
          "latin": "Novaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.61974, 45.44566]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5543",
          "modern": "Cremona",
          "latin": "Cremona",
          "greek": "Κρεμώνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.0261, 45.1335]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5544",
          "modern": "Volterra",
          "latin": "Volaterrae",
          "greek": "Οὐολατέρρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.859019, 43.401777]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5554",
          "modern": "Sopron",
          "latin": "Scarbantia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.59139, 47.68599]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5560",
          "modern": "Szombathely",
          "latin": "Savaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 43,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.61674, 47.23191]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10898",
          "modern": "Aquincum",
          "latin": "Aquincum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.049483, 47.564142]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5854",
          "modern": "Luni",
          "latin": "Luna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.016856, 44.064253]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "5890",
          "modern": "Penne",
          "latin": "Pinna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.92683, 42.45623]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "6534",
          "modern": "Barcelona",
          "latin": "Barcino",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.17704, 41.38291]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "6535",
          "modern": "Tarragona",
          "latin": "Tarraco",
          "greek": "Ταρράκων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.25702, 41.11767]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "6536",
          "modern": "Zaragoza",
          "latin": "Caesaraugusta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.877894, 41.652123]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "6537",
          "modern": "Huesca",
          "latin": "Osca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.40816, 42.14045]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "6538",
          "modern": "Lleida",
          "latin": "Ilerda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.62668, 41.61483]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "8024",
          "modern": "Château Roussillon",
          "latin": "Ruscino",
          "greek": "Ῥουσκίνων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.945236, 42.708694]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "8039",
          "modern": "Ventimiglia",
          "latin": "Albium Intimilium",
          "greek": "Ἄλβιον Ἰντεμέλιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.625233, 43.789243]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10347",
          "modern": "Bela Palanka",
          "latin": "Remesiana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.31138, 43.21804]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10562",
          "modern": "Rimini",
          "latin": "Ariminum",
          "greek": "Ἀρίμινον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57028, 44.05963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10564",
          "modern": "Pesaro",
          "latin": "Pisaurum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.91459, 43.91099]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10565",
          "modern": "Fano",
          "latin": "Fanum Fortunae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.0180936, 43.8443206]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10567",
          "modern": "Albenga",
          "latin": "Album Ingaunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.21334, 44.04937]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10595",
          "modern": "Pisa",
          "latin": "Pisae",
          "greek": "Πῖσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.400106, 43.719417]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10596",
          "modern": "Pistoia",
          "latin": "Pistoriae",
          "greek": "Πιστωρία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.917964, 43.933383]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10609",
          "modern": "Fiesole",
          "latin": "Faesulae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.292487, 43.807212]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10645",
          "modern": "Concordia Sagittaria",
          "latin": "Iulia Concordia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.84547, 45.75594]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10647",
          "modern": "Padova",
          "latin": "Patavium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.8766, 45.4096]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10670",
          "modern": "Sankt Peter in Holz",
          "latin": "Teurnia",
          "greek": "Τεουρνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.4437387, 46.8232282]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10710",
          "modern": "Zollfeld",
          "latin": "Virunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.366975, 46.697885]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10717",
          "modern": "Ljubljana",
          "latin": "Emona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.501095, 46.047361]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10718",
          "modern": "Celje",
          "latin": "Celeia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.2602936, 46.231018]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10719",
          "modern": "Ptuj",
          "latin": "Poetovio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.8699813, 46.4199885]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10720",
          "modern": "Petronell-Carnuntum",
          "latin": "Carnuntum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 6,
          "endyear": 400
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.86168, 48.1132]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10734",
          "modern": "Drnovo",
          "latin": "Neviodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.488811, 45.917445]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10735",
          "modern": "Trieste",
          "latin": "Tergeste",
          "greek": "Τεργέστε",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.772521, 45.647165]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10738",
          "modern": "Zalalövő",
          "latin": "Sala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.58688, 46.84573]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10769",
          "modern": "Wagna",
          "latin": "Flavia Solva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.568722, 46.768972]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10770",
          "modern": "Osijek",
          "latin": "Mursa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.6758848, 45.5600028]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10771",
          "modern": "Sisak",
          "latin": "Segestica",
          "greek": "Σεγεστική",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.37264, 45.4843]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10779",
          "modern": "Dölsach",
          "latin": "Aguntum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.8230274, 46.8277152]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10783",
          "modern": "Wien",
          "latin": "Mun. Vindobona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 80,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.391128, 48.193161]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10847",
          "modern": "Tác",
          "latin": "Gorsium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.420278, 47.089722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10853",
          "modern": "Ságvár",
          "latin": "Tricciana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.106008, 46.836047]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10854",
          "modern": "Pécs",
          "latin": "Sopianae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.2331432, 46.0713203]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10861",
          "modern": "Daruvar",
          "latin": "Aquae Balissae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.2240356, 45.5936694]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10862",
          "modern": "Vinkovci",
          "latin": "Cibalae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.8010483, 45.2910248]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10865",
          "modern": "Sremska Mitrovica",
          "latin": "Sirmium",
          "greek": "Σίρμιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.61017, 44.96648]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10875",
          "modern": "Šćitarjevo",
          "latin": "Andautonia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.11725, 45.77361]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10877",
          "modern": "Stari Kostolac",
          "latin": "Viminacium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.216122, 44.736776]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10878",
          "modern": "Beograd",
          "latin": "Singidunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.4503, 44.8236]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10879",
          "modern": "Niš",
          "latin": "Naissus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.8927, 43.3206]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10880",
          "modern": "Sofia",
          "latin": "Serdica",
          "greek": "Σερδική",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.3221545, 42.6976489]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10896",
          "modern": "Vidin",
          "latin": "Bononia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.881646, 43.990437]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10897",
          "modern": "Archar",
          "latin": "Ratiaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.904856, 43.817397]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10939",
          "modern": "Solin",
          "latin": "Salona",
          "greek": "Σάλων/Σαλῶναι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.48365, 43.53814]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10942",
          "modern": "Pula",
          "latin": "Pola",
          "greek": "Πόλα/Πόλαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.84553, 44.87025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10944",
          "modern": "Skradin",
          "latin": "Scardona",
          "greek": "Σκάρδων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.9230472, 43.817902]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10946",
          "modern": "Senj",
          "latin": "Senia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.9008777, 44.9905591]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10948",
          "modern": "Shkodër",
          "latin": "Scodra",
          "greek": "Σκόδρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.493651, 42.046432]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10961",
          "modern": "Tortosa",
          "latin": "Dertosa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.52293, 40.8133]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10962",
          "modern": "Brindisi",
          "latin": "Brundisium",
          "greek": "Βρενδέσιον/Βρεντήσιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.946867, 40.641136]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10975",
          "modern": "Athína",
          "latin": "Athenae",
          "greek": "Ἀθῆναι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.726464, 37.971687]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "11053",
          "modern": "Vic",
          "latin": "Auso",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.25478, 41.9279]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "11084",
          "modern": "Tüskevár",
          "latin": "Mogentiana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.31382, 47.11928]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13848",
          "modern": "Donji Petrovci",
          "latin": "Bassiana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.97406, 44.9707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "11881",
          "modern": "Trsat",
          "latin": "Tarsatica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.455433, 45.332524]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "12782",
          "modern": "Córdoba",
          "latin": "Corduba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.7791517, 37.8847267]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "12826",
          "modern": "Siena",
          "latin": "Saena",
          "greek": "Σαίνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.328969, 43.317826]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "12840",
          "modern": "Assisi",
          "latin": "Asisium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.614722, 43.071389]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13018",
          "modern": "Voorburg",
          "latin": "Aurelium Cananefatium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.349213, 52.060064]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13512",
          "modern": "Chiusi",
          "latin": "Clusium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.949059, 43.015733]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13576",
          "modern": "Larino",
          "latin": "Larinum",
          "greek": "Λάρινα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.919239, 41.80713]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13695",
          "modern": "Braga",
          "latin": "Bracara Augusta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.427013, 41.55001]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13697",
          "modern": "Lugo",
          "latin": "Lucus Augusti",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.55819, 43.00915]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13698",
          "modern": "Astorga",
          "latin": "Asturica Augusta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.0635263, 42.4589013]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13705",
          "modern": "Coimbra",
          "latin": "Aeminium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.426168, 40.20758]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16869",
          "modern": "Condeixa-a-Velha",
          "latin": "Conimbriga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.493407, 40.099052]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13709",
          "modern": "Toledo",
          "latin": "Toletum",
          "greek": "Τώλητον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.0244759, 39.8567775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13753",
          "modern": "Sárvár",
          "latin": "Bassiana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.935, 47.254]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13756",
          "modern": "Fenékpuszta",
          "latin": "Volgum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.2465316, 46.7096385]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13788",
          "modern": "Poreč",
          "latin": "Parentium",
          "greek": "Πάρενθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.59354, 45.22855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13857",
          "modern": "Zadar",
          "latin": "Iader",
          "greek": "τὰ Διάδωρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.224531, 44.115541]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13861",
          "modern": "Viničica",
          "latin": "Metulum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.3, 45.209]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13865",
          "modern": "Stinica",
          "latin": "Ortopla",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.8924032, 44.7191877]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13897",
          "modern": "Bugojno",
          "latin": "Bistua Nova",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.446439, 44.053621]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13898",
          "modern": "Lib u Borčanima",
          "latin": "Delminium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.314, 43.645]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13900",
          "modern": "Gor. Vrtače",
          "latin": "Splonum",
          "greek": "Σπλαῦνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.390278, 44.37]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13902",
          "modern": "Balina Glavica",
          "latin": "Magnum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.30079, 43.80279]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13904",
          "modern": "Danilo Kraljice",
          "latin": "Rider",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.059057, 43.703354]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13907",
          "modern": "Plavno Polje",
          "latin": "Burnum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.025622, 44.018914]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13913",
          "modern": "Čitluk",
          "latin": "Aequum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.656, 43.739]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13914",
          "modern": "Lištani",
          "latin": "Pelva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.77013, 43.88115]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13915",
          "modern": "Vrba on Glamočko polje",
          "latin": "Salvium",
          "greek": "Σαλουία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.751, 44.048]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13916",
          "modern": "Šipovo",
          "latin": "Baloia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.08308, 44.28216]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13921",
          "modern": "Plomin",
          "latin": "Flanona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.172682, 45.138214]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13927",
          "modern": "Vid",
          "latin": "Narona",
          "greek": "Ναρῶνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.628052, 43.080349]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13932",
          "modern": "Stolac",
          "latin": "Diluntum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.956038, 43.080361]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13933",
          "modern": "Cavtat",
          "latin": "Epidaurum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.21727, 42.58142]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "14073",
          "modern": "Sutri",
          "latin": "Sutrium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.226323, 42.241246]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "14305",
          "modern": "Mérida",
          "latin": "Augusta Emerita",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.3456061, 38.9158586]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15297",
          "modern": "Fermo",
          "latin": "Firmum Picenum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.71682, 43.1611]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15896",
          "modern": "Jerusalem",
          "latin": "Ierusalem",
          "greek": "Ἱεροσόλυμα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.234167, 31.776667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16812",
          "modern": "Jesi",
          "latin": "Aesis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.2462, 43.52492]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15897",
          "modern": "Carthago",
          "latin": "Carthago",
          "greek": "Καρχηδών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.323056, 36.853056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15898",
          "modern": "Alexandria",
          "latin": "Alexandria",
          "greek": "Ἀλεξάνδρεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.904133, 31.195371]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15960",
          "modern": "Ostia Antica",
          "latin": "Ostia",
          "greek": "Ὤστια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.287656, 41.7548549]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "15969",
          "modern": "Senigallia",
          "latin": "Sena Gallica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.2184087, 43.7123182]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16028",
          "modern": "San Vittorino Amiterno",
          "latin": "Amiternum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.30884, 42.402]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16105",
          "modern": "Teramo",
          "latin": "Interamnia Praetuttiorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.705639, 42.658822]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16123",
          "modern": "Orte",
          "latin": "Horta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.3864259, 42.4603148]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16130",
          "modern": "Velletri",
          "latin": "Velitrae",
          "greek": "Οὐελίτραι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.77721, 41.687426]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16177",
          "modern": "Cagliari",
          "latin": "Carales",
          "greek": "Κάραλίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.116991, 39.218721]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16458",
          "modern": "Cherson",
          "latin": "Chersonesos",
          "greek": "Χερσόνησος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.4922867, 44.6109122]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16556",
          "modern": "Reggio di Calabria",
          "latin": "Rhegion",
          "greek": "Ῥήγιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.64393, 38.10928]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16562",
          "modern": "Taranto",
          "latin": "Taras",
          "greek": "Τάρᾱς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.228553, 40.476034]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16564",
          "modern": "Lucera",
          "latin": "Luceria",
          "greek": "Λουκερία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.335065, 41.508065]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16570",
          "modern": "Siracusa",
          "latin": "Syracusae",
          "greek": "Συράκουσαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.29382, 37.05963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16574",
          "modern": "Altilia",
          "latin": "Saepinum",
          "greek": "Σαίπινον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.618419, 41.433187]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16575",
          "modern": "Bojano",
          "latin": "Bovianum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.472644, 41.48202]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16578",
          "modern": "Todi",
          "latin": "Tuder",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.40849, 42.78025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16579",
          "modern": "Amelia",
          "latin": "Ameria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.413401, 42.5571739]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16580",
          "modern": "Perugia",
          "latin": "Perusia",
          "greek": "Περουσία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.390594, 43.111692]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16582",
          "modern": "Camerino",
          "latin": "Camerinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.06688, 43.1343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16583",
          "modern": "Orvieto",
          "latin": "Volsinii Veteres",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.11363, 42.71702]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16589",
          "modern": "Siponto",
          "latin": "Sipous",
          "greek": "Σιποῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.8897665, 41.6084823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16606",
          "modern": "Arpino",
          "latin": "Arpinum",
          "greek": "Ἀρπίνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.6098703, 41.6484444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16629",
          "modern": "Tuscania",
          "latin": "Tuscana",
          "greek": "Τυρρηνία/Τυρρηνή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.87835, 42.41276]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16631",
          "modern": "Città di Castello",
          "latin": "Tifernum Tiberinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.23805, 43.45668]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16677",
          "modern": "Kadıköy",
          "latin": "Chalcedon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.025789, 40.983393]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16679",
          "modern": "Sevilla",
          "latin": "Hispalis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.99312, 37.3858]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16692",
          "modern": "Sarsina",
          "latin": "Sarsina",
          "greek": "Σάρσινα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.14364, 43.91886]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16693",
          "modern": "Populonia",
          "latin": "Populonia",
          "greek": "Ποπλώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.489679, 42.988066]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16694",
          "modern": "Roselle",
          "latin": "Rusellae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.15964, 42.82756]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16695",
          "modern": "Monte Bisenzio",
          "latin": "Visentium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.87409, 42.57326]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16696",
          "modern": "Bolsena",
          "latin": "Volsinii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.99015, 42.65026]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16697",
          "modern": "Bettona",
          "latin": "Vettona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.485379, 43.013864]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16698",
          "modern": "Civitella d'Arno",
          "latin": "Arna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.485518, 43.12775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16699",
          "modern": "Bevagna",
          "latin": "Mevania",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.609389, 42.93487]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16700",
          "modern": "Pistia",
          "latin": "Plestia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.90375, 43.03032]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16701",
          "modern": "Sant'Angelo in Vado",
          "latin": "Tifernum Mataurense",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.41167, 43.66657]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16702",
          "modern": "Macerata Feltria",
          "latin": "Pitinum Pisaurense",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.43247, 43.8017]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16705",
          "modern": "Tarquinia",
          "latin": "Tarquinii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.8032392, 42.2594737]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16707",
          "modern": "Blera",
          "latin": "Blera",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.02357, 42.27909]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16708",
          "modern": "Cerveteri",
          "latin": "Caere",
          "greek": "Καιρέα/Ἄγυλλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.10541, 42.007707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16710",
          "modern": "Portus",
          "latin": "Portus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.26258, 41.779928]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16711",
          "modern": "Anzio",
          "latin": "Antium",
          "greek": "Ἄντιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.628595, 41.455191]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16712",
          "modern": "Terracina",
          "latin": "Tarracinae",
          "greek": "Ταρρακῖνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.2488651, 41.2912168]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16713",
          "modern": "Fondi",
          "latin": "Fundi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.427922, 41.357429]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16714",
          "modern": "Minturno",
          "latin": "Minturnae",
          "greek": "Μιντοῦρναι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.768185, 41.241973]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16715",
          "modern": "Sessa Aurunca",
          "latin": "Suessa Aurunca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.930692, 41.234601]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16716",
          "modern": "Formia",
          "latin": "Formiae",
          "greek": "Ὁρμίαι/Φορμίαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.605914, 41.256351]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16719",
          "modern": "Cuma",
          "latin": "Cumae",
          "greek": "Κύμη/Κύμαι/Κύμα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.053997, 40.848823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16720",
          "modern": "Miseno",
          "latin": "Misenum",
          "greek": "Μισηνὸς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.084886, 40.786274]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16721",
          "modern": "Pozzuoli",
          "latin": "Puteoli",
          "greek": "Ποτίολοι/Δικαιάρχεια/Δικαιαρχία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.121869, 40.827957]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16725",
          "modern": "Nocera",
          "latin": "Nuceria Alfaterna",
          "greek": "Νουκερία ἡ Ἀλφατέρνα/Νουκρία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.638914, 40.747338]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16726",
          "modern": "Paestum",
          "latin": "Paestum",
          "greek": "Ποσειδωνία/Ποσειδωνιάς/Παιστός/Παῖστον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.005102, 40.421378]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16728",
          "modern": "Castellammare di Velia",
          "latin": "Velia",
          "greek": "Ἐλέα/Ὑέλη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.15732, 40.160423]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16733",
          "modern": "Vibo Valentia",
          "latin": "Hipponion",
          "greek": "Οὐιβῶνα Οὐαλεντία/Ἱππώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.10827, 38.67116]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16737",
          "modern": "Locri",
          "latin": "Lokroi Epizephyrioi",
          "greek": "Λοκροὶ Επιζεφύριοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.23715, 38.20782]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16739",
          "modern": "Crotone",
          "latin": "Croton",
          "greek": "Κρότων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.128852, 39.081572]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16740",
          "modern": "Sibari",
          "latin": "Sybaris",
          "greek": "Σύβαρις/Θούριοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.4927745, 39.71705745]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16741",
          "modern": "Spineta",
          "latin": "Grumentum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.907172, 40.285487]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16743",
          "modern": "Potenza",
          "latin": "Potentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.801241, 40.637944]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16747",
          "modern": "Canosa di Puglia",
          "latin": "Canusium",
          "greek": "Κανύσιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.0651528, 41.2203553]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16754",
          "modern": "Castel di Sangro",
          "latin": "Aufidena",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.10915, 41.78634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16755",
          "modern": "Sulmona",
          "latin": "Sulmo",
          "greek": "Σουλμῶν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.925648, 42.046828]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16756",
          "modern": "Corfinio",
          "latin": "Corfinium",
          "greek": "Κορφίνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.84104, 42.12108]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16757",
          "modern": "Ortona",
          "latin": "Hortona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.40446, 42.35726]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16758",
          "modern": "Chieti",
          "latin": "Teate",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.16699, 42.35148]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16761",
          "modern": "Nola",
          "latin": "Nola",
          "greek": "Νῶλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.520526, 40.927771]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16762",
          "modern": "Sant'Arpino",
          "latin": "Atella",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.25893, 40.96112]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16765",
          "modern": "Alife",
          "latin": "Allifae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.330632, 41.328602]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16766",
          "modern": "San Ferrante",
          "latin": "Kupelternum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.33871, 41.2634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16767",
          "modern": "Venafro",
          "latin": "Venafrum",
          "greek": "Οὐέναφρον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.0461111, 41.4845555]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16768",
          "modern": "Teano",
          "latin": "Teanum Sidicinum",
          "greek": "Τεάνον Σιδικινόν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.072625, 41.248206]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16769",
          "modern": "Cassino",
          "latin": "Casinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.822244, 41.483079]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16770",
          "modern": "Aquino",
          "latin": "Aquinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.69905, 41.49251]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16771",
          "modern": "Ferentino",
          "latin": "Ferentinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.253605, 41.69095]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16772",
          "modern": "Anagni",
          "latin": "Anagnia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.158999, 41.7422346]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16773",
          "modern": "Alatri",
          "latin": "Aletrium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.343955, 41.724822]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16776",
          "modern": "Palestrina",
          "latin": "Praeneste",
          "greek": "Πραίνεστος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.89207, 41.839064]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16777",
          "modern": "Tivoli",
          "latin": "Tibur",
          "greek": "Τιβούρ/Τίβουρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.7971, 41.96566]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16778",
          "modern": "Trevi nel Lazio",
          "latin": "Treba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.248674, 41.862464]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16781",
          "modern": "Fossa",
          "latin": "Aveia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.48826, 42.29278]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16782",
          "modern": "Ofena",
          "latin": "Aufinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.7597037, 42.3268888]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16784",
          "modern": "Santa Maria in Arci",
          "latin": "Cures",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.680562, 42.18449]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16790",
          "modern": "Civita Castellana",
          "latin": "Falerii Veteres",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.4146, 42.2911]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16788",
          "modern": "Nepi",
          "latin": "Nepet",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.347616, 42.242991]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16789",
          "modern": "Santa Maria di Falleri",
          "latin": "Falerii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.359533, 42.299722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16791",
          "modern": "Otricoli",
          "latin": "Ocriculum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.46628, 42.413613]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16792",
          "modern": "Narni",
          "latin": "Nequinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5156299, 42.5176022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16793",
          "modern": "Terni",
          "latin": "Interamna Nahars",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.64332, 42.56044]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16794",
          "modern": "Norcia",
          "latin": "Nursia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.09275, 42.79179]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16795",
          "modern": "Trevi",
          "latin": "Trebiae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.7463, 42.87776]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16796",
          "modern": "Foligno",
          "latin": "Fulginiae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.71746, 42.95394]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16798",
          "modern": "Spello",
          "latin": "Hispellum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.671828, 42.990904]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16799",
          "modern": "Atri",
          "latin": "Hatria",
          "greek": "Ἀδρία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.9787178, 42.58036]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16800",
          "modern": "Ascoli Piceno",
          "latin": "Asculum",
          "greek": "Ἄσκουλον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.57495, 42.8554]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16802",
          "modern": "Urbisaglia",
          "latin": "Urbs Salvia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.38566, 43.19793]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16803",
          "modern": "San Severino Marche",
          "latin": "Septempeda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.19741, 43.23654]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16805",
          "modern": "Matelica",
          "latin": "Matilica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.011574, 43.255]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16806",
          "modern": "Sant'Antonio di Rasina",
          "latin": "Tadinae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.767267, 43.211631]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16807",
          "modern": "Gubbio",
          "latin": "Iguvium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57344, 43.35546]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16808",
          "modern": "San Claudio",
          "latin": "Pausulae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.51664, 43.28414]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16811",
          "modern": "Osimo",
          "latin": "Auximum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.47691, 43.48646]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16813",
          "modern": "Le Muracce",
          "latin": "Ostra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.08581, 43.58424]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16814",
          "modern": "Cingoli",
          "latin": "Cingulum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.21629, 43.37413]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16815",
          "modern": "Urbino",
          "latin": "Urvinum Mataurense",
          "greek": "Οὐρβῖνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.6364, 43.72495]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16816",
          "modern": "Piano di Valeria",
          "latin": "Pitinum Mergens",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.627421, 43.614028]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16818",
          "modern": "Calahorra",
          "latin": "Calagurris Nasica Iulia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.961128, 42.301498]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16823",
          "modern": "Valencia",
          "latin": "Valentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.37564, 39.47533]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16824",
          "modern": "Alcúdia",
          "latin": "Ilici",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.69531, 38.23926]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16825",
          "modern": "Cehegín",
          "latin": "Begastrum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.77212, 38.08753]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16826",
          "modern": "Cartagena",
          "latin": "Carthago Nova",
          "greek": "Καρχηδὼν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.98452, 37.599896]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16830",
          "modern": "Cerro de Montecristo",
          "latin": "Abdera",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.00908, 36.75122]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16831",
          "modern": "Granada",
          "latin": "Iliberri",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.5979291, 37.1764874]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16832",
          "modern": "Málaga",
          "latin": "Malaca",
          "greek": "Μαλάκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.4200163, 36.7196484]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16834",
          "modern": "Santiponce",
          "latin": "Italica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.04344, 37.441411]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16836",
          "modern": "Faro",
          "latin": "Ossonoba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.935113, 37.0153597]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16838",
          "modern": "Évora",
          "latin": "Ebora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.907358, 38.572611]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16839",
          "modern": "Lisboa",
          "latin": "Olisipo",
          "greek": "Ὀλιοσείπων/Ὀλυσιπών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-9.13374, 38.71001]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16841",
          "modern": "Cástulo",
          "latin": "Castulo",
          "greek": "Κασταλῶν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.623611, 38.035833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16843",
          "modern": "Martos",
          "latin": "Tucci",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.9662585, 37.7227776]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16844",
          "modern": "Cabra",
          "latin": "Igabrum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.44755, 37.47115]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16845",
          "modern": "Écija",
          "latin": "Astigi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.0799526, 37.5409268]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16846",
          "modern": "Dénia",
          "latin": "Dianium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.10706, 38.84279]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16847",
          "modern": "Valera de Arriba",
          "latin": "Valeria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.15021, 39.80916]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23821",
          "modern": "Coto la Cepilla (Perales de Milla)",
          "latin": "Mantua",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.072557, 40.388785]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16850",
          "modern": "Segovia",
          "latin": "Segovia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.12638, 40.9501]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16865",
          "modern": "Salamanca",
          "latin": "Salmantica",
          "greek": "Σαλμάντικα/Σαλμαντίς/Ἑλμαντική",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.663025, 40.964968]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16868",
          "modern": "Idanha-a-Velha",
          "latin": "*Igaeditania",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.143956, 39.99664]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16874",
          "modern": "Taormina",
          "latin": "Tauromenium",
          "greek": "Ταυρομένιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.292111, 37.852313]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16875",
          "modern": "Messina",
          "latin": "Zancle",
          "greek": "Ζάγκλη/Μεσσάνα/Μεσσήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.5555232, 38.1923323]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16876",
          "modern": "Tindari",
          "latin": "Tyndaris",
          "greek": "Τυνδαρίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.04308, 38.14357]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16878",
          "modern": "Termini Imerese",
          "latin": "Thermae Himeraeae",
          "greek": "Θερμαί Ἱμεραίαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.69716, 37.98744]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16879",
          "modern": "Palermo",
          "latin": "Panhormus",
          "greek": "Πάνορμος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.3614059, 38.11564]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16881",
          "modern": "Capo Boeo",
          "latin": "Lilybaeum",
          "greek": "Λιλύβαιον/Λιλύβη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.434233, 37.7990835]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16882",
          "modern": "Agrigento",
          "latin": "Akragas",
          "greek": "Ἀκράγας",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.5858994, 37.2918294]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16883",
          "modern": "Lentini",
          "latin": "Leontini",
          "greek": "Λεόντιον/Λεοντῖνοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.002988, 37.279759]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16884",
          "modern": "Catania",
          "latin": "Katane",
          "greek": "Κατάνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.0878345, 37.5024825]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16885",
          "modern": "Lipari",
          "latin": "Liparae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.95373, 38.46708]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16886",
          "modern": "Sant'Antioco",
          "latin": "Sulcis",
          "greek": "Σύλκοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.45288, 39.071279]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16888",
          "modern": "Porto Torres",
          "latin": "Turris Libisonis",
          "greek": "Πύργος Λιβίσωνος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.396486, 40.837646]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16889",
          "modern": "Olbia",
          "latin": "Olbia",
          "greek": "Ὀλβία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.500426, 40.923]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16893",
          "modern": "Aléria",
          "latin": "Alalie",
          "greek": "Ἀλαλίη/Ἀλερία/Ἀλαλίη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.509064, 42.10268]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16896",
          "modern": "Duklja",
          "latin": "Doclea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.265623, 42.468398]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16897",
          "modern": "Lecce",
          "latin": "Lupiae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.16938, 40.35167]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16902",
          "modern": "Durrës",
          "latin": "Dyrrachion",
          "greek": "Δυρράχιον/Ἐπίδαμνος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.44594, 41.31497]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22251",
          "modern": "Prines",
          "latin": "Eleutherna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.67528225, 35.3328599]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16906",
          "modern": "Xàtiva",
          "latin": "Saetabis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.515639, 38.988847]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17026",
          "modern": "Lüleburgaz",
          "latin": "Bergoule",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.36121, 41.41621]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17068",
          "modern": "Thessaloniki",
          "latin": "Thessalonica",
          "greek": "Θεσσαλονίκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.949569, 40.630282]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17070",
          "modern": "Korinthos",
          "latin": "Korinthos",
          "greek": "Κόρινθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.878721, 37.906045]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17075",
          "modern": "Mitiline",
          "latin": "Mytilene",
          "greek": "Μυτιλήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.547048, 39.110475]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17230",
          "modern": "Sassoferrato",
          "latin": "Sentinum",
          "greek": "Σέντινον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.852965, 43.42179]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17231",
          "modern": "Cagli",
          "latin": "Cales",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.648528, 43.546796]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17233",
          "modern": "Nocera Umbra",
          "latin": "Nuceria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.79043, 43.10984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17237",
          "modern": "San Damiano",
          "latin": "Carsulae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5568068, 42.6397991]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17253",
          "modern": "Palo",
          "latin": "Alsium",
          "greek": "Ἄλσιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.102342, 41.9337322]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17254",
          "modern": "Santa Severa",
          "latin": "Pyrgi",
          "greek": "Πύργοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.962938, 42.015321]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17839",
          "modern": "Altino",
          "latin": "Altinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.3994439, 45.5462452]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17965",
          "modern": "Nin",
          "latin": "Aenona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.185342, 44.243719]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18301",
          "modern": "Empúries",
          "latin": "Emporiae",
          "greek": "Ἐμπόριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -575,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.11709, 42.13289]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18310",
          "modern": "Sagunto",
          "latin": "Saguntum",
          "greek": "Ζάκανθα/Σάγουντος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.275887, 39.676219]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18345",
          "modern": "Santarém",
          "latin": "Scallabis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.677012, 39.2339109]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18348",
          "modern": "Alcácer do Sal",
          "latin": "Salacia Imperatoria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.51171, 38.37273]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18364",
          "modern": "Zamora",
          "latin": "Ocelum Duri",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.75461, 41.49909]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18367",
          "modern": "Palencia",
          "latin": "Palantia",
          "greek": "Παλλαντία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.53726, 42.01131]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18388",
          "modern": "Velilla de Ebro",
          "latin": "Celsa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.43399, 41.37254]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18714",
          "modern": "Vetulonia",
          "latin": "Vetulonia",
          "greek": "Οὐετουλόνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.96954, 42.86014]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18718",
          "modern": "Cortona",
          "latin": "Cortona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.98533, 43.27467]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18726",
          "modern": "Collemancio",
          "latin": "Urvinum Hortense",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.52494, 42.98468]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18731",
          "modern": "Giulianova",
          "latin": "Castrum Novum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.96839, 42.73829]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18732",
          "modern": "Villa Feriozzi",
          "latin": "Castrum Truentinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.89843, 42.89134]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18733",
          "modern": "Pescara",
          "latin": "Aternum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.21021, 42.46024]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18742",
          "modern": "Sestino",
          "latin": "Sestinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.29662, 43.70914]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18988",
          "modern": "Silistra",
          "latin": "Durostorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.259474, 44.121183]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "18989",
          "modern": "Devnya",
          "latin": "Marcianopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.585, 43.225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "19910",
          "modern": "Sarmizegetusa",
          "latin": "Sarmizegetusa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.7888, 45.51343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20677",
          "modern": "Chichester",
          "latin": "Noviomagus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.788675, 50.833293]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20678",
          "modern": "Colchester",
          "latin": "Camulodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.900684, 51.890827]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20679",
          "modern": "York",
          "latin": "Eburacum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.087107, 53.95702]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20682",
          "modern": "Silchester",
          "latin": "Calleva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.082249, 51.357436]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20683",
          "modern": "Cirencester",
          "latin": "Korinion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.965215, 51.714026]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20685",
          "modern": "Dorchester",
          "latin": "Durnovaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.437623, 50.715107]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20686",
          "modern": "Cloucester",
          "latin": "Glevum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.248262, 51.860322]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20688",
          "modern": "Exeter",
          "latin": "Isca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.531213, 50.721878]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20689",
          "modern": "Aldborough",
          "latin": "Isurium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.380944, 54.09192]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20691",
          "modern": "Lincoln",
          "latin": "Lindum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.540503, 53.233212]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20692",
          "modern": "Carlisle",
          "latin": "Luguvalium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.941753, 54.89698]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20693",
          "modern": "Carmarthen",
          "latin": "*Moridunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.300877, 51.859026]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20695",
          "modern": "Leicester",
          "latin": "Ratae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.137062, 52.635403]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20696",
          "modern": "Winchester",
          "latin": "Venta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.313583, 51.061022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20697",
          "modern": "Caistor St Edmund",
          "latin": "Venta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.287468, 52.581356]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20698",
          "modern": "Caerwent",
          "latin": "Venta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.767998, 51.611634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20699",
          "modern": "St Albans",
          "latin": "Verulamium",
          "greek": "Οὐρολάνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 43,
          "endyear": 410
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.358582, 51.752923]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20700",
          "modern": "Wroxeter",
          "latin": "*Viroconium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.64326, 52.674805]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21087",
          "modern": "Damascus",
          "latin": "Damascus",
          "greek": "Δαμασκός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.309102, 33.511612]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21090",
          "modern": "Petra",
          "latin": "Petra",
          "greek": "Πέτρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.4464006, 30.3273975]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21091",
          "modern": "Tadmur",
          "latin": "Palmyra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.26148, 34.55357]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21094",
          "modern": "Antakya",
          "latin": "Antiochia",
          "greek": "Ἀντιόχεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.165318, 36.200663]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21096",
          "modern": "Ismant el-Kharab",
          "latin": "Kellis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.09718, 25.51727]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21105",
          "modern": "Armant",
          "latin": "Hermonthis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.544328, 25.622123]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21107",
          "modern": "Al Uqsur (Luxor)",
          "latin": "Diospolis Magna",
          "greek": "Διὸς Πόλις Μεγάλη/Θῆβαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.65285, 25.70247]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21111",
          "modern": "Akhmim",
          "latin": "Panopolis",
          "greek": "Πανὸς Πόλις/Χεμμις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.746075, 26.565878]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21113",
          "modern": "Beirut",
          "latin": "Berytus",
          "greek": "Βηρυτός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.501176, 33.897902]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21114",
          "modern": "Amman",
          "latin": "Philadelpheia",
          "greek": "Φιλαδέλφεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.934602, 31.955128]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21115",
          "modern": "Saida",
          "latin": "Sidon",
          "greek": "Σιδών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.371208, 33.560243]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21116",
          "modern": "Tyre",
          "latin": "Tyrus",
          "greek": "ἡ Τύρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.209358, 33.268071]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21117",
          "modern": "Busra ash-Sham",
          "latin": "Bostra",
          "greek": "Βόστρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.483333, 32.516667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21118",
          "modern": "Baalbek",
          "latin": "Heliopolis",
          "greek": "Ἡλιούπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.203685, 34.006664]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21126",
          "modern": "Shahhat",
          "latin": "Cyrene",
          "greek": "Κυρήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.856169, 32.818736]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21127",
          "modern": "Leptis Magna",
          "latin": "Lepcis Magna",
          "greek": "Νεάπολις/Λέπτις μεγάλη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.290556, 32.639167]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21128",
          "modern": "Sabratha",
          "latin": "Sabratha",
          "greek": "Σάβραθα/Ἀβρότονον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.4836421, 32.8047068]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21131",
          "modern": "Dougga",
          "latin": "Thugga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.218333, 36.422222]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21133",
          "modern": "Esna",
          "latin": "Latopolis",
          "greek": "Λάτων Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.556389, 25.293611]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21134",
          "modern": "Gebelein",
          "latin": "Pathyris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.4833, 25.4833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21135",
          "modern": "Medinet el-Fayum",
          "latin": "Krokodilopolis",
          "greek": "Πτολεμαὶς Εὐεργέτις/Κροκοδίλων Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.835832, 29.320878]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21136",
          "modern": "Ihnasya el-Medina",
          "latin": "Herakleopolis",
          "greek": "Ἡρακλέους Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.934549, 29.08554]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21137",
          "modern": "Mit Rahina",
          "latin": "Memphis",
          "greek": "Μεμφις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -2950,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.254278, 29.849667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21138",
          "modern": "Sa el-Hagar",
          "latin": "Sais",
          "greek": "Σαις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.7695, 30.96716]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21139",
          "modern": "Tell Hisn",
          "latin": "Heliopolis",
          "greek": "Ἡλίου Πόλις/Ὠν/Ὀνίου/Ἡλιούπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.305179, 30.129369]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21142",
          "modern": "Ausim",
          "latin": "Letopolis",
          "greek": "Λητοῦς Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.134607, 30.121581]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21148",
          "modern": "Resafa",
          "latin": "Resafa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.757953, 35.629011]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21149",
          "modern": "Caesarea",
          "latin": "Caesarea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.8912663, 32.4987775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21150",
          "modern": "Beit She'an",
          "latin": "Baithsan",
          "greek": "Βαιθσαν/Σκυθόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.50196, 32.502074]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21151",
          "modern": "Sebastiya",
          "latin": "Samaria",
          "greek": "Σαμάρεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.1893, 32.27633]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21152",
          "modern": "El-Ashmunein",
          "latin": "Hermopolis Magna",
          "greek": "Ἑρμοῦ Πόλις Μεγάλη/Ἑρμοπολιτῶν Πόλις/Ζμουν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.803368214322, 27.781251498676]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21153",
          "modern": "Hisarlık",
          "latin": "Ilium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.23873, 39.9577]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21154",
          "modern": "Dalayanköy",
          "latin": "Antigoneia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.15765, 39.75135]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21155",
          "modern": "Efes",
          "latin": "Ephesos",
          "greek": "Ἔφεσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.339722, 37.941944]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21157",
          "modern": "İzmir",
          "latin": "Smyrna",
          "greek": "Σμύρνη/Σμύρνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.1383, 38.41905]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21158",
          "modern": "Bergama",
          "latin": "Pergamon",
          "greek": "τὸ Πέργαμον/ἡ Πέργαμος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.184167, 39.1325]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21159",
          "modern": "Akhisar",
          "latin": "Thyateira",
          "greek": "Θυάτειρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.840523, 38.922933]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21160",
          "modern": "Sart",
          "latin": "Sardis",
          "greek": "Σάρδεις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.040278, 38.488333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21161",
          "modern": "Alaşehir",
          "latin": "Philadelpheia",
          "greek": "Φιλαδέλφεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.51107, 38.34432]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21162",
          "modern": "Eskihisar",
          "latin": "Laodicea ad Lycum",
          "greek": "Λαοδίκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.10786, 37.83692]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21165",
          "modern": "Trabzon",
          "latin": "Trapezous",
          "greek": "Τραπεζοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.728451, 41.005877]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21166",
          "modern": "Milet",
          "latin": "Miletos",
          "greek": "Μίλητος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.2774885, 37.5292362]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21167",
          "modern": "Güllübahçe",
          "latin": "Priene",
          "greek": "Πριήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.298333, 37.66]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21170",
          "modern": "Değirmendere",
          "latin": "Colophon",
          "greek": "Κολοφών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.142222, 38.115556]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21169",
          "modern": "Sığacık",
          "latin": "Teos",
          "greek": "Τέως",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.785014, 38.177262]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21171",
          "modern": "İskele",
          "latin": "Klazomenai?",
          "greek": "Κλαζομεναί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -550
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.78715, 38.37322]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21172",
          "modern": "Manisa",
          "latin": "Magnesia ad Sipylum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.433333, 38.616667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21173",
          "modern": "Tekin",
          "latin": "Magnesia ad Maeandrum",
          "greek": "Μαγνησία/Μαγνησία ἡ πρὸς Μαιάνδρῳ/Μαγνησία ἡ ἐπὶ Μαιάνδρῳ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.52785, 37.8507]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21174",
          "modern": "Aydın",
          "latin": "Tralles",
          "greek": "Τράλλεις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.833862, 37.859752]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21175",
          "modern": "Sultanhisar",
          "latin": "Nysa",
          "greek": "Νῦσα/Ἄθυμβρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.144999, 37.903405]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21176",
          "modern": "Aliağaçiftliği",
          "latin": "Antiochia ad Maeandrum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.54922, 37.87323]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21177",
          "modern": "Hisar",
          "latin": "Attouda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.80588, 37.84219]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21178",
          "modern": "Geyre",
          "latin": "Aphrodisias",
          "greek": "Ἀφροδισιάς/Νινόη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.723217, 37.709463]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21179",
          "modern": "Yenicekent",
          "latin": "Tripolis ad Maeandrum",
          "greek": "Τρίπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.95087, 38.03879]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21180",
          "modern": "Vakıf",
          "latin": "Herakleia Salbake",
          "greek": "Ἡράκλεια Σαλβάκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.98571, 37.62259]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21181",
          "modern": "Medet",
          "latin": "Apollonia Salbakes",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.02296, 37.50631]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21182",
          "modern": "Kızılca",
          "latin": "Sebastopolis",
          "greek": "Σεβαστόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.1376104, 37.4857445]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21183",
          "modern": "Eski Kale",
          "latin": "Tabai",
          "greek": "Τάβαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.84515, 37.43273]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21184",
          "modern": "Yorga",
          "latin": "*Kidrama",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.1143476, 37.3451918]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21185",
          "modern": "Eskihisar",
          "latin": "Stratonikeia",
          "greek": "Στρατονίκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.0645, 37.31359]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21186",
          "modern": "Milas",
          "latin": "Mylasa",
          "greek": "Μύλασα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.789697, 37.316871]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21187",
          "modern": "Bodrum",
          "latin": "Halikarnassos",
          "greek": "Ἁλικαρνασσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.423881, 37.037892]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21188",
          "modern": "Dalyan",
          "latin": "Caunus",
          "greek": "Καῦνος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.621536, 36.825909]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21189",
          "modern": "Varvıl",
          "latin": "Bargylia",
          "greek": "Βαργύλια/Βαρβύλια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.589505, 37.195835]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21190",
          "modern": "Tekir",
          "latin": "Knidos",
          "greek": "Κνίδος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.37404, 36.686188]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21191",
          "modern": "Asınkalesi",
          "latin": "Iasos",
          "greek": "Ἴασος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.584578, 37.279525]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21192",
          "modern": "Karpuzlu",
          "latin": "Alinda",
          "greek": "Ἄλινδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.827688, 37.558489]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21193",
          "modern": "Araphisar",
          "latin": "Alabanda",
          "greek": "Ἀλάβανδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.98487, 37.59298]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21194",
          "modern": "Samos",
          "latin": "Samos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.9313499, 37.6910298]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21196",
          "modern": "Sülümenli",
          "latin": "Blaundos",
          "greek": "Βλέανδρος/Βλαῦνδος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.208934, 38.357811]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21197",
          "modern": "Siledik",
          "latin": "Stratonicaea",
          "greek": "Στρατονίκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.801765, 39.142114]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21198",
          "modern": "Çavdarhisar",
          "latin": "Aizanoi",
          "greek": "Αἰζανοί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.609445, 39.201251]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21199",
          "modern": "Behram Köyü",
          "latin": "Assos",
          "greek": "Ἄσσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.337061, 39.490601]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21202",
          "modern": "Foça",
          "latin": "Phocaea",
          "greek": "Φώκαια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.75261, 38.6684]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21201",
          "modern": "Ildır Köyrü",
          "latin": "Erythrai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.48103, 38.38122]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21203",
          "modern": "Nemrut Limanı",
          "latin": "Cyme",
          "greek": "Κύμη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.936283, 38.75953]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21204",
          "modern": "İzmit",
          "latin": "Nicomedia",
          "greek": "Νικομήδεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.923486, 40.76445]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21205",
          "modern": "Pamukkale",
          "latin": "Hierapolis",
          "greek": "Ἱεράπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.12418, 37.92925]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21208",
          "modern": "Sinop",
          "latin": "Sinope",
          "greek": "Σινώπη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.14885, 42.0206]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21209",
          "modern": "Taşköprü",
          "latin": "Pompeiopolis",
          "greek": "Πομπηιόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.210095, 41.510056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21210",
          "modern": "Viranşehir",
          "latin": "Soloi",
          "greek": "Σόλοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.542284, 36.744896]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21211",
          "modern": "Bolu",
          "latin": "Bithynion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.611561, 40.739479]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21212",
          "modern": "İznik",
          "latin": "Nicaea",
          "greek": "Νίκαια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.715443, 40.426679]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21213",
          "modern": "Gemlik",
          "latin": "Prusias ad Mare",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.15639, 40.432469]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21214",
          "modern": "Mudanya",
          "latin": "Myrleia",
          "greek": "Απάμεια Μύρλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.8827425, 40.3755895]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21215",
          "modern": "Gölyazı",
          "latin": "Apollonia ad Rhyndacum",
          "greek": "Ἀπολλωνία ἐπὶ Ῥυνδακῷ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.68489, 40.17022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21216",
          "modern": "Yalikabat",
          "latin": "Sestos",
          "greek": "Σηστός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.38916, 40.21343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21217",
          "modern": "Baklaburnu",
          "latin": "Lysimacheia",
          "greek": "Καρδία/Λυσιμάχεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.75081, 40.548232]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21218",
          "modern": "Tahtalı",
          "latin": "Caesarea Germanice",
          "greek": "Γερμανικόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.8815254, 40.1744519]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21219",
          "modern": "Bursa",
          "latin": "Prusa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.061495, 40.184818]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21220",
          "modern": "Ankara",
          "latin": "Ancyra",
          "greek": "Ἄνκυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.858128, 39.944387]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21221",
          "modern": "Çankırı",
          "latin": "Gangra",
          "greek": "Γερμανικόπολις/Γάγγρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.62734, 40.5959]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21222",
          "modern": "Amasya",
          "latin": "Amaseia",
          "greek": "Ἀμάσεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.8280877, 40.6549427]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21223",
          "modern": "Kılıçlı",
          "latin": "Comana Pontica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.63872, 40.35756]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21224",
          "modern": "Sulusaray",
          "latin": "Sebastopolis",
          "greek": "Σεβαστόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.0846306, 39.9971924]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21225",
          "modern": "Sivas",
          "latin": "Sebasteia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.017879, 39.747662]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21232",
          "modern": "Selimiye",
          "latin": "Side",
          "greek": "Σίδη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.390552, 36.768137]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21233",
          "modern": "Fatsa",
          "latin": "Polemonion",
          "greek": "Πολεμώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.530278, 41.020013]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21234",
          "modern": "Samsun",
          "latin": "Amisos",
          "greek": "Ἀμισός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.33128, 41.292782]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21235",
          "modern": "Yeşilyayla",
          "latin": "Nicopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.1476861, 40.1366024]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21237",
          "modern": "Haraba",
          "latin": "Arsamosata",
          "greek": "Ἀρσαμόσατα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.5109175, 38.6608665]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21238",
          "modern": "Samsat",
          "latin": "Samosata",
          "greek": "Σαμόσατα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.530357, 37.525756]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21239",
          "modern": "Arslantepe",
          "latin": "Melitene",
          "greek": "Μελιτηνή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.361152, 38.382217]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21240",
          "modern": "Şar",
          "latin": "Comana",
          "greek": "τά Κόμανα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.325892506607, 38.329522707484]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21241",
          "modern": "Pınarbaşı",
          "latin": "Ariaratheia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.391, 38.722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21242",
          "modern": "Kayseri",
          "latin": "Caesarea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.483548, 38.733252]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21243",
          "modern": "Kemerhisar",
          "latin": "Tyana",
          "greek": "Τύανα/Τυανα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.568378, 37.817319]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21244",
          "modern": "Aksaray",
          "latin": "Garsaura",
          "greek": "Ἀρχελαίς/Κολώνεια/Γαρσάουρα/Γαρσαύιρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.028835, 38.374149]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21245",
          "modern": "Gözlü Kule",
          "latin": "Tarsus",
          "greek": "Ταρσός/Ταρσοί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.89592, 36.91242]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21246",
          "modern": "Adana",
          "latin": "Adana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.334166, 36.985809]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21247",
          "modern": "Yakapınar",
          "latin": "Mopsouhestia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.62389, 36.95779]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21248",
          "modern": "Yumurtalık",
          "latin": "Aigaiai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.789487, 36.769676]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21249",
          "modern": "Karataş",
          "latin": "Mallos",
          "greek": "Μαλλός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.4852, 36.756188]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21252",
          "modern": "Erzurum",
          "latin": "Autisparate",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.276889, 39.907739]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21253",
          "modern": "Amasra",
          "latin": "Amastris",
          "greek": "Ἄμαστρις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.385648, 41.746969]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21254",
          "modern": "Karadeniz Ereğli",
          "latin": "Heraclea",
          "greek": "Ἡράκλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.414722, 41.284722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21255",
          "modern": "Konuralp",
          "latin": "Prusias ad Hypium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.148171, 40.905988]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21256",
          "modern": "Şarhöyük",
          "latin": "Dorylaion",
          "greek": "Δορύλαιον/Δορύλλειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.517247, 39.783301]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21257",
          "modern": "Karahüyük",
          "latin": "Midaion",
          "greek": "Μίδαιον/Μιδάειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.8455876, 39.7996237]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21258",
          "modern": "Seyitgazi",
          "latin": "Nakoleia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.6947222, 39.4447222]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21259",
          "modern": "Ballıhisar",
          "latin": "Pessinous",
          "greek": "Πεσσινοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.58297, 39.33149]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21260",
          "modern": "Hisarköy",
          "latin": "Amorion",
          "greek": "Ἀμόριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.295917, 39.019467]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21261",
          "modern": "İscehisar",
          "latin": "Dokimeion",
          "greek": "Δοκίμειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.7551101, 38.8619419]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21262",
          "modern": "Sülün",
          "latin": "Prymnessos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.5696416, 38.6981943]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21263",
          "modern": "Şuhut",
          "latin": "Synnada",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.55, 38.5333333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21264",
          "modern": "Pınarcık",
          "latin": "Appia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.9841704, 39.0246078]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21265",
          "modern": "Kütahya",
          "latin": "Kotiaeion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.9833333, 39.4166667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21266",
          "modern": "Gediz",
          "latin": "Kadoi",
          "greek": "Κάδοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.3918108, 38.9907992]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21267",
          "modern": "Simav",
          "latin": "Synaos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.97761, 39.092739]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21268",
          "modern": "Boğazköy",
          "latin": "Ankyra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.85328, 39.1554]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21269",
          "modern": "Dursunbey",
          "latin": "Hadrianeia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.63295, 39.58831]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21270",
          "modern": "Orhaneli",
          "latin": "Hadrianoi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.988621, 39.906719]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21271",
          "modern": "Karaselendi",
          "latin": "Silandos",
          "greek": "Σίλανδος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.8232652, 38.7536287]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21272",
          "modern": "Burgaz",
          "latin": "Tabala",
          "greek": "Τάβαλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.81076, 38.61964]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21273",
          "modern": "Sidas Kale",
          "latin": "Saittai",
          "greek": "Σαΐτται",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.61884, 38.79014]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21274",
          "modern": "Güre",
          "latin": "Bagis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.15841, 38.66531]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21275",
          "modern": "Uşak",
          "latin": "Temenouthyrai",
          "greek": "Τημενοθύραι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.40819, 38.682301]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21276",
          "modern": "Ortaköy",
          "latin": "Traianoupolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.5470197, 38.6859865]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21277",
          "modern": "Ahat Köyü",
          "latin": "Akmonia",
          "greek": "Ἀκμωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.7714539, 38.658994]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21278",
          "modern": "Karasandıklı",
          "latin": "Brouzos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.1719199, 38.527823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21279",
          "modern": "Emirhisar",
          "latin": "Eukarpia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.1112911, 38.4755426]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21280",
          "modern": "Kocahüyük",
          "latin": "Stektorion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.143764, 38.33261]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21281",
          "modern": "Dinar",
          "latin": "Apamea",
          "greek": "Ἀπάμεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.17353, 38.07289]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21301",
          "modern": "Megara Hyblaea",
          "latin": "Megara Hyblaia",
          "greek": "Μέγαρα/Μέγαρες Ὑβλαῖοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.18273, 37.2038]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21303",
          "modern": "Cattolica Eraclea",
          "latin": "Heraclea Minoa",
          "greek": "Ἡράκλεια Μινῴα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.280904, 37.394042]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21306",
          "modern": "Policoro",
          "latin": "Heraclea",
          "greek": "Ἡράκλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.67048, 40.21973]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21307",
          "modern": "Metaponto",
          "latin": "Metapontum",
          "greek": "Μεταπόντιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.824063, 40.383868]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21309",
          "modern": "Torre Chiaruccia",
          "latin": "Castrum Novum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -287,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.82972, 42.03887]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21310",
          "modern": "Mondragone",
          "latin": "Sinuessa",
          "greek": "Σινοέσση",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.85, 41.149444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21311",
          "modern": "Sora",
          "latin": "Sora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.61451, 41.72091]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21312",
          "modern": "Segni",
          "latin": "Signia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.026189, 41.695274]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21313",
          "modern": "Runovići",
          "latin": "Novae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.2399145, 43.3870634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21323",
          "modern": "Castiglione",
          "latin": "Gabii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 1453
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.71738, 41.8871]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21326",
          "modern": "Gaeta",
          "latin": "Caieta",
          "greek": "Καιήτη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.58687, 41.20889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21329",
          "modern": "Isoletta",
          "latin": "Fregellae",
          "greek": "Φρεγέλλαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.538889, 41.536667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21330",
          "modern": "Pratica di Mare",
          "latin": "Lavinium",
          "greek": "Λαβίνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.48009, 41.66126]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21331",
          "modern": "Lanuvio",
          "latin": "Lanuvium",
          "greek": "Λανούβιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.6974, 41.67439]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21332",
          "modern": "Tuscolo",
          "latin": "Tusculum",
          "greek": "Τούσκλον/Τούσκουλον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.709916, 41.798322]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21334",
          "modern": "Norma",
          "latin": "Norba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.960278, 41.591667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21335",
          "modern": "Pignataro Interamna",
          "latin": "Interamna Lirenas",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.75299, 41.42855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21336",
          "modern": "Porto Clementino",
          "latin": "Graviscae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.710278, 42.212778]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21339",
          "modern": "Lucus Feronia",
          "latin": "Lucus Feroniae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.596872, 42.129717]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21340",
          "modern": "La Civitucola",
          "latin": "Capena",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.537935, 42.172778]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21341",
          "modern": "Ferento",
          "latin": "Ferentium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.1316, 42.48876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21345",
          "modern": "Saturnia",
          "latin": "*Aurinia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.504827, 42.666255]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21346",
          "modern": "Treglia",
          "latin": "Trebula Balliensium",
          "greek": "Τρήβουλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.261753, 41.227061]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21348",
          "modern": "Caiazzo",
          "latin": "Caiatia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.36849, 41.17533]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21349",
          "modern": "San Salvatore Telesino",
          "latin": "Telesia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.503278, 41.223736]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21352",
          "modern": "Pompei",
          "latin": "Pompeii",
          "greek": "Πομπεῖα/Πομπήια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 79
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.485429, 40.74941]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21353",
          "modern": "Ercolano",
          "latin": "Herculaneum",
          "greek": "Ἡράκλειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 79
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.34731, 40.80547]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21356",
          "modern": "Siris",
          "latin": "Siris",
          "greek": "Σῑρις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": -550
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.66822, 40.16577]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21357",
          "modern": "Strongoli",
          "latin": "Petelia",
          "greek": "Πετηλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.05108, 39.266064]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21358",
          "modern": "Baeza",
          "latin": "Vivatia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.46926, 37.9901]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21359",
          "modern": "Ciudad Rodrigo",
          "latin": "Mirobriga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.53375, 40.59752]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21360",
          "modern": "Cerro del Cabezo",
          "latin": "Mirobriga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.0842799, 38.8204551]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21361",
          "modern": "Santiago do Cacém",
          "latin": "Mirobriga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.683817, 38.009689]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21368",
          "modern": "Orašje",
          "latin": "Margum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.077871, 44.696115]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21372",
          "modern": "Gračanica",
          "latin": "Ulpiana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.175117, 42.596392]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21373",
          "modern": "Caričin Grad",
          "latin": "Iustiniana Prima",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 535,
          "endyear": 615
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.669972, 42.953247]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21375",
          "modern": "Drobeta-Turnu Severin",
          "latin": "Drobeta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.653979, 44.622958]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21377",
          "modern": "Svishtov",
          "latin": "Novae",
          "greek": "Νοοῦαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.393803, 43.612792]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21378",
          "modern": "Gigen",
          "latin": "Oescus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.465476, 43.710514]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21379",
          "modern": "Hisarya",
          "latin": "Diocletianopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.705119, 42.499957]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21380",
          "modern": "Yambol",
          "latin": "Kabyle",
          "greek": "Καβύλη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.484167, 42.550556]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21381",
          "modern": "Sozopol",
          "latin": "Apollonia Pontica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.694272, 42.420355]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21382",
          "modern": "Nikyup",
          "latin": "Nicopolis ad Istrum",
          "greek": "Νικόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.612232, 43.217925]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21384",
          "modern": "Razgrad",
          "latin": "Abritus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.551667, 43.521111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21386",
          "modern": "Montana",
          "latin": "Montana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.2257292, 43.4085161]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21387",
          "modern": "Orșova",
          "latin": "Dierna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.407644, 44.738264]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21388",
          "modern": "Adamclisi",
          "latin": "Tropaeum Traiani",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.944226, 44.091987]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21389",
          "modern": "Constanța",
          "latin": "Tomi",
          "greek": "Τόμοι/Τόμις/Τῶμις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.661176, 44.172489]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21390",
          "modern": "Igliţa",
          "latin": "Troesmis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.1951, 45.1432]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21391",
          "modern": "Mangalia",
          "latin": "Callatis",
          "greek": "Κάλλατις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.58516, 43.81307]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21392",
          "modern": "Balchik",
          "latin": "Dionysopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.163044, 43.409932]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21393",
          "modern": "Varna",
          "latin": "Odessus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.91835, 43.200247]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21394",
          "modern": "Nesebar",
          "latin": "Mesembria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.730787, 42.658743]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21395",
          "modern": "Pomorie",
          "latin": "Anchialus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.641374, 42.555937]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21396",
          "modern": "Vize",
          "latin": "Bizye",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.7651736, 41.5751117]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21397",
          "modern": "Tekirdağ",
          "latin": "Bisanthe",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.5166667, 40.9833333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21398",
          "modern": "Kermeyan",
          "latin": "Aproi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.1073556, 40.9269409]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21399",
          "modern": "Marmara Ereğlisi Adliyesi",
          "latin": "Perinthus",
          "greek": "Πέρινθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.95454, 40.97089]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21400",
          "modern": "Silivri",
          "latin": "Selymbria",
          "greek": "Σηλυμβρία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.26829, 41.080158]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21402",
          "modern": "Anamur",
          "latin": "Anemourion",
          "greek": "Ἀνεμούριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.80167, 36.02061]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21403",
          "modern": "Aydıncık",
          "latin": "Celenderis",
          "greek": "Κελένδερις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.32306, 36.14408]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21404",
          "modern": "Ermenek",
          "latin": "Germanicopolis",
          "greek": "Γερμανικόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.894428, 36.640121]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21405",
          "modern": "Mut",
          "latin": "Ninica",
          "greek": "Κλαυδιόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.44156, 36.65168]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21406",
          "modern": "Silifke",
          "latin": "Seleucia ad Calycadnum",
          "greek": "Σελεύκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.924129, 36.381214]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21407",
          "modern": "Uzuncaburç",
          "latin": "Diocaesarea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.925266, 36.581229]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21408",
          "modern": "Plovdiv",
          "latin": "Philippopolis",
          "greek": "Φιλιππόπολις/Φιλιπούπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.749106, 42.147439]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21410",
          "modern": "Skopje",
          "latin": "Scupi",
          "greek": "Σκοῦποι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 81,
          "endyear": 518
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.391437, 42.016885]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21411",
          "modern": "Stobi",
          "latin": "Stobi",
          "greek": "Στόβοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.974974, 41.552591]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21412",
          "modern": "Ohrid",
          "latin": "Lychnidos",
          "greek": "Λυχνιδός/Λυχνίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.793813, 41.114619]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21413",
          "modern": "Bitola",
          "latin": "Herakleia",
          "greek": "Ἡράκλεια Λυγκηστίς/Ἡράκλεια Λύγκου",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.342, 41.011]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21415",
          "modern": "Pojan",
          "latin": "Apollonia",
          "greek": "Ἀπολλωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.470413, 40.720583]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21417",
          "modern": "Hekal",
          "latin": "Byllis",
          "greek": "Βύλλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.7375, 40.5403]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21422",
          "modern": "Finiq",
          "latin": "Phoinike",
          "greek": "Φοινίκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.056443, 39.91395]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21423",
          "modern": "Istria",
          "latin": "Histria",
          "greek": "Ἴστρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.7748, 44.5476]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21424",
          "modern": "Filyos (Hisarönü)",
          "latin": "Tieion",
          "greek": "Τίος/Τιεῖον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.023112, 41.561257]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21425",
          "modern": "Belkiz Kale",
          "latin": "Cyzicus",
          "greek": "Κύζικος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.874127, 40.389806]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21426",
          "modern": "Kemer",
          "latin": "Parium",
          "greek": "Πάριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.0670163, 40.4259096]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21428",
          "modern": "Yuntdağı Köseler",
          "latin": "Aigai",
          "greek": "Αἰγαί/Αἰγαῖαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.1897746, 38.8319945]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21429",
          "modern": "Selçikler",
          "latin": "Sebaste",
          "greek": "Σεβαστή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.65809, 38.49517]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21435",
          "modern": "Deliktaş",
          "latin": "Olympus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.473427, 36.3953547]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21436",
          "modern": "Tekirova",
          "latin": "Phaselis",
          "greek": "Φασηλίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.551573, 36.524579]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21437",
          "modern": "Yeniceköy",
          "latin": "Gagai",
          "greek": "Γάγαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.3475, 36.28878]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21438",
          "modern": "Girme",
          "latin": "Cremna",
          "greek": "Κρῆμνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.688911, 37.49876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21439",
          "modern": "Sağrak",
          "latin": "Adada",
          "greek": "Ἄδαδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.984032, 37.577527]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21440",
          "modern": "Ağlasun",
          "latin": "Sagalassos",
          "greek": "Σαγαλασσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.519444, 37.678056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21441",
          "modern": "Selef",
          "latin": "Seleucia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.61754, 37.89958]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21442",
          "modern": "Yalvaç",
          "latin": "Antiochia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.19049, 38.30466]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21443",
          "modern": "Ladik",
          "latin": "Laodikeia (Katakekaumene)",
          "greek": "Λαοδίκεια Κατακεκαυμένη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.3745104, 38.1910079]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21444",
          "modern": "Konya",
          "latin": "Iconium",
          "greek": "Ἰκόνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.492331, 37.872202]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21445",
          "modern": "Altınkaya",
          "latin": "Selge",
          "greek": "Σέλγη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.127222, 37.229444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21448",
          "modern": "Belkis",
          "latin": "Aspendos",
          "greek": "Ἄσπενδος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.172222, 36.938889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21449",
          "modern": "Asar Köyü",
          "latin": "Sillyon",
          "greek": "Σίλλυον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.99011, 36.99357]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21450",
          "modern": "Aksu",
          "latin": "Perge",
          "greek": "Πέργη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.854274, 36.961406]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21451",
          "modern": "Güllük Dağ",
          "latin": "Termessos",
          "greek": "Τερμησσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.467197, 36.982996]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21452",
          "modern": "Aykırca",
          "latin": "Arykanda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.059917, 36.513517]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21454",
          "modern": "Yuvalılar",
          "latin": "Limyra",
          "greek": "Λίμυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.170519, 36.342831]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21455",
          "modern": "Demre",
          "latin": "Myra",
          "greek": "Μύρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.985559, 36.258393]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21457",
          "modern": "Yavı",
          "latin": "Kyaneai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.818226, 36.247475]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21458",
          "modern": "Çukurbağ",
          "latin": "Phellos",
          "greek": "Φελλός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.662237, 36.242821]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21460",
          "modern": "Gelemiş",
          "latin": "Patara",
          "greek": "Πάταρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.314279, 36.26018]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21462",
          "modern": "Kınık",
          "latin": "Xanthos",
          "greek": "Ξάνθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.31836, 36.355934]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21463",
          "modern": "Düver",
          "latin": "Tlos",
          "greek": "Τλῶς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.422153, 36.552471]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21464",
          "modern": "Minare",
          "latin": "Pinara",
          "greek": "Πίναρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.256891, 36.489655]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21465",
          "modern": "Fethiye",
          "latin": "Telmessos",
          "greek": "Τελμισσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.105772, 36.620899]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21467",
          "modern": "Dodurga",
          "latin": "Sidyma",
          "greek": "Σίδυμα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.191694, 36.41025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21468",
          "modern": "İncealiler",
          "latin": "Oenoanda",
          "greek": "Οἰνόανδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.549677, 36.809338]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21469",
          "modern": "Ibecik",
          "latin": "Boubon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.40705, 36.96906]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21470",
          "modern": "Gölhisar",
          "latin": "Cibyra",
          "greek": "Κίβυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.492733, 37.159273]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21471",
          "modern": "Çölkayağı",
          "latin": "Balboura",
          "greek": "Βαρβουλεύς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.581139, 36.95522]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21472",
          "modern": "Honaz",
          "latin": "Colossae",
          "greek": "Κολοσσαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.2598, 37.78671]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21473",
          "modern": "Kapıkırı",
          "latin": "Herakleia",
          "greek": "Ἡράκλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.52707, 37.49759]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21475",
          "modern": "Notion",
          "latin": "Notion",
          "greek": "Νότιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.1973, 37.99162]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21487",
          "modern": "Sedra Çay",
          "latin": "Syedra",
          "greek": "Σύεδρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.147654, 36.44606]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21491",
          "modern": "Zengibar Kalesi",
          "latin": "Isaura Nova",
          "greek": "Ίσαυρα Νέα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.342442, 37.193604]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21494",
          "modern": "Ayaş",
          "latin": "Elaioussa",
          "greek": "Ἐλαιοῦσσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.174642, 36.4812]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21496",
          "modern": "Anavarza",
          "latin": "Anazarbos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.898345, 37.255638]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21498",
          "modern": "Gözene",
          "latin": "Epiphaneia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.134467, 36.975624]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21499",
          "modern": "Bodrum Kalesi",
          "latin": "Hierapolis",
          "greek": "Καστάβαλα/Ίεράπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.18725, 37.17723]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21500",
          "modern": "Belkis",
          "latin": "Zeugma",
          "greek": "Σελεύκεια/Ζεῦγμα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.867771, 37.056925]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21501",
          "modern": "Çevlik",
          "latin": "Seleukeia Pieria",
          "greek": "Σελεύκεια ἡ ἐν Πιερίᾳ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.93815, 36.11705]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21502",
          "modern": "Antalya",
          "latin": "Attaleia",
          "greek": "Ἀττάλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.70541, 36.8839]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21505",
          "modern": "Latakia",
          "latin": "Laodicea",
          "greek": "Λαοδίκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.782047, 35.513994]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21507",
          "modern": "Afamiyah",
          "latin": "Apamea",
          "greek": "Ἀπάμεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.402509, 35.422241]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21509",
          "modern": "Nebi Houri",
          "latin": "Cyrrus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.956398, 36.744679]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21510",
          "modern": "Qal'at es-Salihiye",
          "latin": "Doura",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.73059, 34.74792]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21511",
          "modern": "Shaqqa (Sakkaia)",
          "latin": "Sakkaia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.6972222, 32.8972222]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21512",
          "modern": "Shahba",
          "latin": "Philippopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.62822, 32.853937]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21513",
          "modern": "Qanawat (Canatha)",
          "latin": "Canatha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.618509, 32.754199]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21514",
          "modern": "As-Suwayda",
          "latin": "Dionysias",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.565045, 32.706002]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21517",
          "modern": "Daraa",
          "latin": "Adraha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.099747, 32.612443]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21519",
          "modern": "Byblos",
          "latin": "Byblos",
          "greek": "Βύβλος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.645732, 34.119026]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21520",
          "modern": "Karaman",
          "latin": "Laranda",
          "greek": "Λάρανδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.215275, 37.18347]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21521",
          "modern": "Kerti Hüyük",
          "latin": "Derbe",
          "greek": "Δέρβη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.361453, 37.348569]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21522",
          "modern": "Hatunsaray",
          "latin": "Lystra",
          "greek": "Λύστρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.33849, 37.60196]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21523",
          "modern": "Bostandere",
          "latin": "Ouasada",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.9117536, 37.5020749]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21524",
          "modern": "Hisartepe",
          "latin": "Amblada",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.7386345, 37.518578]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21525",
          "modern": "Beyşehir",
          "latin": "*Mistea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.7261111, 37.6763889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21526",
          "modern": "Yunuslar",
          "latin": "Pappa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.9231332, 37.9030719]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21527",
          "modern": "Kıyakdede",
          "latin": "Neapolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.4813228, 37.9685036]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21528",
          "modern": "Ilgın",
          "latin": "Tyriaion?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.9138889, 38.2791667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21529",
          "modern": "Doğanhisar",
          "latin": "Hadrianoupolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.6780556, 38.1447222]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21530",
          "modern": "Akşehir",
          "latin": "Philomelion",
          "greek": "Φιλομήλιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.415409, 38.355911]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21531",
          "modern": "Babadat",
          "latin": "(Col. Iulia Aug. Felix) Germa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.6268837, 39.5317603]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21532",
          "modern": "Tatarlı",
          "latin": "Metropolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.4948021, 38.2418471]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21533",
          "modern": "Barla",
          "latin": "Parlais",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.783333, 38.016667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21534",
          "modern": "Gönen",
          "latin": "Conana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.515, 37.956]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21535",
          "modern": "Uluborlu",
          "latin": "Apollonia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.470512, 38.072539]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21536",
          "modern": "Işıklı",
          "latin": "Fulvia",
          "greek": "Εὐμένεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.85059, 38.32585]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21537",
          "modern": "Karacabey",
          "latin": "Miletopolis",
          "greek": "Μιλητούπολις/Μιλητόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.3608046, 40.2097627]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21538",
          "modern": "Ergili",
          "latin": "Daskyleion",
          "greek": "Δασκύλειον/Δασκύλιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.05065, 40.13271]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21539",
          "modern": "Alexa",
          "latin": "Poimanenon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.892299, 40.07897]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21540",
          "modern": "Sarıköy",
          "latin": "Zeleia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.5950731, 40.2035643]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21541",
          "modern": "Lapseki",
          "latin": "Lampsacus",
          "greek": "Λάμψακος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.68998, 40.34869]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21542",
          "modern": "Çalıdağı Köyü",
          "latin": "Kebren",
          "greek": "Κέβρην",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.58697, 39.7125]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21543",
          "modern": "Ören",
          "latin": "Adramyttium",
          "greek": "Ἀδραμύττιον/Ἀτραμύττιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.934551, 39.504028]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21544",
          "modern": "Zeytindağ",
          "latin": "Elaia",
          "greek": "Ἐλαία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.041, 38.9416]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21549",
          "modern": "Üçkapı",
          "latin": "Ariassos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.471312, 37.181622]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21550",
          "modern": "Kozan",
          "latin": "Pednelissos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.934141, 37.214237]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21551",
          "modern": "Sırtköy",
          "latin": "Etenna",
          "greek": "Ἔτεννα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.44916, 36.99892]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21552",
          "modern": "Belenli",
          "latin": "Olbasa",
          "greek": "Ὄλβασα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.9957318, 37.3045498]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21553",
          "modern": "Çomaklı",
          "latin": "Pogla",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.2498305, 37.2870614]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21554",
          "modern": "Ürkütlü",
          "latin": "Comama",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.312003, 37.320709]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21559",
          "modern": "Alanya",
          "latin": "Korakesion",
          "greek": "Κορακήσιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.993729, 36.533634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21560",
          "modern": "Kızkalesi",
          "latin": "Korykos",
          "greek": "Κώρυκος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.154167, 36.465278]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21561",
          "modern": "Dipkarpaz",
          "latin": "Karpasia",
          "greek": "Καρπασία/Καρπάσεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.37319, 35.62624]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21562",
          "modern": "Salamis",
          "latin": "Salamis",
          "greek": "Σαλαμίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.90294, 35.17926]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21563",
          "modern": "Larnaca",
          "latin": "Kition",
          "greek": "Κίτιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.6306, 34.92319]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21564",
          "modern": "[Amathous]",
          "latin": "Amathous",
          "greek": "Ἀμαθοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.1438299, 34.712174]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21565",
          "modern": "Kourion",
          "latin": "Kourion",
          "greek": "Κούριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.8877, 34.6642]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21566",
          "modern": "Kouklia",
          "latin": "Palaipaphos",
          "greek": "Παλαίπαφος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.573711, 34.707147]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21567",
          "modern": "Tripolis",
          "latin": "Tripolis",
          "greek": "Τρίπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.817833, 34.447]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21568",
          "modern": "Arwad",
          "latin": "Arados",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.858333, 34.856111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21569",
          "modern": "Tell 'Arqa",
          "latin": "Arca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.04677, 34.53049]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21570",
          "modern": "Tell Nebi Mend",
          "latin": "Laodicea ad Libanum",
          "greek": "Λαοδίκεια πρὸς Λιβάνῳ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.51879, 34.55557]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21572",
          "modern": "Sarepta",
          "latin": "Sarepta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.295048, 33.46431]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21573",
          "modern": "Politiko",
          "latin": "Tamassos",
          "greek": "Ταμασσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.24431, 35.02967]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21574",
          "modern": "Dali",
          "latin": "Idalion",
          "greek": "Ἰδάλιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.423, 35.01586]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21583",
          "modern": "Veio",
          "latin": "Veii",
          "greek": "Οὐιοί/Βηϊεντία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.40191, 42.02273]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21584",
          "modern": "Piammiano",
          "latin": "Statonia?",
          "greek": "Στατωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.26693, 42.51062]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21588",
          "modern": "Ansedonia",
          "latin": "Cosae",
          "greek": "Κόσσαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.28779, 42.4126]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21589",
          "modern": "Vulci",
          "latin": "Vulci",
          "greek": "Ὄλκιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.631667, 42.418889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21590",
          "modern": "Magliano in Toscana",
          "latin": "Heba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.3077258, 42.5856858]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21591",
          "modern": "Henchir-Rougga",
          "latin": "Bararus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.791179, 35.211896]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21592",
          "modern": "El Djem",
          "latin": "Thysdrus",
          "greek": "Θύσδρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.706877, 35.296493]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21595",
          "modern": "Ras-Dimas",
          "latin": "Thapsus",
          "greek": "Θάψος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.042848, 35.622554]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21596",
          "modern": "Henchir-Zembra",
          "latin": "Uluzibbira",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.441026, 35.958576]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21597",
          "modern": "Sidi Khelifa",
          "latin": "Pheradi Maius",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.398315, 36.249678]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21598",
          "modern": "Aïn Batria",
          "latin": "*Biia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.256049, 36.267904]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21600",
          "modern": "Henchir-Kasbat",
          "latin": "Thuburbo Maius",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.904448, 36.40112]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21602",
          "modern": "Oudna",
          "latin": "Uthina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.172291, 36.607458]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21603",
          "modern": "Marisa",
          "latin": "Carpis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.557615, 36.76136]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21606",
          "modern": "Souk el-Abiod",
          "latin": "Pupput",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.562216, 36.392998]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21608",
          "modern": "Henchir-bou-Chateur",
          "latin": "Utica",
          "greek": "Ἰτύκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.059444, 37.056032]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21610",
          "modern": "Bizerte",
          "latin": "Hippo Diarrhytus",
          "greek": "Ἱππὼν διάρρυτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.873071, 37.27626]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21611",
          "modern": "Aïn Tounga",
          "latin": "Thignica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.361747, 36.523659]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21612",
          "modern": "El Krib",
          "latin": "Musti",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.143109, 36.336066]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21613",
          "modern": "Hammam Daradji",
          "latin": "Bulla Regia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.754111, 36.560043]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21614",
          "modern": "Jama",
          "latin": "Zama Regia",
          "greek": "Ζαμαμιζών/Ζάμα Μείζων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.285786, 36.111664]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21615",
          "modern": "Zanfour",
          "latin": "Assuras",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.022305, 35.993286]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21617",
          "modern": "Ksour-Abd-el-Melek",
          "latin": "Uzappa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.330468, 35.924034]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21618",
          "modern": "Maktar",
          "latin": "Mactaris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.208398, 35.852089]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21619",
          "modern": "Henchir Hedja",
          "latin": "Agbia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.228251, 36.393056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21622",
          "modern": "Chemtou",
          "latin": "Simitthus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.57355, 36.49092]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21623",
          "modern": "Khamissa",
          "latin": "Thubursicum Numidarum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.655351, 36.193186]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21624",
          "modern": "Mdaourouch",
          "latin": "Madaurus",
          "greek": "Μάδουρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.902356, 36.07783]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21625",
          "modern": "Guelma",
          "latin": "Calama",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.430169, 36.46717]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21626",
          "modern": "Annaba",
          "latin": "Hippo Regius",
          "greek": "Ἱππὼν βασιλικός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.747415, 36.881305]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21627",
          "modern": "Skikda",
          "latin": "Rusicade",
          "greek": "Ῥουσικάδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.904959, 36.879641]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21628",
          "modern": "Djemila",
          "latin": "Cuicul",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.73586224, 36.320397]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21629",
          "modern": "Tipaza",
          "latin": "Tipasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.440944, 36.593951]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21630",
          "modern": "Cherchell",
          "latin": "Iol Caesarea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.186828, 36.607284]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21632",
          "modern": "Takembrit",
          "latin": "Siga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.448914, 35.265939]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21633",
          "modern": "Sousse",
          "latin": "Hadrumetum",
          "greek": "Ἀδρύμης",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.637786, 35.824966]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21634",
          "modern": "El Kef",
          "latin": "Sicca Veneria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.714315, 36.18228]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21635",
          "modern": "Lamta",
          "latin": "Lepti Minus",
          "greek": "Λέπτις μικρά/Λέπτις ἡ μικρά",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.866332, 35.678102]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21637",
          "modern": "Sbeitla",
          "latin": "Sufetula",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.118569, 35.241611]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21638",
          "modern": "Kasserine",
          "latin": "Cillium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.7970814, 35.1674615]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21639",
          "modern": "Medinet el-Khadima",
          "latin": "Thelepte",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.5847, 34.96674]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21642",
          "modern": "Constantine",
          "latin": "Cirta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.612555, 36.368187]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21643",
          "modern": "Tébessa",
          "latin": "Theveste",
          "greek": "Θεουέστη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.10014, 35.38254]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21645",
          "modern": "Thala",
          "latin": "Thala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.66687, 35.578179]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21647",
          "modern": "Haïdra",
          "latin": "Ammaedara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.455266, 35.565382]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21649",
          "modern": "Ziama",
          "latin": "Choba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.439252, 36.660858]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21650",
          "modern": "Sour Djouab",
          "latin": "Rapidum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.421825, 36.136435]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21651",
          "modern": "Timgad",
          "latin": "Thamugadi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.468636, 35.485165]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21652",
          "modern": "Tobna",
          "latin": "Thubunae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.35, 35.349999]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21653",
          "modern": "Jerash",
          "latin": "Gerasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.891455, 32.281264]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21654",
          "modern": "Umm Qais",
          "latin": "Gadara",
          "greek": "Γάδαρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.67845, 32.656296]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21655",
          "modern": "Nablus",
          "latin": "Neapolis",
          "greek": "Νεάπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.26293, 32.216511]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21656",
          "modern": "Imwas",
          "latin": "Emmaus",
          "greek": "Ἐμμαοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.989663, 31.83933]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21657",
          "modern": "Tabaqat Fahl",
          "latin": "Pella",
          "greek": "Πέλλα/Βερενίκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.615827, 32.449525]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21659",
          "modern": "Horvat Susita",
          "latin": "Hippos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.660178, 32.7785]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21661",
          "modern": "Tel Dor",
          "latin": "Dora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.91627, 32.6163]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21662",
          "modern": "Acre",
          "latin": "Ake",
          "greek": "Πτολεμαίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.068626, 32.920744]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21663",
          "modern": "Tsipori",
          "latin": "Sepphoris",
          "greek": "Διοκαισάρεια/Σέπφωρις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.279123, 32.753079]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21664",
          "modern": "Tell Abil",
          "latin": "Abila Dekapoleos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.869187, 32.683047]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21666",
          "modern": "Neue",
          "latin": "Neue",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.04194, 32.889346]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21670",
          "modern": "Ashkelon",
          "latin": "Ashqelon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.54732, 31.66426]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21671",
          "modern": "Bayt Jibrin",
          "latin": "Beth Govrin",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.894124, 31.607738]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21672",
          "modern": "Gaza",
          "latin": "Gaza",
          "greek": "Γάζα/Κάδυτις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.46203, 31.503959]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21674",
          "modern": "Haluza",
          "latin": "Elousa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.654209, 31.097188]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21676",
          "modern": "Avdat",
          "latin": "Eboda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.774147, 30.794321]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21677",
          "modern": "Al-Karak",
          "latin": "Characmoba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.701716, 31.180939]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21678",
          "modern": "Sobata",
          "latin": "Sobata",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.630617, 30.880918]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21679",
          "modern": "Humayma",
          "latin": "Auara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.348082, 29.953156]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21680",
          "modern": "Mamshit",
          "latin": "Mampsis",
          "greek": "Μέμφις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.064432, 31.025315]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21681",
          "modern": "Tiberias",
          "latin": "Tiberias",
          "greek": "Τιβηριάς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.541973, 32.785741]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21682",
          "modern": "Arsuf",
          "latin": "Apollonia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.806475, 32.195064]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21683",
          "modern": "Jaffa",
          "latin": "Ioppe",
          "greek": "Ἰόπη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.752119, 32.053722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21684",
          "modern": "Tel Ras el-'Ain",
          "latin": "Antipatris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.93078, 32.10478]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21685",
          "modern": "Lod",
          "latin": "Lydda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.893068, 31.950908]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21686",
          "modern": "Yibna",
          "latin": "Iamneia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.732257, 31.878068]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21687",
          "modern": "Ashdod",
          "latin": "Ashdod",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.656061, 31.756038]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21689",
          "modern": "Marisa",
          "latin": "Marisa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.898241, 31.592963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21690",
          "modern": "Teda",
          "latin": "Anthedon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.47975, 31.536326]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21691",
          "modern": "al-Minah",
          "latin": "Gazaion Limen",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.433909, 31.5232]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21692",
          "modern": "Khirbet Suq Mazen",
          "latin": "Sykomazon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.372228, 31.41288]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21693",
          "modern": "Raphia",
          "latin": "Raphia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.259229, 31.283948]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21694",
          "modern": "El-Arish",
          "latin": "Rinokoloura",
          "greek": "Ῥινοκόλουρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.796926, 31.111755]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21695",
          "modern": "Tell el-Farama",
          "latin": "Pelousion",
          "greek": "Πηλούσιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.540631, 31.042265]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21696",
          "modern": "Tell Athar el-Filusiyyat",
          "latin": "Ostrakine",
          "greek": "Ὀστρακίνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.43086, 31.11685]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21697",
          "modern": "Damietta",
          "latin": "Tamiathis",
          "greek": "Ταμιαθις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.81612, 31.43214]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21698",
          "modern": "San el-Hagar",
          "latin": "Tanis",
          "greek": "Τανις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.88337, 30.975]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21699",
          "modern": "Tell el-Rub'a",
          "latin": "Mendes",
          "greek": "Μενδης",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -4500,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.51667, 30.95833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21700",
          "modern": "Tell Timai",
          "latin": "Thmouis",
          "greek": "Θμουις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.51667, 30.93889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21701",
          "modern": "Samanud",
          "latin": "Sebennytos",
          "greek": "Σεβεννυτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.239569, 30.962841]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21702",
          "modern": "Tell al-Fara'in",
          "latin": "Bouto",
          "greek": "Βουτω/Βουτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.74222, 31.19556]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21703",
          "modern": "Kom el-Geif",
          "latin": "Naukratis",
          "greek": "Ναύκρατις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.5925, 30.89722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21704",
          "modern": "Tell el-Atrib",
          "latin": "Athribis",
          "greek": "Ἀθριβις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.18806, 30.47056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21705",
          "modern": "Qulzum",
          "latin": "Klysma",
          "greek": "Κλύσμα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.57396, 29.95462]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21706",
          "modern": "Abuqir",
          "latin": "Kanopos",
          "greek": "Κάνωπος/Κάνωβος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.063645, 31.320896]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21708",
          "modern": "Abusir",
          "latin": "Taposiris Megale",
          "greek": "Ταποσιρις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.518872, 30.946218]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21709",
          "modern": "Marina el-Alamein",
          "latin": "Antiphrai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.012034, 30.823446]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21711",
          "modern": "Marsa Matruh",
          "latin": "Paraitonion",
          "greek": "Παραιτόνιον/Ἀμμωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.236943, 31.350247]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21712",
          "modern": "Sallum",
          "latin": "Catabathmus Maior",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.152644, 31.552706]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21719",
          "modern": "Homs",
          "latin": "Hemesa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.714401, 34.723414]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21720",
          "modern": "Hamah",
          "latin": "Amathe",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.7495, 35.1359]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21725",
          "modern": "Qinnasrin",
          "latin": "Chalcis ad Belum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.003614, 35.989704]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21733",
          "modern": "Halabiye",
          "latin": "Zenobia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.82202, 35.68925]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21734",
          "modern": "Buşayrah (Buseira)",
          "latin": "Circesium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.430045, 35.156614]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21735",
          "modern": "Ashara",
          "latin": "[Terqa]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.56841, 34.92225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21749",
          "modern": "Aqaba",
          "latin": "Aelana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.999999, 29.530676]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21751",
          "modern": "Suq Le Basi Barada",
          "latin": "Abila Lysaniou",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.10564, 33.62441]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21752",
          "modern": "Banias",
          "latin": "Paneas",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.693185, 33.247952]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21753",
          "modern": "Aere",
          "latin": "Aere",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.185274, 33.071101]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21754",
          "modern": "Tell Hesban",
          "latin": "Esbous",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.808958, 31.800612]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21755",
          "modern": "Madeba",
          "latin": "Madaba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.794078, 31.717693]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21756",
          "modern": "Fonticelle",
          "latin": "Iuvanum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.24995, 41.99775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21757",
          "modern": "Avella",
          "latin": "Abella",
          "greek": "Ἀβέλλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.608472, 40.961516]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21758",
          "modern": "La Cività",
          "latin": "Abellinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.82564, 40.91689]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21759",
          "modern": "Passo di Mirabella",
          "latin": "Aeclanum",
          "greek": "Αἰκούλανον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.01306, 41.05349]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21762",
          "modern": "Santa Maria Capua Vetere",
          "latin": "Capua",
          "greek": "Καπύη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.250057, 41.085943]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21763",
          "modern": "Caserta",
          "latin": "Calatia",
          "greek": "Καλατία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.36102, 41.04258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21764",
          "modern": "Cassino Spinelli",
          "latin": "Suessula",
          "greek": "Σουεσσοῦλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.39835, 40.98956]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21765",
          "modern": "Calvi Risorta",
          "latin": "Cales",
          "greek": "Καλησία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.132073, 41.199993]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21766",
          "modern": "Pisida",
          "latin": "Pisida",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.816258, 33.069225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21767",
          "modern": "Gasr Ahmed",
          "latin": "Thubactis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.192079, 32.365232]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21769",
          "modern": "Ksar Pharaoun",
          "latin": "Volubilis",
          "greek": "Οὐολουβιλίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.554401, 34.072935]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21770",
          "modern": "Chellah",
          "latin": "Sala",
          "greek": "Σάλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.821498, 34.006821]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21771",
          "modern": "Tchemmisch",
          "latin": "Lixus",
          "greek": "Λίξος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.11021, 35.199807]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21772",
          "modern": "Dchar Jdid",
          "latin": "Zilil",
          "greek": "Ζῆλις/Ζιλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.915794, 35.522244]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21773",
          "modern": "Sidi Ali bou Djenoun",
          "latin": "Banasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.115434, 34.60192]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21774",
          "modern": "Tanger",
          "latin": "Tingis",
          "greek": "Τιγγίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.810419, 35.787168]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21775",
          "modern": "Turda",
          "latin": "Potaissa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.772734, 46.570536]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21776",
          "modern": "Alba Julia",
          "latin": "Apulum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.572315, 46.066695]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21777",
          "modern": "Cluj-Napoca",
          "latin": "Napoca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.588398, 46.769657]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21778",
          "modern": "Moigrad",
          "latin": "Porolissum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.15727, 47.17924]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21779",
          "modern": "Argos",
          "latin": "Argos",
          "greek": "Ἄργος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.71544, 37.63817]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21782",
          "modern": "Debelt",
          "latin": "Deultum",
          "greek": "Δεβελτός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.28096, 42.38858]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21786",
          "modern": "Isaccea",
          "latin": "Noviodunum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.491915, 45.270526]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21795",
          "modern": "Poti",
          "latin": "Phasis",
          "greek": "Φάσις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.717213, 42.121777]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21796",
          "modern": "Gonio",
          "latin": "Apsaros",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.573661, 41.573247]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21799",
          "modern": "Armazi",
          "latin": "Harmozike",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.672277, 41.833638]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21800",
          "modern": "Mtskheta",
          "latin": "Meschistha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.706, 41.839298]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21801",
          "modern": "Artashat",
          "latin": "Artaxata",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.546644, 39.957286]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21804",
          "modern": "Argishtikhinili",
          "latin": "Armaouira",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.03403, 40.08065]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21805",
          "modern": "Garni",
          "latin": "Gorneae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.72944, 40.11324]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21806",
          "modern": "Erbil",
          "latin": "Arbela",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.00901, 36.19143]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21807",
          "modern": "al-Hadr",
          "latin": "Hatra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.71855, 35.58703]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21808",
          "modern": "Kuyunjik",
          "latin": "Nineveh",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.15205, 36.3597]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21809",
          "modern": "Nusaybin",
          "latin": "Nisibis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.214619, 37.068635]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21810",
          "modern": "Ras al-Ayn",
          "latin": "Resaina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.066667, 36.85]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21811",
          "modern": "Diyarbakır",
          "latin": "Ad Tygrem",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.23676, 37.91085]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21812",
          "modern": "Viranşehir",
          "latin": "Antiochia Arabis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.755832, 37.229021]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21813",
          "modern": "Suruç",
          "latin": "Batnae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.42451, 36.976694]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21814",
          "modern": "Aleppo",
          "latin": "Beroia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.162027, 36.199472]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21815",
          "modern": "Ar-Raqqah",
          "latin": "Nicephorium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.023783, 35.947807]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21816",
          "modern": "Şanlıurfa",
          "latin": "Edessa",
          "greek": "Ἔδεσσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.786696, 37.148633]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21817",
          "modern": "Karkamiş",
          "latin": "Europos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.01353, 36.8295]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21818",
          "modern": "Kahramanmaraş",
          "latin": "Germanikeia",
          "greek": "Γερμανίκεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.92543, 37.58709]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21819",
          "modern": "Manbij",
          "latin": "Hierapolis",
          "greek": "Μέμπετξε/Ἱεράπολις/Βαμβύκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.95759, 36.52543]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21820",
          "modern": "İskenderun",
          "latin": "Alexandria ad Issum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.166038, 36.589023]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21826",
          "modern": "Harran",
          "latin": "Carrhae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.03155, 36.86626]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21829",
          "modern": "Balad Sinjar",
          "latin": "Singara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.85796, 36.32705]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21830",
          "modern": "Gabboula",
          "latin": "*Gabboula",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.51943, 36.090348]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21832",
          "modern": "Jebel Khaled",
          "latin": "Amphipolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.227144, 36.442242]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21833",
          "modern": "Dülük",
          "latin": "Doliche",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.36896, 37.15429]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21835",
          "modern": "Kocahisar",
          "latin": "Arsameia pros Nymphaio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.65783, 37.94279]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21840",
          "modern": "Ghadames",
          "latin": "Cidamus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.4972, 30.132285]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21842",
          "modern": "Telmine",
          "latin": "Turris Tamalleni",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.920624, 33.716837]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21843",
          "modern": "Henchir-Ragoubet",
          "latin": "*Thiges",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.544619, 34.245877]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21844",
          "modern": "Gafsa",
          "latin": "Capsa Iustiniana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.786674, 34.418648]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21848",
          "modern": "Germa",
          "latin": "Garama Metropolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.063356, 26.544683]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21849",
          "modern": "Augila",
          "latin": "Augila",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.290963, 29.127566]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21851",
          "modern": "Benghazi (Berenice)",
          "latin": "Berenice",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.06425, 32.12452]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21852",
          "modern": "Tocra",
          "latin": "Arsinoe",
          "greek": "Ταύχειρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.565847, 32.537142]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21853",
          "modern": "Hadrianopolis",
          "latin": "Hadrianopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.306644, 32.35043]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21854",
          "modern": "Susah",
          "latin": "Apollonia",
          "greek": "Ἀπολλωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.970535, 32.902411]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21855",
          "modern": "Derna",
          "latin": "Darnis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.639207, 32.763363]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21856",
          "modern": "Marj",
          "latin": "Barke",
          "greek": "Βάρκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.892778, 32.498333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21857",
          "modern": "Tolmeitha",
          "latin": "Ptolemais",
          "greek": "Πτολεμαΐς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.950756, 32.70947]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21858",
          "modern": "Boughrara",
          "latin": "Gigthis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.677467, 33.532677]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21860",
          "modern": "Zian",
          "latin": "Zitha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.040121, 33.475262]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21861",
          "modern": "Ajim",
          "latin": "Tipasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.748406, 33.728224]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21862",
          "modern": "Bordj el-Kantara",
          "latin": "Meninge",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.919766, 33.687068]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21863",
          "modern": "Houmt-Souk",
          "latin": "Girba?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.859558, 33.874783]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21865",
          "modern": "Henchir-Thina",
          "latin": "Thaenae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.68578, 34.65026]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21867",
          "modern": "Tell Omar",
          "latin": "Seleucia",
          "greek": "Σελεύκεια ἡ ἐπὶ τῷ Τίγρει",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.52329, 33.09876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21868",
          "modern": "Salman-pak",
          "latin": "Ctesiphon",
          "greek": "Κτησιφῶν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.580717, 33.093582]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21870",
          "modern": "Aghurmi",
          "latin": "Ammon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.54359, 29.20514]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21871",
          "modern": "Qasr el-Bawiti",
          "latin": "Oasis Parva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.85819, 28.35343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21886",
          "modern": "Ierissos",
          "latin": "Akanthos",
          "greek": "Ἄκανθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.88504, 40.39427]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21889",
          "modern": "Amfipolis",
          "latin": "Amphipolis",
          "greek": "Ἀμφίπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.840418, 40.818876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21890",
          "modern": "Edessa",
          "latin": "Edessa",
          "greek": "Ἔδεσσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.05741, 40.79708]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21891",
          "modern": "Pella",
          "latin": "Pella",
          "greek": "Πέλλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.518485, 40.754555]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21892",
          "modern": "Krenides",
          "latin": "Philippi",
          "greek": "Φίλιπποι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.28409, 41.01316]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21893",
          "modern": "Vergina",
          "latin": "Aigeai",
          "greek": "Αἰγαί/Αἰγέαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.324777, 40.479304]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21896",
          "modern": "Kavála",
          "latin": "Neapolis",
          "greek": "Νεάπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.415015, 40.93504]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21898",
          "modern": "Stara Zagora",
          "latin": "Beroe",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.624802, 42.427025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21899",
          "modern": "Kazanlak",
          "latin": "Seuthopolis",
          "greek": "Σευθόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.308466, 42.617602]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21900",
          "modern": "Enez",
          "latin": "Ainos",
          "greek": "Αἶνος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.0806, 40.7241]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21901",
          "modern": "İpsala",
          "latin": "Kypsela",
          "greek": "Κύψελα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.3920505, 40.9245125]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21903",
          "modern": "Thasos",
          "latin": "Thasos",
          "greek": "Θάσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.717535, 40.78201]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21904",
          "modern": "Dion",
          "latin": "Dion",
          "greek": "Δίων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.491299, 40.177012]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21908",
          "modern": "Lykosoura",
          "latin": "Lykosoura",
          "greek": "Λυκόσουρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.030087, 37.389509]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21909",
          "modern": "Mavromati",
          "latin": "Messene",
          "greek": "Μεσσήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.920439, 37.175491]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21910",
          "modern": "Methoni",
          "latin": "Methone",
          "greek": "Μεθώνη/Μοθώνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.705, 36.817]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21911",
          "modern": "Sparti",
          "latin": "Sparta",
          "greek": "Σπάρτη/Σπάρτα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.42454, 37.08149]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21912",
          "modern": "Githeo",
          "latin": "Gytheion",
          "greek": "Γύθειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.562341, 36.763663]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21913",
          "modern": "Palaia Monemvasia",
          "latin": "Epidauros Limera",
          "greek": "Ἐπίδαυρος Λιμηρὰ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.02637, 36.731301]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21914",
          "modern": "Megalopoli",
          "latin": "Megalopolis",
          "greek": "Μεγάλη πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.127345, 37.412829]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21915",
          "modern": "Piali",
          "latin": "Tegea",
          "greek": "Τεγέα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.429, 37.464]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21916",
          "modern": "Akhladokampos",
          "latin": "Hysiai",
          "greek": "Ὑσίαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.585884, 37.519836]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21917",
          "modern": "Mantineia",
          "latin": "Mantineia",
          "greek": "Μαντίνεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.393259, 37.618138]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21918",
          "modern": "Kalpaki",
          "latin": "Orchomenos",
          "greek": "Ὀρχομενός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.31536, 37.724716]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21919",
          "modern": "Kleitoria",
          "latin": "Kleitor",
          "greek": "Κλείτωρ/Κλήτωρ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.103248, 37.892704]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21920",
          "modern": "Agios Ioannis",
          "latin": "Heraia",
          "greek": "Ἡραία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.856527, 37.612056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21921",
          "modern": "Archaia Feneos (Kalyvia)",
          "latin": "Pheneos",
          "greek": "ὁ Φενεός/ἡ Φενεός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.30692, 37.91045]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21922",
          "modern": "Stymphalia",
          "latin": "Stymphalos",
          "greek": "Στύμφαλος/Στύμφηλος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.45931, 37.85932]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21923",
          "modern": "Tolon",
          "latin": "Asine",
          "greek": "Ἀσίνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.87403, 37.52659]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21924",
          "modern": "Porto Cheli",
          "latin": "Halieis",
          "greek": "Ἁλιεῖς/Ἁλιαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.136994, 37.301493]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21925",
          "modern": "Ermione",
          "latin": "Hermione",
          "greek": "Ἑρμιόνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.25681, 37.38389]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21926",
          "modern": "Damala",
          "latin": "Troizen",
          "greek": "Τροιζήν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.34845, 37.50303]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21927",
          "modern": "Megalochori",
          "latin": "Methana",
          "greek": "ἡ Μεθάνα/τὰ Μέθανα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.34909, 37.58672]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21929",
          "modern": "Mycenae",
          "latin": "Mycenae",
          "greek": "Μυκῆναι/Μυκήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.756111, 37.730833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21930",
          "modern": "Ag. Vasileios",
          "latin": "Kleonai",
          "greek": "Κλεωναί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.75372, 37.81708]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21932",
          "modern": "Phlius",
          "latin": "Phleious",
          "greek": "Φλιοῦς/Φλειοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.649131, 37.846299]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21933",
          "modern": "Lechaio",
          "latin": "Lechaion",
          "greek": "Λέχαιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.88807, 37.93277]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21936",
          "modern": "Aigina",
          "latin": "Aigina",
          "greek": "Αἴγινα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.42372, 37.74991]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21937",
          "modern": "Vasiliko",
          "latin": "Sicyon",
          "greek": "Σικυών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.71135, 37.98336]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21938",
          "modern": "Pellene",
          "latin": "Pellene",
          "greek": "Πελλήνη/Πελλάνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.5384, 38.0446]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21939",
          "modern": "Vitrinitsa",
          "latin": "Aigeira",
          "greek": "Αἴγειρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.3782, 38.12855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21940",
          "modern": "Akrata",
          "latin": "Aigai",
          "greek": "Αἰγαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.3484, 38.1478]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21941",
          "modern": "Aigio",
          "latin": "Aigion",
          "greek": "Αἴγιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.081952, 38.252707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21942",
          "modern": "Patras",
          "latin": "Patrae",
          "greek": "Πάτραι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.738518, 38.243265]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21943",
          "modern": "Kato Achaia",
          "latin": "Dyme",
          "greek": "Δύμη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.551425, 38.144625]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21944",
          "modern": "Elis",
          "latin": "Elis",
          "greek": "Ἦλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.37493, 37.89131]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21946",
          "modern": "Lepreo",
          "latin": "Lepreon",
          "greek": "Λέπρεον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.724584, 37.440042]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21947",
          "modern": "Figalia",
          "latin": "Phigaleia",
          "greek": "Φιγάλεια/Φιγαλία/Φιάλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.8391, 37.3963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21948",
          "modern": "Argostoli",
          "latin": "Krane",
          "greek": "Κράνιοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.48756, 38.17296]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21949",
          "modern": "Delphi",
          "latin": "Delphi",
          "greek": "Δελφοί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.501169, 38.482289]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21951",
          "modern": "Megara",
          "latin": "Megara",
          "greek": "Μέγαρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.3402, 37.9851]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21952",
          "modern": "Thiva",
          "latin": "Thebai",
          "greek": "Θῆβαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.317327, 38.319664]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21953",
          "modern": "Kechries",
          "latin": "Kenchreai",
          "greek": "Κεγχρεαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.992532, 37.88239]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21954",
          "modern": "Palaia Epidauros",
          "latin": "Epidauros",
          "greek": "Ἐπίδαυρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.160403, 37.633674]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21959",
          "modern": "Vila Zora",
          "latin": "Bylazora?",
          "greek": "Βυλάζωρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.912585, 41.847298]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21962",
          "modern": "Nea Olynthos",
          "latin": "Olynthos",
          "greek": "Ὄλυνθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.354208, 40.296525]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21963",
          "modern": "Makrigialos",
          "latin": "Pydna",
          "greek": "Πύδνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.6174, 40.39736]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21964",
          "modern": "Lezhë",
          "latin": "Lissus",
          "greek": "Λισσός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.650909, 41.783311]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21965",
          "modern": "Kotor",
          "latin": "*Agruvium",
          "greek": "Ἀσκρήβιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.77148, 42.42416]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21966",
          "modern": "Risan",
          "latin": "Risinum",
          "greek": "Ῥίζων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.69623, 42.51376]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21967",
          "modern": "Korkuteli",
          "latin": "Isinda",
          "greek": "Ἴσινδα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.1619, 37.0675]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21968",
          "modern": "Kakosi",
          "latin": "Thisbai",
          "greek": "Θίσβαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.96835, 38.259722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21971",
          "modern": "Chalcis",
          "latin": "Chalcis",
          "greek": "Χαλκίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.602, 38.464]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21973",
          "modern": "Eretria",
          "latin": "Eretria",
          "greek": "Ἐρέτρια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.790535, 38.398169]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21975",
          "modern": "Orchomenos",
          "latin": "Orchomenos",
          "greek": "Ὀρχομενός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.959486, 38.495082]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21977",
          "modern": "Aivaliotika",
          "latin": "Demetrias",
          "greek": "Δημητριάς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.91091, 39.34773]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21978",
          "modern": "Neos Platanos",
          "latin": "Nea Halos",
          "greek": "Ἅλος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -900,
          "endyear": 850
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.814496, 39.144116]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21979",
          "modern": "Larissa",
          "latin": "Larissa",
          "greek": "Λάρισα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.41474, 39.64147]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21980",
          "modern": "Farsala",
          "latin": "Pharsalos",
          "greek": "ἡ Φάρσαλος/Φάρσαλος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.385825, 39.288053]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21981",
          "modern": "Mikrothives",
          "latin": "Thebai Phthiotides",
          "greek": "Φθιώτιδες Θῆβαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.76215, 39.27308]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21984",
          "modern": "Arta",
          "latin": "Ambrakia",
          "greek": "Ἀμπρακία/Ἀμβρακία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.989927, 39.154973]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21985",
          "modern": "Kerkyra",
          "latin": "Korkyra",
          "greek": "Κόρκυρα/Κέρκυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.92178, 39.60733]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21986",
          "modern": "Evinochori",
          "latin": "Calydon",
          "greek": "Καλυδών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.533106, 38.372423]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21987",
          "modern": "Elefsina",
          "latin": "Eleusis",
          "greek": "Ἐλευσίς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.5415, 38.0441]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21988",
          "modern": "Kokkla",
          "latin": "Plataiai",
          "greek": "Πλάταιαι/Πλαταιαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.273866, 38.221019]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21989",
          "modern": "Thorikos",
          "latin": "Thorikos",
          "greek": "Θορικός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.0516, 37.7392]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21991",
          "modern": "Palaio Préveza",
          "latin": "Nikopolis",
          "greek": "Νικόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.735953, 39.023389]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21992",
          "modern": "Sourovigli",
          "latin": "Stratos",
          "greek": "ὁ/ἡ Στράτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.31578, 38.67111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21993",
          "modern": "Oiniades",
          "latin": "Oiniadai",
          "greek": "Οἰνιάδαι/Οἰνειάδαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.1966, 38.4077]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21994",
          "modern": "Kato Retsina",
          "latin": "Nea Pleuron",
          "greek": "Πλευρῶν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.409739, 38.414413]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21995",
          "modern": "Gyphtokastro",
          "latin": "Palaia Pleuron",
          "greek": "Πλευρῶν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.414714, 38.402823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22002",
          "modern": "Methoni",
          "latin": "Methone",
          "greek": "Μεθώνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.58366, 40.46748]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22004",
          "modern": "Parutino",
          "latin": "Olbia",
          "greek": "Ὀλβία/Ὀλβία Ποντική/Βορυσθένης",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.9056, 46.69238]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22005",
          "modern": "Bilhorod-Dnistrovskyi",
          "latin": "Tyras",
          "greek": "Τύρας",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.349729, 46.200563]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22006",
          "modern": "Yevpatoria",
          "latin": "Kerkinitis?",
          "greek": "Καρκινῖτις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.37015, 45.18737]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22007",
          "modern": "Feodosia",
          "latin": "Theodosia",
          "greek": "Θεοδοσία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.371612, 45.037564]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22010",
          "modern": "Kerch",
          "latin": "Pantikapaion",
          "greek": "Παντικάπαιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.46855, 45.350981]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22018",
          "modern": "Sennoy",
          "latin": "Phanagoreia",
          "greek": "Φαναγόρεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.966111, 45.276944]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22019",
          "modern": "Tmutarakan",
          "latin": "Hermonassa",
          "greek": "Ἑρμώνασσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.714396, 45.218858]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22020",
          "modern": "Anapa",
          "latin": "Gorgippia",
          "greek": "Γοργιπία/Σινδική/Σινδικὸς λιμήν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.3098052, 44.8959745]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22021",
          "modern": "Sukhumi",
          "latin": "Dioscurias",
          "greek": "Διοσκουρίας",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.0181, 42.99535]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22023",
          "modern": "Tanais",
          "latin": "Tanais",
          "greek": "Τάναϊς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.33617, 47.268438]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22026",
          "modern": "Chernomorskoye",
          "latin": "Kalos Limen?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.713922, 45.517138]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22027",
          "modern": "Kutaisi",
          "latin": "Kotais",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.704404, 42.272488]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22061",
          "modern": "Teboursouk",
          "latin": "Thubursicum Bure",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.249444, 36.456842]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22063",
          "modern": "Henchir Douamis",
          "latin": "Uchi Maius",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.084255, 36.4115]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22064",
          "modern": "Henchir Matria",
          "latin": "Numluli",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.218381, 36.52315]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22069",
          "modern": "Henchir-el-Faouar",
          "latin": "Belalis Maior",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.258279, 36.76478]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22070",
          "modern": "Ain-Tachegga",
          "latin": "Thizika",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.680722, 36.982897]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22071",
          "modern": "Mateur",
          "latin": "*Matar",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.668619, 37.037905]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22076",
          "modern": "Tarf-ech-Chena",
          "latin": "Apisa Maius",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.711194, 36.343341]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22077",
          "modern": "Henchir-Bou-Ftis",
          "latin": "Avitta Bibba",
          "greek": "Ἀουΐττα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.703219, 36.410689]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22078",
          "modern": "Henchir-es-Souar",
          "latin": "Abthugni",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.041051, 36.174109]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22085",
          "modern": "Sidi Ali bel Kassem",
          "latin": "Thuburnica",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.467818, 36.526159]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22102",
          "modern": "Souk Ahras",
          "latin": "Thagaste",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.004957, 36.238412]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22103",
          "modern": "Tabarka",
          "latin": "Thabraca",
          "greek": "Θάβρακα/Τάβρακα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.748512, 36.956243]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22105",
          "modern": "Mila",
          "latin": "Milev",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.27017, 36.452497]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22106",
          "modern": "Announa",
          "latin": "Thibilis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.250462, 36.383081]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22107",
          "modern": "Oum Krékèche",
          "latin": "Nattabutum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.260549, 36.239408]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22108",
          "modern": "Ksar Sbehi",
          "latin": "Gadiaufala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.257753, 36.081124]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22109",
          "modern": "Kef Bezioun",
          "latin": "Zattara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.531821, 36.328022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22110",
          "modern": "Khenchela",
          "latin": "Mascula Tiberia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.150025, 35.433338]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22111",
          "modern": "Aïn Zana",
          "latin": "Diana Veteranorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.080301, 35.77969]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22112",
          "modern": "Henchir Merwana",
          "latin": "Lamasba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.909852, 35.627737]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22113",
          "modern": "Zraia",
          "latin": "Zarai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.677421, 35.802187]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22114",
          "modern": "Tehouda",
          "latin": "Thabudeos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.007213, 34.723295]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22115",
          "modern": "Bechilga",
          "latin": "Zabi Iustiniana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.584937, 35.682318]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22116",
          "modern": "Bougaâ",
          "latin": "Ad Sava Municipium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.077138, 36.328261]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22117",
          "modern": "Sétif",
          "latin": "Sitifis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.412646, 36.195749]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22118",
          "modern": "Mons",
          "latin": "Mopth",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.567436, 36.247346]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22119",
          "modern": "Ain Kébira",
          "latin": "Satafis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.502478, 36.363108]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22120",
          "modern": "Djidjelli",
          "latin": "Igilgili",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.765676, 36.820982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22121",
          "modern": "Collo",
          "latin": "Chullu",
          "greek": "Κούλλου",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.55865, 37.007228]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22122",
          "modern": "Béjaïa",
          "latin": "Saldae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.058096, 36.741492]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22123",
          "modern": "El-Kseur",
          "latin": "Tubusuctu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.855629, 36.673393]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22124",
          "modern": "Djemâa Saharidj",
          "latin": "Bida",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.288262, 36.682015]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22125",
          "modern": "Sour El-Ghozlane",
          "latin": "Auzia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.689949, 36.145619]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22126",
          "modern": "Dellys",
          "latin": "Rusuccuru",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.906969, 36.909102]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22127",
          "modern": "Tigzirt",
          "latin": "Iomnium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.123293, 36.894871]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22128",
          "modern": "Taksebt",
          "latin": "Rusippisir",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.156907, 36.897601]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22129",
          "modern": "Azeffoun",
          "latin": "Rusazus?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.422655, 36.893992]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22130",
          "modern": "Tamentfoust",
          "latin": "Rusguniae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.244319, 36.789704]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22131",
          "modern": "Madīnat al-Dschazā'ir (Alger)",
          "latin": "Icosium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.049726, 36.766025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22132",
          "modern": "Dolfussville",
          "latin": "Sufasar",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.511476, 36.192569]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22133",
          "modern": "Hammam Righa",
          "latin": "Aquae Calidae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.393876, 36.380242]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22134",
          "modern": "Miliana",
          "latin": "Succhabar",
          "greek": "Ζουχάββαρι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.22619, 36.304782]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22135",
          "modern": "Aïn Defla",
          "latin": "Oppidum Novum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.965443, 36.257137]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22136",
          "modern": "Ténès",
          "latin": "Cartennae",
          "greek": "Καρτέννα[ι]/Κάρτιν[ν]α",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.308828, 36.50978]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22137",
          "modern": "Sidi bou Ras",
          "latin": "Arsennaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.873111, 36.334326]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22138",
          "modern": "Sidi Bellatar",
          "latin": "Quiza Cenitana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.26658, 36.025896]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22139",
          "modern": "Bénian",
          "latin": "Ala Miliaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [0.250236, 35.099704]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22140",
          "modern": "Arbal",
          "latin": "Regiae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.61879, 35.456691]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22141",
          "modern": "Melilla",
          "latin": "Rusaddir",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.93386, 35.29448]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22142",
          "modern": "El Bahnasa",
          "latin": "Oxyrhynchus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.65172, 28.542574]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22143",
          "modern": "Atfih",
          "latin": "Aphroditopolis",
          "greek": "Ἀφροδίτης Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.25167, 29.408419]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22144",
          "modern": "Esch-Scheich 'Abada",
          "latin": "Antinoopolis",
          "greek": "Ἀντινόου Πόλις/Νέοι Ἕλληνες",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.879299, 27.808099]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22145",
          "modern": "Asyut",
          "latin": "Lykopolis",
          "greek": "Λύκων Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.17849, 27.178831]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22146",
          "modern": "Qaw el-Kebir",
          "latin": "Antaiopolis",
          "greek": "Ἀνταίου Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.518224, 26.898572]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22147",
          "modern": "El-Manshah",
          "latin": "Ptolemais Hermeiou",
          "greek": "Πτολεμαὶς Ἑρμείου",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.802059, 26.476779]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22148",
          "modern": "Hiou",
          "latin": "Diospolis Mikra",
          "greek": "Διὸς Πόλις Μικρά",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.31196, 26.00258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22149",
          "modern": "Qus",
          "latin": "Apollonopolis Parva",
          "greek": "Ἀπόλλωνος Πόλις Μικρά/Διοκλητιανόπολις/Διοκλητιανοῦ Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.75, 25.91667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22150",
          "modern": "Qena",
          "latin": "Kaine",
          "greek": "Καινή/Μαξιμιανοῦ Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.71873, 26.16006]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22151",
          "modern": "Qift",
          "latin": "Koptos",
          "greek": "Κοπτος/Ἰουστινιανούπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.815787, 25.996402]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22152",
          "modern": "Edfu",
          "latin": "Apollonopolis Magna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.872384, 24.977427]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22153",
          "modern": "El-Kab",
          "latin": "Eileithyiopolis",
          "greek": "Εἰλειθυίας Πόλις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.79809, 25.119031]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22154",
          "modern": "Dendera",
          "latin": "Tentyris",
          "greek": "Τεντυρις/Τεντυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.67001, 26.141698]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22155",
          "modern": "Kom Ombo",
          "latin": "Omboi",
          "greek": "Ὀμβοι/Ὀμβος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.928444, 24.452194]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22157",
          "modern": "Aswan",
          "latin": "Syene",
          "greek": "Συηνη/Συήνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.89066, 24.08292]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22158",
          "modern": "El-Dakka",
          "latin": "Pselkis",
          "greek": "Ψελκις/Ψελχις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.75298, 23.17471]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22165",
          "modern": "Faras",
          "latin": "Pachora",
          "greek": "Παχωρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.46596, 22.200915]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22166",
          "modern": "Qasr Ibrim",
          "latin": "Premis",
          "greek": "Πριμις/Πρημνις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.992788, 22.649633]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22168",
          "modern": "Sbiba",
          "latin": "Sufes",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.074415, 35.542707]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22188",
          "modern": "Montesarchio",
          "latin": "Caudium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.64167, 41.0673]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22205",
          "modern": "Ardea",
          "latin": "Ardea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.54968, 41.61126]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22206",
          "modern": "Ariccia",
          "latin": "Aricia",
          "greek": "Ἀρικία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.6726413, 41.7211083]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22218",
          "modern": "Rhodos",
          "latin": "Rhodos",
          "greek": "Ῥόδος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.227611, 36.443113]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22219",
          "modern": "El-Kharga",
          "latin": "Hibis",
          "greek": "Ἱβις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.55592, 25.47655]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22220",
          "modern": "Qasr Dush",
          "latin": "Kysis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.71629, 24.58019]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22221",
          "modern": "Shush",
          "latin": "Shushan",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.24854, 32.19202]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22222",
          "modern": "Persepolis",
          "latin": "Persepolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.89029, 29.93482]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22223",
          "modern": "Herat",
          "latin": "Alexandria Ariorum",
          "greek": "Ἀλεξάνδρεια ἡ ἐν Ἀρίοις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [62.188384, 34.345833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22224",
          "modern": "Frattocchie",
          "latin": "Bovillae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.61797, 41.76373]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22230",
          "modern": "Valdeherrerda",
          "latin": "Bilbilis Augusta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.603219, 41.38201]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22231",
          "modern": "Ciuidad Romana de Julióbriga",
          "latin": "Iuliobriga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.113918, 42.985111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22232",
          "modern": "Cerro Máquiz",
          "latin": "Iliturgi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.7565627, 37.9646668]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22233",
          "modern": "Los Villares",
          "latin": "Isturgi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.98319, 38.02731]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22235",
          "modern": "L'Albufereta",
          "latin": "Lucentum",
          "greek": "Ἀκρα Λευκή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.438333, 38.364444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22237",
          "modern": "Bolonia",
          "latin": "Baelo",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.774422, 36.08988]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22239",
          "modern": "San Roque",
          "latin": "Carteia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.410359, 36.183163]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22246",
          "modern": "Beja",
          "latin": "Pax Iulia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.865225, 38.015604]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22247",
          "modern": "Gabès (Qābis)",
          "latin": "Tacape",
          "greek": "Τακάπη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.096666, 33.878583]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22248",
          "modern": "Chepigovo",
          "latin": "Stuberra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.39749, 41.24359]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22252",
          "modern": "Knossos",
          "latin": "Knosos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.163106, 35.297847]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22257",
          "modern": "Kerkenes Dağ",
          "latin": "Pteria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -550
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.06565, 39.74827]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22258",
          "modern": "Loutra Edipsou",
          "latin": "Aidepsos",
          "greek": "Αἰδηψός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.045529, 38.8591927]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22259",
          "modern": "Himera",
          "latin": "Himera",
          "greek": "Ἱμέρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.82184, 37.96884]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22260",
          "modern": "Medina Sultan",
          "latin": "Charax",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [17.115479, 31.119853]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22261",
          "modern": "Henchir el Abiod",
          "latin": "Tucca?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.280212, 36.609025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22262",
          "modern": "el Kherba",
          "latin": "Tigava Municipium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.638763, 36.236709]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22263",
          "modern": "Alcaudete",
          "latin": "Aiungi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.116149, 37.576748]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22264",
          "modern": "Alcaudete",
          "latin": "*Sosontigi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.086452, 37.591032]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22265",
          "modern": "El Castillejo",
          "latin": "Arva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.606508, 37.622819]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22266",
          "modern": "La Mesa",
          "latin": "Canama",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.68629, 37.638158]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22267",
          "modern": "Lora del Río",
          "latin": "Axati",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.5262841, 37.65923]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22268",
          "modern": "Chaves",
          "latin": "Aquae Flaviae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.468045, 41.739324]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22274",
          "modern": "Thermo",
          "latin": "Thermon",
          "greek": "Θέρμος/Θέρμον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.667571, 38.558783]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22283",
          "modern": "Tripoli",
          "latin": "Oea",
          "greek": "Ἐῶα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.175786, 32.899895]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22285",
          "modern": "Albe",
          "latin": "Alba Fucens",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.41135, 42.07984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22290",
          "modern": "Falerone",
          "latin": "Falerio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.49792, 43.10022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22291",
          "modern": "San Benedetto dei Marsi",
          "latin": "Marruvium",
          "greek": "Μαρούιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.62341, 42.00597]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22292",
          "modern": "Prata d'Ansidonia",
          "latin": "Peltuinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.624085, 42.28313]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22305",
          "modern": "Hamadan",
          "latin": "Ekbatana",
          "greek": "Ἀγβάτανα/Ἐκβάτανα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.51696, 34.80523]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22306",
          "modern": "Nihavand",
          "latin": "Nemavand",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.367981, 34.18761]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22307",
          "modern": "Rey",
          "latin": "Rhagai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [51.44567, 35.60066]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22308",
          "modern": "Šahr-e Qumis",
          "latin": "Hecatompylos?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [54.11783, 35.95328]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22309",
          "modern": "Pasargad",
          "latin": "Pasargadae",
          "greek": "Πασαργάδαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [53.17334, 30.1985]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22311",
          "modern": "Estakhr",
          "latin": "Istakhr",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.90922, 29.98133]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22315",
          "modern": "Shiraz",
          "latin": "Qasr-i Abu Nasr",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.5333333, 29.6166667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22316",
          "modern": "Firuzabad",
          "latin": "Ardashir-Khurra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.532446, 28.852984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22319",
          "modern": "Bishapur",
          "latin": "Veh Shapur",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [51.570833, 29.777778]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22321",
          "modern": "Qal'at Sherqat",
          "latin": "Ashur",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.25979, 35.45626]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22322",
          "modern": "Nimrud",
          "latin": "Kalhu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.32932, 36.09863]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22323",
          "modern": "Tikrit",
          "latin": "Takrit",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.69231, 34.60323]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22324",
          "modern": "Karastel",
          "latin": "Artemita?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.77776, 33.80051]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22325",
          "modern": "Ukbara",
          "latin": "[Buzurg Shapur]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.31242, 33.7806]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22326",
          "modern": "Hīt",
          "latin": "Idu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.82332, 33.64392]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22327",
          "modern": "Tell Abu Habbah",
          "latin": "Sippar",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.25466, 33.06]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22328",
          "modern": "Babylon",
          "latin": "Babylon",
          "greek": "Βαβυλών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.42082, 32.53617]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22329",
          "modern": "Nuffar",
          "latin": "Nippur",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.23018, 32.12655]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22330",
          "modern": "Tell Uhaimir",
          "latin": "Kish",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.58541, 32.55146]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22331",
          "modern": "Ishan Bahriyat",
          "latin": "Isin",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.27281, 31.88214]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22332",
          "modern": "Warka",
          "latin": "Uruk",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.63782, 31.32216]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22333",
          "modern": "Tell Abu Shahrain",
          "latin": "Larsa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.99608, 30.81652]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22335",
          "modern": "Tell Muqayyar",
          "latin": "Uri",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [46.103056, 30.9625]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22336",
          "modern": "Tulul Mujaili'",
          "latin": "Opis",
          "greek": "Ὦπις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.70127, 33.18405]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22337",
          "modern": "Tell Ibrahim",
          "latin": "Cutha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.61208, 32.76061]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22338",
          "modern": "Misiche (Anbar)",
          "latin": "Misiche",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.71713, 33.37903]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22340",
          "modern": "Kirkuk",
          "latin": "Arrapha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.39572, 35.46963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22341",
          "modern": "Oğuz",
          "latin": "Dara",
          "greek": "Ἀναστασιούπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.941111, 37.177778]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22344",
          "modern": "Silvan",
          "latin": "Tigranocerta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.346114, 38.069736]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22357",
          "modern": "Sidi-Brahim",
          "latin": "Gunugu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.90305, 36.570982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22370",
          "modern": "Kyustendil",
          "latin": "Pautalia",
          "greek": "Παυταλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.69027, 42.28257]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22388",
          "modern": "Uluçınar",
          "latin": "Rhosos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.887675, 36.4195645]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22389",
          "modern": "Peiraieus",
          "latin": "Peiraieus",
          "greek": "Πειραιεύς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.644609, 37.937222]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22391",
          "modern": "San Felice Circeo",
          "latin": "Circeii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.08319, 41.2302]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22392",
          "modern": "Rovine di Circe",
          "latin": "Circeii",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.06198, 41.24734]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22414",
          "modern": "Nabeul",
          "latin": "Neapolis",
          "greek": "Νεάπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.719394, 36.440669]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22426",
          "modern": "Salto de la Mora",
          "latin": "Ocuri",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.44721, 36.68722]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22427",
          "modern": "Medina-Sidonia",
          "latin": "Asido",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.92473, 36.45611]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22428",
          "modern": "Cádiz",
          "latin": "Gades",
          "greek": "Γάδειρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.294444, 36.528381]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22432",
          "modern": "Osuna",
          "latin": "Urso",
          "greek": "Ὄρσων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.090233, 37.242284]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22435",
          "modern": "Espejo",
          "latin": "Ucubi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.55378, 37.68084]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22440",
          "modern": "Almuñécar",
          "latin": "Sexi",
          "greek": "Σίξος/Ἐξιτανοί/Σέξ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.69354, 36.73186]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22442",
          "modern": "Lorquí",
          "latin": "Ilorci",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.254941, 38.081834]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22443",
          "modern": "Eivissa",
          "latin": "Ebusus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [1.43653, 38.90678]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22452",
          "modern": "Sao Salvador de Aramenha",
          "latin": "Ammaia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.386568, 39.369145]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22455",
          "modern": "Consuegra",
          "latin": "Consabura",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.606772, 39.460299]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22460",
          "modern": "Luz de Tavira",
          "latin": "Balsa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.694166, 37.086577]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22470",
          "modern": "Cáparra",
          "latin": "Capera",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.10109, 40.166755]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22471",
          "modern": "Alto del Castro",
          "latin": "Clunia Sulpicia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.370951, 41.780615]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22482",
          "modern": "Mértola",
          "latin": "Iulia Myrtilis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.66409, 37.63886]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22484",
          "modern": "São Sebastião do Freixo",
          "latin": "Collippo",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-8.797971, 39.673128]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22527",
          "modern": "Falda de la Muela",
          "latin": "Numantia",
          "greek": "Νουμαντία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.444447, 41.809392]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22529",
          "modern": "Cerro del Castillejo",
          "latin": "Irni",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.121603, 37.029983]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22531",
          "modern": "Badalona",
          "latin": "Baetulo",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.24658, 41.45233]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22541",
          "modern": "Centuripe",
          "latin": "Centuripae",
          "greek": "Κεντόριπα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.740017, 37.624073]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22544",
          "modern": "Serra Orlando",
          "latin": "Morgantina",
          "greek": "Μοργαντίνα/Μοργαντίνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.47908, 37.43103]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22545",
          "modern": "Marinella di Selinunte",
          "latin": "Selinus",
          "greek": "Σελινοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.8249, 37.58406]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22557",
          "modern": "Acerra",
          "latin": "Acerrae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.371233, 40.946092]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22560",
          "modern": "Sant'Agata dei Goti",
          "latin": "Saticula",
          "greek": "Σατικόλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.504137, 41.091587]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22561",
          "modern": "Atina",
          "latin": "Atina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.798223, 41.620477]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22562",
          "modern": "San Giovanni Incarico",
          "latin": "Fabrateria Nova",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.55442, 41.5189]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22563",
          "modern": "Cori",
          "latin": "Cora",
          "greek": "Κόρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.915671, 41.64255]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22564",
          "modern": "Piano della Civita",
          "latin": "Carsioli",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.04434, 42.08171]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22565",
          "modern": "Civitella di Nesce",
          "latin": "Nersae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.17791, 42.208353]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22586",
          "modern": "Cupramontana",
          "latin": "Cupra Montana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.12251, 43.45066]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22587",
          "modern": "Santissimo Crocifisso",
          "latin": "Trea",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.29188, 43.31829]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22588",
          "modern": "Villa Potenza",
          "latin": "Helvia Ricina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.424024, 43.327936]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22589",
          "modern": "Vasto",
          "latin": "Histonium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.71011, 42.1119]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22590",
          "modern": "Castelvecchio Subequo",
          "latin": "Superaequum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.73177, 42.12893]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22591",
          "modern": "Attiggio",
          "latin": "Attidium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.92529, 43.30807]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22592",
          "modern": "Borgo Tufico",
          "latin": "Tuficum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.00056, 43.34378]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22594",
          "modern": "Pianetto di Galeata",
          "latin": "Mevaniola",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [11.90444, 43.98802]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22598",
          "modern": "Cortijo de Casina",
          "latin": "Turirecina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.86042, 36.69456]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22599",
          "modern": "Tartessos",
          "latin": "Tartessos",
          "greek": "Τάρτησσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.4119, 36.93672]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22607",
          "modern": "Huelma",
          "latin": "Vergilia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.46127, 37.6507]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22608",
          "modern": "Guadix",
          "latin": "Accis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.13625, 37.30126]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22609",
          "modern": "Las Saetillas",
          "latin": "Segida",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.23998, 37.67083]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22614",
          "modern": "Tainaron",
          "latin": "Tainaron",
          "greek": "Ταίναρον/Ταίναρος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.4866293, 36.401551]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22618",
          "modern": "Jupa",
          "latin": "Tibiscum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.187011, 45.476036]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22620",
          "modern": "Roxolany",
          "latin": "Nikonion",
          "greek": "Νικωνία/Νικώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.436978, 46.183515]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22625",
          "modern": "Cissi",
          "latin": "Cissi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.7334035, 36.877461]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22626",
          "modern": "Medeina",
          "latin": "Althiburos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.786282, 35.872728]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22628",
          "modern": "Hnechir-Lorbeus",
          "latin": "Lares",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.841397, 36.081288]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22632",
          "modern": "Solunto",
          "latin": "Soluntum",
          "greek": "Σολοῦς/Σολόεις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.5315, 38.09316]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22634",
          "modern": "Isola San Pantaleo (Mozia)",
          "latin": "Motya",
          "greek": "Μοτύα/Μοτύη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.46829, 37.86747]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22636",
          "modern": "Calatafimi-Segesta",
          "latin": "Segesta",
          "greek": "Αἵγεστα/Σέγεστα/Ἕγεστα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.839871, 37.939199]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22637",
          "modern": "Erice",
          "latin": "Eryx",
          "greek": "Ἔρυξ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5919, 38.03528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22640",
          "modern": "Enna",
          "latin": "Henna",
          "greek": "Ἕννα/Ἔννα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.279558, 37.567652]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22641",
          "modern": "Monte Sant'Angelo",
          "latin": "Phintias",
          "greek": "Φιντιάς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.93171, 37.1001]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22643",
          "modern": "Gela",
          "latin": "Gela",
          "greek": "Γέλας",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.258433, 37.062775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22654",
          "modern": "Jebel Khayabir",
          "latin": "Alexandria?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [47.58242, 30.89504]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22657",
          "modern": "Sezze",
          "latin": "Setia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.05924, 41.49838]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22658",
          "modern": "Madonna di Mezzagosto",
          "latin": "Privernum",
          "greek": "Πρίβερνον/Πριούερνον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.18497, 41.49056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22659",
          "modern": "Ceccano",
          "latin": "Fabrateria Vetus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.33354, 41.56845]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22660",
          "modern": "Frosinone",
          "latin": "Frusino",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.351922, 41.64016]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22688",
          "modern": "Itanou",
          "latin": "Itanos",
          "greek": "Ἴτανος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.263095, 35.263286]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22689",
          "modern": "Phalasarna",
          "latin": "Phalasarna",
          "greek": "τὰ Φαλάσαρνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.5700273, 35.51074]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22693",
          "modern": "Civita d'Antino",
          "latin": "Antinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.47126, 41.88621]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22697",
          "modern": "Abbazia di Casamari",
          "latin": "Cereatae Marianae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.48747, 41.6714]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22699",
          "modern": "Rupite",
          "latin": "Herakleia Sintike",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.262582, 41.449509]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22701",
          "modern": "Kalandra",
          "latin": "Mende",
          "greek": "Μένδη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.419, 39.964]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22702",
          "modern": "Toroni",
          "latin": "Torone",
          "greek": "Τορώνη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.9008123, 39.9770534]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22703",
          "modern": "Nea Potidaia",
          "latin": "Poteidaia",
          "greek": "Ποτείδαια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.3278, 40.1937]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22706",
          "modern": "San Giovanni di Sinis",
          "latin": "Tharrus",
          "greek": "Θάρρας",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.440263, 39.873825]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22707",
          "modern": "Nora",
          "latin": "Nora",
          "greek": "Νώρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.015757, 38.984642]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22712",
          "modern": "Monteleone Sabino",
          "latin": "Trebula Mutuesca",
          "greek": "Τρήβουλα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.867802, 42.228053]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22713",
          "modern": "Santa Maria a Potenza",
          "latin": "Potentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.67123, 43.41403]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22716",
          "modern": "Kato Paphos",
          "latin": "Nea Paphos",
          "greek": "Πάφος/Βάφφω",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.40795, 34.76025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22717",
          "modern": "Potamos tou Kambou",
          "latin": "Soloi",
          "greek": "Σόλοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.8125385, 35.1406719]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22720",
          "modern": "Tremetousia",
          "latin": "Tremithous",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.607264, 35.08766]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22721",
          "modern": "Athienou-Ag. Fotios",
          "latin": "Golgoi",
          "greek": "Γολγοί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.54804, 35.073103]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22722",
          "modern": "Kythrea",
          "latin": "Chythroi",
          "greek": "Χύτροι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.494675, 35.25177]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22725",
          "modern": "Lampousa",
          "latin": "Lapethos",
          "greek": "Λάπηθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.197851, 35.355404]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22726",
          "modern": "Kyrenia",
          "latin": "Keryneia",
          "greek": "Κερυνία/Κερυνεία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.321417, 35.337334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22729",
          "modern": "Polis tis Khrysokhou",
          "latin": "Arsinoe",
          "greek": "Ἀρσινόη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.421841, 35.034889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22742",
          "modern": "Veria",
          "latin": "Beroia",
          "greek": "Βέροια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.204993, 40.524528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22743",
          "modern": "Gonnoi",
          "latin": "Gonnoi",
          "greek": "Γόννος/Γόννοι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.49426, 39.85377]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22744",
          "modern": "Kastro",
          "latin": "Atrax",
          "greek": "Ἄτραξ",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.19173, 39.57005]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22745",
          "modern": "Palealarissa",
          "latin": "Krannon",
          "greek": "Κραννών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.30245, 39.50051]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22746",
          "modern": "Agia Triada",
          "latin": "Skotoussa",
          "greek": "Σκοτοῦσσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.5403, 39.38533]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22747",
          "modern": "Nea Anchialos",
          "latin": "Pyrasos",
          "greek": "Πύρασος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.8206, 39.27922]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22749",
          "modern": "Kastro",
          "latin": "Histiaia",
          "greek": "Ἱστίαια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.090527, 38.946604]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22750",
          "modern": "Lamia",
          "latin": "Lamia",
          "greek": "Λαμία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.43516, 38.9046]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22751",
          "modern": "Iraklia",
          "latin": "Herakleia",
          "greek": " Ἡράκλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.442503, 38.790767]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22752",
          "modern": "Domokos",
          "latin": "Thaumakoi",
          "greek": "Θαυμακοί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.29742, 39.13065]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22753",
          "modern": "Neo Monastiri",
          "latin": "Proerna",
          "greek": "Πρόαρνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.273135, 39.243493]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22755",
          "modern": "Lilea",
          "latin": "Lilaia",
          "greek": "Λίλαια/Λίλαιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.50592, 38.62687]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22756",
          "modern": "Glyfada",
          "latin": "Aixone",
          "greek": "Αἰξωνή",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.7548945, 37.866334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22760",
          "modern": "Marathonas",
          "latin": "Marathon",
          "greek": "Μαραθών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.970146, 38.1465515]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22761",
          "modern": "Menidi",
          "latin": "Acharnai",
          "greek": "Ἀχαρναί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.73147, 38.08194]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22762",
          "modern": "Kotroni",
          "latin": "Aphidna",
          "greek": "Ἄφιδνα/Ἀφίδναι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.87911, 38.18736]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22778",
          "modern": "Skala Oropou",
          "latin": "Oropos",
          "greek": "Ὠρωπός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.79, 38.3195]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22779",
          "modern": "Graimada",
          "latin": "Tanagra",
          "greek": "Τάναγρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.587064, 38.309371]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22780",
          "modern": "Styra",
          "latin": "Styra",
          "greek": "Στύρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.2607, 38.1455]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22781",
          "modern": "Karystos",
          "latin": "Karystos",
          "greek": "Κάρυστος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.4204, 38.0165]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22786",
          "modern": "Trikala",
          "latin": "Trikka",
          "greek": "Τρίκκα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.762589, 39.558752]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22789",
          "modern": "Leukada",
          "latin": "Leucas",
          "greek": "Λευκάς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.7131, 38.8073]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22803",
          "modern": "Oynaş Köyü",
          "latin": "Metropolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.6281549, 39.171334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22809",
          "modern": "Velestino",
          "latin": "Pherai",
          "greek": "Φέραι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.737728, 39.384163]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22810",
          "modern": "Soros",
          "latin": "Pagasai",
          "greek": "Παγασαί",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.930713, 39.312923]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22814",
          "modern": "Elassona",
          "latin": "Olooson",
          "greek": "Ὀλοοσσών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.215715, 39.89278]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22815",
          "modern": "Elatia",
          "latin": "Elateia",
          "greek": "Ἐλάτεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.782061, 38.645635]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22816",
          "modern": "Davlia",
          "latin": "Daulis",
          "greek": "Δαυλίς/Δαυλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.72926, 38.50665]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22817",
          "modern": "Tithorea",
          "latin": "Tithorea",
          "greek": "Νεών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.66931, 38.58344]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22818",
          "modern": "Amfissa",
          "latin": "Amphissa",
          "greek": "Ἄμφισσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.374, 38.53]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22820",
          "modern": "Galaxidi",
          "latin": "Chaleion",
          "greek": "Χάλειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.38728, 38.378004]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22826",
          "modern": "Lepanto",
          "latin": "Naupaktos",
          "greek": "Ναύπακτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.828396, 38.393272]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22833",
          "modern": "Livadia",
          "latin": "Lebadeia",
          "greek": "Λεβάδεια/Λεπάδεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.87352, 38.431063]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22834",
          "modern": "Moulki",
          "latin": "Haliartos",
          "greek": "Ἁλίαρτος/Ἀρίαρτος/Ἁρίαρτος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.088416, 38.379818]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22835",
          "modern": "Loukisia",
          "latin": "Anthedon",
          "greek": "Ἀνθηδών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.448834, 38.498583]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22837",
          "modern": "Erimokastro",
          "latin": "Thespiai",
          "greek": "Θεσπιαί/Θέσπεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.154521, 38.293384]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22840",
          "modern": "Antikyra",
          "latin": "Antikyra",
          "greek": "Ἀντίκυρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.626059, 38.375439]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22841",
          "modern": "Amarinthos",
          "latin": "Amarynthos",
          "greek": "Ἀμάρυνθος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.9106, 38.3868]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22843",
          "modern": "Rhamnous",
          "latin": "Rhamnous",
          "greek": "Ῥαμνοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.028009, 38.222727]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22854",
          "modern": "Paleapoli",
          "latin": "Samothrace",
          "greek": "Σαμοθράκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.5358744, 40.5032354]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22857",
          "modern": "Kapraina",
          "latin": "Chaironeia",
          "greek": "Χαιρώνεια/Χηρώνια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.840365, 38.493361]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22860",
          "modern": "Chios",
          "latin": "Chios",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.1342335, 38.37641]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22885",
          "modern": "Camarina",
          "latin": "Camarina",
          "greek": "Καμάρινα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.44682, 36.87229]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22906",
          "modern": "Castelleone di Suasa",
          "latin": "Suasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.984093, 43.625016]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22907",
          "modern": "Cupra Marittima",
          "latin": "Cupra Maritima",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.85356, 43.03386]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22912",
          "modern": "Gortyn",
          "latin": "Gortyna",
          "greek": "Γόρτυνα/Γόρτυν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.9469437222, 35.0627201667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22938",
          "modern": "Santa Maria a Faifoli",
          "latin": "Fagifulae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.667625, 41.657876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22939",
          "modern": "Trivento",
          "latin": "Terventum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.55064, 41.785]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22940",
          "modern": "Lanciano",
          "latin": "Anxanum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.391377, 42.233175]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22941",
          "modern": "Piano Laroma",
          "latin": "Cluviae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.26322, 42.12864]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22954",
          "modern": "Rogatica",
          "latin": "Ris(...)",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.00428, 43.801659]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22966",
          "modern": "Skopelos",
          "latin": "Peparethos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.719616, 39.119096]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22993",
          "modern": "Reşca",
          "latin": "Romula",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.393833, 44.172401]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23006",
          "modern": "er-Rabba",
          "latin": "Areopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.736, 31.272021]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23106",
          "modern": "Bukhara (Buxoro)",
          "latin": "",
          "greek": "",
          "ancient": 0,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [64.433333, 39.766667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23114",
          "modern": "Palea Koronia",
          "latin": "Koroneia",
          "greek": "Κορώνεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.956902, 38.392613]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23115",
          "modern": "Karditsa",
          "latin": "Akraiphiai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.219541, 38.451533]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23116",
          "modern": "Topolia",
          "latin": "Kopai",
          "greek": "Κῶπαι",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.160772, 38.493128]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23120",
          "modern": " Atalandi",
          "latin": "Opous",
          "greek": "Ὀποῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.992, 38.652]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23121",
          "modern": "Dadi",
          "latin": "Amphikleia",
          "greek": "Ἀμφίκαια/Ἀμφίκλεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.5813, 38.6424]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23122",
          "modern": "Pelasgia",
          "latin": "Larissa Kremaste",
          "greek": "Κρεμαστὴ Λάρισα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.838823, 38.964335]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23181",
          "modern": "Castel Volturno",
          "latin": "Volturnum",
          "greek": "Οὐουλτοῦρνος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.941734, 41.033657]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23361",
          "modern": "Skelani",
          "latin": "*Malvesia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.533333, 43.966667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23362",
          "modern": "Gradina",
          "latin": "Domavium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.3436111, 44.2069444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23367",
          "modern": "Pedhiadha",
          "latin": "Lyktos",
          "greek": "Λύκτος/Λύττος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.368687, 35.207811]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23368",
          "modern": "Limin Khersonisos",
          "latin": "Chersonasos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.390563, 35.321428]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23369",
          "modern": "Argyroupolis",
          "latin": "Lappa",
          "greek": "Λάππα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.33605, 35.28902]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23373",
          "modern": "Kastelli Kisamou",
          "latin": "Kisamos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.660727, 35.495307]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23374",
          "modern": "Epano Palaiokastro",
          "latin": "Polyrrenia",
          "greek": "Πολυρρηνία/Πολύρρηνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.6556259, 35.4579774]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23375",
          "modern": "Chania",
          "latin": "Kydonia",
          "greek": "Κυδωνία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.019611, 35.517333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23386",
          "modern": "Ierapetra",
          "latin": "Hierapytna",
          "greek": "Ἱεράπυτνα/Ἱεράπυτνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.73712, 35.0067]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23387",
          "modern": "Kefala",
          "latin": "Arkades",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.282439, 35.080331]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23388",
          "modern": "Bender el-Kebir",
          "latin": "Berenike",
          "greek": "Βερενίκη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.47517, 23.91052]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23488",
          "modern": "Takht-e Soleyman",
          "latin": "Adur Gushnasp",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [47.23468, 36.60528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23494",
          "modern": "Erk Kala",
          "latin": "Alexandria",
          "greek": "Ἀντιόχεια τῆς Μαργιανῆς/Ἀλεξάνδρεια",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [62.19209, 37.66922]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23496",
          "modern": "Antequera",
          "latin": "Anticaria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.5575, 37.0145]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23501",
          "modern": "Los Cercos de La Dehesa de Los Castillejos",
          "latin": "Contributa Iulia Ugultunia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.39095, 38.3489]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23503",
          "modern": "Sierra de Coto",
          "latin": "Nertobriga Concordia Iulia",
          "greek": "Νερκόβρικα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.613684, 38.117474]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23513",
          "modern": "Büyük Nefes",
          "latin": "Taouion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.5061, 39.85798]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23587",
          "modern": "Kinet Höyük",
          "latin": "Issus",
          "greek": "Ἰσσός/Νικόπολις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.15704, 36.85367]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23588",
          "modern": "Ada Tepe",
          "latin": "Myriandros",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.0241667, 36.4941667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23612",
          "modern": "Wadi el-Harriga",
          "latin": "Digdida Selorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.16671, 30.69797]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23618",
          "modern": "Sirte",
          "latin": "Euphranta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.588337, 31.205047]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23677",
          "modern": "Medjez el-Bab",
          "latin": "Membressa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.61142, 36.652489]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23829",
          "modern": "Alhambra",
          "latin": "Laminium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.053453, 38.899451]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24855",
          "modern": "Ksar Lemsa",
          "latin": "Limisa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.691974, 36.035881]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24856",
          "modern": "Henchir-Oum-el-Abouab",
          "latin": "*Seressi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.773564, 36.167347]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24857",
          "modern": "Henchir-Dzemda",
          "latin": "Semta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.887345, 36.269282]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24858",
          "modern": "Henchir-el-Krendeg (el-Khandag)",
          "latin": "Abbir Maius",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.008826, 36.374]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24859",
          "modern": "Henchir-Bichga",
          "latin": "Bisica Lucana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.634267, 36.397969]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24861",
          "modern": "El Ejido",
          "latin": "Murgi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.812733, 36.775074]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24889",
          "modern": "Palma",
          "latin": "Palma",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -122,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [2.649993, 39.569443]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "24890",
          "modern": "Alcúdia",
          "latin": "Pollentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.123348, 39.848418]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25827",
          "modern": "Aksum",
          "latin": "Axoume",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [38.71911, 14.13199]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25103",
          "modern": "Tifech",
          "latin": "Tipasa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.668976, 36.164123]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25134",
          "modern": "Cerro de la Cabezas",
          "latin": "Iliturgicola",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.12654, 37.50876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25131",
          "modern": "El Castillo",
          "latin": "Libisosa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.35509, 38.94156]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25130",
          "modern": "Montoro",
          "latin": "Epora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.381896, 38.026033]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25135",
          "modern": "Castillo de San Esteban",
          "latin": "Ilugo",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.2108327, 38.2488224]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25129",
          "modern": "Llíria",
          "latin": "Edeta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.59394, 39.62579]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25128",
          "modern": "Torrenueva",
          "latin": "Edeba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.36492, 38.64007]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25136",
          "modern": "Carcabuey",
          "latin": "Ipolcobulcola",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.273434, 37.443593]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25137",
          "modern": "Cortijo de Izcar",
          "latin": "*Ipsca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.39041, 37.67242]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25138",
          "modern": "Paredones",
          "latin": "Iptuci",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.37766, 37.75479]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25139",
          "modern": "Alcurrucén",
          "latin": "Sacili",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.488, 37.98783]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25140",
          "modern": "Úbeda la Vieja",
          "latin": "Salaria?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.32495, 37.92546]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25141",
          "modern": "Las Torrecillas",
          "latin": "Sucia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.14805, 38.06126]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25142",
          "modern": "Sohaíl",
          "latin": "Suel",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.628919, 36.525435]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25143",
          "modern": "Tíjola",
          "latin": "*Tagili",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.439482, 37.345474]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25144",
          "modern": "al-Madhar",
          "latin": "[al-Madhar]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [47.407849, 31.493314]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25145",
          "modern": "Suq al-Ahwaz",
          "latin": "Hurmizd Ardashir",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.68438, 31.316712]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25146",
          "modern": "Ja Nishin",
          "latin": "Soloke?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [49.426712, 30.987225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25147",
          "modern": "Jundishapur",
          "latin": "Veh-Andiyok-Shapur",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.51702, 32.28572]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25148",
          "modern": "Wasit",
          "latin": "Kashkar",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [46.29969, 32.18618]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25149",
          "modern": "Maghlub",
          "latin": "Forat?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [47.70516, 30.78305]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25150",
          "modern": "Wanna wa Sadun",
          "latin": "Marad",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.78371, 32.09285]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25151",
          "modern": "Shushtar",
          "latin": "Sostrate",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.8530058, 32.0507229]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25152",
          "modern": "Benghazi (Euesperides)",
          "latin": "Euesperides",
          "greek": "Εὐεσπερίδες",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.091198, 32.109789]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25153",
          "modern": "Palaia Chersonesos",
          "latin": "Palaia Chersonesos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.408798, 44.563122]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25154",
          "modern": "Dehesa de Morales de las Cuevas",
          "latin": "Brigaecium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.59582, 42.02791]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25155",
          "modern": "Chouhoud el-Batin",
          "latin": "Abitinae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.549085, 36.627874]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25156",
          "modern": "Henchir-Kern-el-Kebch",
          "latin": "Aunobaris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.153496, 36.36639]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25157",
          "modern": "Slouguia",
          "latin": "*Chidibbia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.510248, 36.579541]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25158",
          "modern": "Henchir-Harat",
          "latin": "Segermes",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.301692, 36.345023]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25159",
          "modern": "Henchir-Aouraou",
          "latin": "Ureu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.535499, 36.875269]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25160",
          "modern": "Henchir-Djal",
          "latin": "Uzali Sar",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.688235, 36.811582]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25161",
          "modern": "Béja",
          "latin": "Vaga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.184162, 36.726581]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25162",
          "modern": "Rehovot",
          "latin": "Betomolachon?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.566035, 31.02999]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25163",
          "modern": "Minet Rubin",
          "latin": "Iamneia Paralios",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.696549, 31.929643]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25164",
          "modern": "Barnea",
          "latin": "Maioma Ascalonitis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [34.561808, 31.692211]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25166",
          "modern": "Lefkosia",
          "latin": "Ledroi",
          "greek": "Λέδρα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.347297, 35.157167]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25167",
          "modern": "Irakleion",
          "latin": "Heraklion",
          "greek": "Ἡράκλειον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 1450
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.133221, 35.340702]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25168",
          "modern": "Elounta",
          "latin": "Olous",
          "greek": "Ὀλοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.738816, 35.257679]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25169",
          "modern": "Nea Praisos",
          "latin": "Praisos",
          "greek": "Πραισός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [26.089225, 35.124577]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25170",
          "modern": "Kastellos",
          "latin": "Priansos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [25.26122, 35.04456]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25171",
          "modern": "Rethymno",
          "latin": "Rhithymna",
          "greek": "Ῥίθυμνα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.472901, 35.371092]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25172",
          "modern": "Burgaz örenyeri",
          "latin": "Cnidus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -330
        },
        "geometry": {
          "type": "Point",
          "coordinates": [27.69938, 36.7356]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25173",
          "modern": "Distomo",
          "latin": "Ambrossos",
          "greek": "Ἄμβροσσος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.66763, 38.42845]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25174",
          "modern": "Magoula Gremnos",
          "latin": "Argissa",
          "greek": "Ἄργισσα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.34118, 39.65986]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25175",
          "modern": "Agios Konstantinos",
          "latin": "Daphnous",
          "greek": "Δαφνοῦς",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.857528, 38.756459]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25176",
          "modern": "Dendri",
          "latin": "Hyettos",
          "greek": "Ὑηττός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.103304, 38.55756]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25177",
          "modern": "Pirgos Kieriou",
          "latin": "Kierion",
          "greek": "Κιέριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.06635, 39.36679]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25178",
          "modern": "Ag. Theodoroi",
          "latin": "Medeon",
          "greek": "Μεδεών",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.6827, 38.36754]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25179",
          "modern": "Kastri",
          "latin": "Oichalia?",
          "greek": "Οιχαλία",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.099827, 38.602679]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25180",
          "modern": "Gavalou",
          "latin": "Trichonion",
          "greek": "Τριχόνειον/Τριχώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.528, 38.528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25181",
          "modern": "Nokalakevi",
          "latin": "Archaiopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.237387, 42.389792]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25182",
          "modern": "Očamčire",
          "latin": "Gyenos",
          "greek": "Γυηνός",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.424079, 42.74676]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25183",
          "modern": "Kadirli",
          "latin": "Phlaouiopolis",
          "greek": "Φλαβιόπολη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.1015675, 37.3664785]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25184",
          "modern": "Başpınar",
          "latin": "Adatha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.4258015, 37.705104]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25185",
          "modern": "Monte Adranone",
          "latin": "Adranon?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.144012, 37.687766]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25186",
          "modern": "Mut",
          "latin": "Mothis",
          "greek": "Μωθις/Μαθων",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.980118, 25.486423]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25187",
          "modern": "Amheida",
          "latin": "Trimithis",
          "greek": "Τριμιθις",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.87139, 25.66778]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25188",
          "modern": "Karanog",
          "latin": "Nalote",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.08737, 22.72248]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25189",
          "modern": "Wad Ban Naqa",
          "latin": "Araba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.190286, 16.570227]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25190",
          "modern": "Begrawiya",
          "latin": "Meroe",
          "greek": "Μεροη/Μερόη",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [33.75, 16.94]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25191",
          "modern": "Gebel Barkal",
          "latin": "Napata",
          "greek": "Ναπατα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [31.853738, 18.565952]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25192",
          "modern": "Kawa",
          "latin": "Patigga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.521669, 19.10493]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25193",
          "modern": "al-'Ula",
          "latin": "Dedan",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [37.922841, 26.612692]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25194",
          "modern": "Mrikeb Thala",
          "latin": "Macomades?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.165181, 35.8254]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25195",
          "modern": "Ag. Georgios",
          "latin": "Anaphlystos",
          "greek": "Ἀνάφλυστος",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.9508185, 37.7273205]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25196",
          "modern": "Trachones",
          "latin": "Euonymon",
          "greek": "Εὐώνυμον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.7414, 37.9159]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25197",
          "modern": "Liopesi",
          "latin": "Paiania Hypenerthen",
          "greek": "Παιανία ὑπένερθεν",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.8552995, 37.958506]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25198",
          "modern": "Cortijo el Rosario",
          "latin": "Hasta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.18147, 36.78649]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25199",
          "modern": "Álora",
          "latin": "Iluro",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.706673, 36.822609]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25200",
          "modern": "Algeciras",
          "latin": "Iulia Traducta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.447744, 36.129768]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25201",
          "modern": "El Hachillo",
          "latin": "Lauro",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.83328, 37.28219]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25202",
          "modern": "Morón de la Frontera",
          "latin": "Lucurgentum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.44934, 37.11997]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25203",
          "modern": "Azuaga",
          "latin": "Municipium Flavium V(...)",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.6743, 38.25806]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25204",
          "modern": "Dehesa de Mulva",
          "latin": "Munigua",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.74088, 37.71329]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25205",
          "modern": "Lebrija",
          "latin": "Nabrissa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.078402, 36.919504]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25206",
          "modern": "Cantillana",
          "latin": "Naeva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.825805, 37.608692]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25207",
          "modern": "Cortijo de Escaña",
          "latin": "Nescania",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.682723, 36.931327]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25208",
          "modern": "San Juan de Aznalfarache",
          "latin": "Osset",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.035436, 37.358375]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25209",
          "modern": "San Sebastián de los Ballesteros",
          "latin": "Sabetanum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.824214, 37.654881]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25210",
          "modern": "Cerro de Sabora",
          "latin": "Sabora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.02456, 36.94762]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25211",
          "modern": "El Casar",
          "latin": "Salpensa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.69938, 37.11956]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25212",
          "modern": "Burguillos del Cerro",
          "latin": "Segida",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.589301, 38.378494]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25213",
          "modern": "Jerez de los Caballeros",
          "latin": "Seria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-6.77856, 38.30934]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25214",
          "modern": "La Torre del Aguila",
          "latin": "Siarum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.751603, 37.052397]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25215",
          "modern": "Montemayor",
          "latin": "Ulia Fidentia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.698889, 37.648657]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25216",
          "modern": "Las Torres de Alocaz",
          "latin": "Urgia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.82933, 36.990065]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25217",
          "modern": "La Encarnación",
          "latin": "Asso",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-1.898076, 38.021113]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25218",
          "modern": "Jaén",
          "latin": "Aurgi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.78947, 37.76577]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25219",
          "modern": "Vilches",
          "latin": "*Baesucci",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.5072, 38.20634]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25220",
          "modern": "Cártama",
          "latin": "Cartima",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.630784, 36.711379]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25221",
          "modern": "Zambra",
          "latin": "Cisimbrium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-4.38714, 37.385397]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25222",
          "modern": "Thyrion",
          "latin": "Thyrrheion",
          "greek": "Θύρρειον/Θύριον/Θούριον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.98732, 38.852008]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25223",
          "modern": "Henchir Dougga",
          "latin": "Thugga Terebenthina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [9.014215, 35.829469]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25224",
          "modern": "Qabala",
          "latin": "Chabala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [47.845832, 40.981389]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25225",
          "modern": "Dvin",
          "latin": "Doubios",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.57917, 40.004686]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25226",
          "modern": "Vagharshapat",
          "latin": "Kainepolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.291164, 40.161769]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25227",
          "modern": "Vardtsikhe",
          "latin": "Rhodopolis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.715101, 42.151314]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25228",
          "modern": "Shorapani",
          "latin": "Sarapanis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.066077, 42.100845]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25229",
          "modern": "Amuda",
          "latin": "Ammodios",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.93, 37.104166]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25230",
          "modern": "Eski Mosul",
          "latin": "Balad",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.73664, 36.51081]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25231",
          "modern": "Silvan",
          "latin": "Maipa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.003257, 38.1427855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25232",
          "modern": "Tell 'Ajaja",
          "latin": "Shadikanni",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.72062, 36.20814]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25233",
          "modern": "Tell Jidr",
          "latin": "[Dabrum]?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.70486, 31.82422]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25234",
          "modern": "Arjan",
          "latin": "Veh-az-Amid-Kavad",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [50.2751, 30.65294]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25235",
          "modern": "Bushir",
          "latin": "[Bushahr]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [50.8322135, 28.928168]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25236",
          "modern": "Firuzi 2",
          "latin": "Matezzish?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.833611, 29.928333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25237",
          "modern": "Kamfiruz",
          "latin": "Kaupirrish",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [52.323145, 30.161109]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25238",
          "modern": "Rishahr",
          "latin": "[Rishahr]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [50.836721, 28.911919]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25239",
          "modern": "ed-Dur",
          "latin": "Omana?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [50.51098, 26.231013]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25240",
          "modern": "Thaj",
          "latin": "Gerra?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.726603, 26.877823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25241",
          "modern": "Gonbad-e Qabus",
          "latin": "[Jurjan]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [55.1454375, 37.232558]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25242",
          "modern": "Nishapur",
          "latin": "Nev-Shapur",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [58.84734, 36.17094]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25243",
          "modern": "Köne Nusaý",
          "latin": "Nisaia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [58.21115, 37.95195]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25244",
          "modern": "Tus",
          "latin": "Tusa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [59.51875, 36.48644]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25245",
          "modern": "Balkh",
          "latin": "Bactra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [66.901245, 36.767444]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25246",
          "modern": "Ai Khanoum",
          "latin": "Alexandria Oxiana?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [69.41166, 37.16488]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25247",
          "modern": "Kunduz",
          "latin": "Drapsaka",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [68.8607435, 36.7169365]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25248",
          "modern": "Termez",
          "latin": "Tarmita",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [67.192271, 37.264324]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25249",
          "modern": "Husn esh-Shadur",
          "latin": "Chalcis sub Libano",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [36.241643, 33.95773]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25250",
          "modern": "Castuera",
          "latin": "Artigi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.545601, 38.722599]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25251",
          "modern": "Sierra de Montellano",
          "latin": "Callet",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.55433, 37.00724]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25252",
          "modern": "Cortijo de Carija",
          "latin": "Carissa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.73156, 36.87714]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25253",
          "modern": "Ivanjica",
          "latin": "Cel(...)",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.233355, 43.583305]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25254",
          "modern": "Sočanica",
          "latin": "Dard(...)",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [20.80919, 43.05156]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25255",
          "modern": "Pianello",
          "latin": "Planina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.15866, 43.48771]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25256",
          "modern": "Tolentino",
          "latin": "Tolentinum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [13.288166, 43.209596]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25257",
          "modern": "Monte do Viso",
          "latin": "Forum Limicorum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-7.5675, 42.07058]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25258",
          "modern": "Aguilar de Campos",
          "latin": "Intercatia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.183333, 41.983333]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25259",
          "modern": "El Castro",
          "latin": "Lancia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-5.4314338, 42.5304521]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25261",
          "modern": "Tell Tnenir",
          "latin": "Thannuris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.86591, 36.42025]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25262",
          "modern": "Ardabil",
          "latin": "[Ardabil]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.295051, 38.24647]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25263",
          "modern": "Leilan",
          "latin": "Ganzak?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [46.201883, 37.012264]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25264",
          "modern": "Zohak Qal'eh",
          "latin": "Phraaspa?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [46.9434325, 37.3157215]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25265",
          "modern": "Tell Abarta",
          "latin": "[Aberta]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.8804, 33.23908]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25266",
          "modern": "Qal'at 'Ana",
          "latin": "Anatho",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.97943, 34.46761]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25268",
          "modern": "Bint al-Emir",
          "latin": "Daskara?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.92968, 33.93651]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25269",
          "modern": "Birs Nimrud",
          "latin": "Borsippa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.34189, 32.39198]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25270",
          "modern": "Tell al-Deylam",
          "latin": "Dilbat",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.46598, 32.29612]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25271",
          "modern": "Barghuthiat",
          "latin": "Girumu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.791706, 32.699429]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25272",
          "modern": "Gerd 'Adul 'Aziz",
          "latin": "Hazza",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.89609, 36.10404]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25273",
          "modern": "Kifrin",
          "latin": "Bechchouphrein?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [42.085404, 34.375849]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25274",
          "modern": "Qasr Shamamok",
          "latin": "Kilizu",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.75206, 36.10508]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25275",
          "modern": "Shjara",
          "latin": "[al-Sinn?]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [43.41903, 35.22285]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25276",
          "modern": "Tell Miskin",
          "latin": "Maskin?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.24543, 33.82369]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25277",
          "modern": "Tulul el-Shu'ailah",
          "latin": "Skaphe?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.107378, 32.953638]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25278",
          "modern": "Tell Baruda",
          "latin": "Veh Ardashir",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.55336, 33.09823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25279",
          "modern": "Abu Halafiya",
          "latin": "Vologesias?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.541407, 33.045004]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25280",
          "modern": "Zindan",
          "latin": "Dastagird?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.652757, 33.897044]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25281",
          "modern": "Sar Pol-i Zohab",
          "latin": "[Hulwan]",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -750,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.86922, 34.46267]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25282",
          "modern": "Ivan-i Karkheh",
          "latin": "Eran-Khurra-(kard-) Shapur?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.12264, 32.3309]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25283",
          "modern": "Khurmal",
          "latin": "Syarazur?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [46.03589, 35.299481]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "25440",
          "modern": "Mdina",
          "latin": "Melita",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.4001243, 35.8851671]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26682",
          "modern": "Szőny-Vásártér",
          "latin": "Mun. Brigetio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.1601, 47.73526]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26916",
          "modern": "Ses Salines",
          "latin": "Guium?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.050936, 39.339079]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26917",
          "modern": "Ciutadella",
          "latin": "Iamo",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.839243, 40.002343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26926",
          "modern": "Mahón",
          "latin": "Mago",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.264116, 39.889482]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26952",
          "modern": "Manacor",
          "latin": "*Tuci?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [3.21062, 39.568749]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27291",
          "modern": "Azouli",
          "latin": "Adouli",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.676537, 15.275955]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27295",
          "modern": "Nagran",
          "latin": "Anagrana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.132222, 17.491667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27297",
          "modern": "Baraqish",
          "latin": "Athroula",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [44.792983, 15.995719]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27307",
          "modern": "Ma'in",
          "latin": "Karna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.333465, 16.705701]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27313",
          "modern": "Marib",
          "latin": "Mariaba",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 200,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.35, 15.416667]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27326",
          "modern": "R Rufiji",
          "latin": "Rhapta",
          "greek": "Ράπτα",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.3631, -7.69731]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "27327",
          "modern": "Shabwa",
          "latin": "Sabatha",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [48.613509, 15.919528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28867",
          "modern": "Pakistan",
          "latin": "Alexandrou Limen",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [67.920001, 24.649668]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28878",
          "modern": "Banbhore?",
          "latin": "Barbarikon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [69.021536, 24.92407]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28879",
          "modern": "Bharuch",
          "latin": "Barygaza",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [72.993, 21.712]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28904",
          "modern": "Kanauj? Pāli: Kaṇṇakujja? Skt.: Kānyakubhya",
          "latin": "Kanogiza",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [79.918632, 27.053262]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28908",
          "modern": "Kosam Inam",
          "latin": "Kauśāmbī",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [81.084911, 25.378232]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28918",
          "modern": "Mathura",
          "latin": "Methora",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [77.678846, 27.483527]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28919",
          "modern": "Akota",
          "latin": "Minnagara?",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [73.075764, 22.060829]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "28980",
          "modern": "Ujjain Skt.: Ujjayīni",
          "latin": "Ozene",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [75.782933, 23.177194]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "29002",
          "modern": "Patna Skt.: Paṭaliputra",
          "latin": "Palibothra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [85.13502, 25.614443]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "29026",
          "modern": "Bahmanabad?",
          "latin": "Patala",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [68.065079, 24.72237]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "30833",
          "modern": "Bairat",
          "latin": "Virāta",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [76.171377, 27.442939]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32190",
          "modern": "Anurādhapura",
          "latin": "Anourogrammon",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [80.414911, 8.313895]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32197",
          "modern": "Banavasi",
          "latin": "Banabasi",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [75.01242, 14.535519]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32211",
          "modern": "Tranquebar Skt.: Kaveripattinam",
          "latin": "Chaberis Emporion",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [79.85456, 11.025067]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32220",
          "modern": "Salsette Is. Skt.: Dhenukātaka",
          "latin": "Dounga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [72.90704, 19.205176]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32228",
          "modern": "Brahmapuri",
          "latin": "Hippokoura",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [74.35932, 16.569362]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32233",
          "modern": "Uraiyar?",
          "latin": "Kaliour",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [78.679619, 10.687267]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32236",
          "modern": "Kalyan",
          "latin": "Kalliena",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [73.139156, 19.272784]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32274",
          "modern": "Kanchipuram",
          "latin": "Malanga",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [79.69958, 12.838963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32309",
          "modern": "Madurai",
          "latin": "Modoura",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [78.122503, 9.90839]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32338",
          "modern": "Cranganūr Tamil: Muciri",
          "latin": "Muziris",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [76.213146, 10.153976]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32412",
          "modern": "Nirkunnam",
          "latin": "Nelkynda",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [76.558846, 9.272624]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32425",
          "modern": "Paithan Skt.: Pratiṣṭhāna",
          "latin": "Paithana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [75.385416, 19.468043]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32437",
          "modern": "Arikamedu",
          "latin": "Podouke",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [79.819493, 11.901409]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "32453",
          "modern": "Ter",
          "latin": "Tagara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [76.14594, 18.301382]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "33574",
          "modern": "Hajar Kuhlan",
          "latin": "Tamna",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": -30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [45.793817, 14.986325]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "45304",
          "modern": "Mirina",
          "latin": "Methylion",
          "greek": "Μεθύλιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.962071, 39.408469]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "45308",
          "modern": "Ekarra",
          "latin": "Ekkara",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.199678, 39.14498]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "45324",
          "modern": "Kastro Ichalias",
          "latin": "Oichalia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 20,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.947804, 39.624618]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "46097",
          "modern": "Dodurga",
          "latin": "Themisonion",
          "greek": "Θεμισώνιον",
          "ancient": 1,
          "major": 1,
          "type": "11",
          "building": 0,
          "accuracy": 2000,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.34664, 37.44167]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "12",
          "modern": "Regensburg",
          "latin": "Castra Regina",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 175,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.098239, 49.01948]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "16",
          "modern": "Lorch",
          "latin": "Lauriacum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 60,
          "endyear": 488
        },
        "geometry": {
          "type": "Point",
          "coordinates": [14.474616, 48.219841]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "17",
          "modern": "Strasbourg",
          "latin": "Argentorate",
          "greek": "Ἀργεντόρατον",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.75108, 48.58272]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23",
          "modern": "Windisch",
          "latin": "Vindonissa",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -150,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [8.220216, 47.4785111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "527",
          "modern": "Bonn",
          "latin": "Bonna",
          "greek": "Βόννα",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.099378, 50.744804]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "532",
          "modern": "Neuss",
          "latin": "Novaesium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.721944, 51.183889]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "898",
          "modern": "Birten",
          "latin": "Castra Vetera",
          "greek": "Οὐετέρρα",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.469989, 51.646389]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "2104",
          "modern": "Valkenburg",
          "latin": "Praetorium Agrippinae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 39,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [4.4336, 52.179988]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10871",
          "modern": "Bad Deutsch-Altenburg",
          "latin": "Carnuntum",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 200,
          "startyear": 6,
          "endyear": 400
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.903854, 48.13982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "10899",
          "modern": "Komárom-Szőny",
          "latin": "Brigetio",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [18.19342, 47.73146]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "13878",
          "modern": "Gardun",
          "latin": "Tilurium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.7157599, 43.6113917]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20684",
          "modern": "Chester",
          "latin": "Deva",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.891944, 53.189545]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "20687",
          "modern": "Caerleon",
          "latin": "Isca",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.955238, 51.61034]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21146",
          "modern": "Al Lajjun",
          "latin": "Betthorus",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.868542, 31.237033]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21236",
          "modern": "Satala",
          "latin": "Satala",
          "greek": "τὰ Σάταλα/ἡ Σάταλαtm",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [39.597934, 40.027787]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21251",
          "modern": "Bayburt",
          "latin": "Sinoria",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 200,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.22488, 40.255169]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21362",
          "modern": "Usk",
          "latin": "*Burrium",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 54,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-2.900836, 51.699966]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21644",
          "modern": "Lambèse",
          "latin": "Lambaesis",
          "greek": "Λάμβαισα",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.254719, 35.490111]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21648",
          "modern": "Ksar Baghai",
          "latin": "Bagai",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [7.118102, 35.535551]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21718",
          "modern": "Udruh",
          "latin": "Adrou",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [35.59571, 30.329232]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21768",
          "modern": "Bu Njem",
          "latin": "Gholaia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [15.41287, 30.578165]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21794",
          "modern": "Picunda",
          "latin": "Pityous",
          "greek": "Πιτιῦς/Πιτυοῦς",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -330,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.33182, 43.16017]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "21841",
          "modern": "Remada",
          "latin": "Tillibari",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [10.397994, 32.313919]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22167",
          "modern": "El-Kasbat",
          "latin": "Gemellae",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [5.522889, 34.636561]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22342",
          "modern": "Hasankeyf",
          "latin": "Riskephas",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.413055, 37.714166]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22343",
          "modern": "Mardin",
          "latin": "Marde",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.735111, 37.312236]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22356",
          "modern": "Badès",
          "latin": "Badias",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 200,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [6.67125, 34.750225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22617",
          "modern": "Berzovia",
          "latin": "Berzobis",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [21.62338, 45.42824]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "22989",
          "modern": "Inchtuthil",
          "latin": "Pinnata Castra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 300
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-3.424, 56.541]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "23464",
          "modern": "Tsikhisdziri",
          "latin": "Petra Pia Iustiniana",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 2000,
          "startyear": -550,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.753283, 41.768399]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26359",
          "modern": "Aquincum fortress",
          "latin": "Aquincum Castra",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [19.0416, 47.54201]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "26674",
          "modern": "Wien",
          "latin": "Vindobona",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 20,
          "startyear": 97,
          "endyear": 400
        },
        "geometry": {
          "type": "Point",
          "coordinates": [16.37097, 48.21141]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "40998",
          "modern": "az-Zintan",
          "latin": "Thenteos",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 2000,
          "startyear": 0,
          "endyear": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.261994, 31.930439]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "41088",
          "modern": "Noviy Afon",
          "latin": "Tracheia",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 200,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.8081485, 43.0945598]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "41089",
          "modern": "Tsebelda",
          "latin": "Tzibile",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 200,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [41.27512, 43.022596]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "41091",
          "modern": "Canayer",
          "latin": "Kaine Parembole",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 2000,
          "startyear": 300,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.008245, 40.942937]
        }
      }, {
        "type": "Feature",
        "properties": {
          "id": "41331",
          "modern": "Rabat Kalesi",
          "latin": "Siphrios",
          "greek": "",
          "ancient": 1,
          "major": 1,
          "type": "17",
          "building": 0,
          "accuracy": 2000,
          "startyear": -30,
          "endyear": 640
        },
        "geometry": {
          "type": "Point",
          "coordinates": [40.217509, 37.391395]
        }
      }]
    }
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
});
map.on('click', 'places', function (e) {
  new mapboxgl.Popup().setLngLat(e.lngLat).setHTML('<h4>Moderne naam:</h4>' + e.features[0].properties.modern + '<h4>Latijnse naam:</h4>' + e.features[0].properties.latin + '<h4>Start jaar:</h4>' + e.features[0].properties.startyear + '<h4>Eind jaar:</h4>' + e.features[0].properties.endyear).addTo(map);
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53808" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/mapbox.js"], null)
//# sourceMappingURL=/mapbox.c5675114.js.map