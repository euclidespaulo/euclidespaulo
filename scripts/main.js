// JavaScript Document


// Add ArcGIS API for Javascript
var require;

require (["esri/config", "esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer"
], function(esriConfig, Map, MapView, Graphic, GraphicsLayer ) {

	esriConfig.apiKey = "AAPK98dff989655045b59e5fd15988836c8dXN4PRCz7FTSk1qb0127gcac2QvGPaSl193EO6Gih2VgqPEyLNAp4eHuixNCXaGAT";
	
	var map = new Map({
		basemap: "arcgis-navigation"
  });
	
	var view = new MapView({
		map: map,
		center: [-71.15, 41.70],
		zoom: 10,
		container: "viewDiv"   
     });
	
	var graphicsLayer = new GraphicsLayer();
	map.add(graphicsLayer);
	
	var point = { //Create a point
    type: "point",
    longitude: -71.15,
    latitude: 41.70
 };
   var simpleMarkerSymbol = {
    type: "picture-marker",
    url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat3.png",
    width: 46,
    height: 46
 };
	var pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });
 graphicsLayer.add(pointGraphic);

  });
 
// ******************************Javascript

// Add Click on Elements

	document.getElementById("telephone").addEventListener("click", myFunction);

	function myFunction() {alert ("Phone: +1 (734) 510-5227");
}

document.getElementById("envelope").addEventListener("click", myotherFunction);

	function myotherFunction() {alert ("Email: euclides-paulo@hotmail.com");
}

	

