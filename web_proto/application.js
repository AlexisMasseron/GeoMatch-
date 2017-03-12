function addDataToMap(data, map) {
	console.log(data);
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
}
function getSmartContractHash(){
		var hash=document.forms["form1"]["schash"].value;
		if (hash=="///"){
			$.getJSON("http://ipfs.io/ipfs/QmVa2sCp5g2wLfnf7cdVrm32Jq2ynw6pzXBHwKd3fHnJre", function(data) { addDataToMap(data, map); });
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
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	terrainTiles.addTo(map)

	// Set the initial viewport of the map. Here we're centering on Savas Labs' hometown and zooming out a bit.
	map.setView([48.862442, 2.2792854], 12);


});
