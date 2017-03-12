function addDataToMap(data, map) {
	console.log(data.features[0].geometry.coordinates);
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
}
function getSmartContractHash(){
		var hash=document.forms["form1"]["schash"].value;
		if (hash=="///"){
			
			return false;
		}
		else{
			$("#erreur").append("Warning: Hash not recognised");
			return false;
		}
	}

$(document).ready(function() {
	var map = L.map('mapid');
	map.scrollWheelZoom.disable();
	map.on('click', function() {
	  if (map.scrollWheelZoom.enabled()) {
	    map.scrollWheelZoom.disable();
	    }
	    else {
	    map.scrollWheelZoom.enable();
	    }
	  });

	var terrainTiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
	});

	terrainTiles.addTo(map)
	$.getJSON("http://ipfs.io/ipfs/QmUNMvyGLHvh9Cuc2bJsyj1Q4y5egqCSfRFMFtNd8HpQuo", function(data) { addDataToMap(data, map); });
	// Set the initial viewport of the map. Here we're centering on Savas Labs' hometown and zooming out a bit.
	map.setView([48.862442, 2.34], 12);


});
