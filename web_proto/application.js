function addDataToMap(data, map) {
	console.log(data);
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
}

$(document).ready(function() {
	var map = L.map('mapid');

	var terrainTiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	terrainTiles.addTo(map)

	// Set the initial viewport of the map. Here we're centering on Savas Labs' hometown and zooming out a bit.
	map.setView([48.862442, 2.2792854], 12);
	
	$.getJSON("http://ipfs.io/ipfs/QmVa2sCp5g2wLfnf7cdVrm32Jq2ynw6pzXBHwKd3fHnJre", function(data) { addDataToMap(data, map); });


});
