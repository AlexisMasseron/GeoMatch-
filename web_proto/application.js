function addDataToMap(data, map) {
	console.log(data.features[0].geometry.coordinates);
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
}
function getSmartContractHash(){
		var hash=document.forms["form1"]["schash"].value;
		if (hash=="0x6abcbcbe631d9bd776d7a52cfc81a8f950139f45"){
			var abi = [
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "index",
		          "type": "uint256"
		        }
		      ],
		      "name": "getGeoHash",
		      "outputs": [
		        {
		          "name": "geohashID",
		          "type": "bytes"
		        }
		      ],
		      "payable": false,
		      "type": "function"
		    },
		    {
		      "constant": false,
		      "inputs": [
		        {
		          "name": "_geoHash",
		          "type": "bytes"
		        }
		      ],
		      "name": "addGeoHash",
		      "outputs": [
		        {
		          "name": "",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "type": "function"
		    },
		    {
		      "constant": false,
		      "inputs": [],
		      "name": "isAlive",
		      "outputs": [
		        {
		          "name": "success",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [],
		      "name": "getGeoHashLength",
		      "outputs": [
		        {
		          "name": "",
		          "type": "uint256"
		        }
		      ],
		      "payable": false,
		      "type": "function"
		    },
		    {
		      "inputs": [],
		      "payable": false,
		      "type": "constructor"
		    },
		    {
		      "anonymous": false,
		      "inputs": [
		        {
		          "indexed": false,
		          "name": "_value",
		          "type": "uint256"
		        },
		        {
		          "indexed": false,
		          "name": "polygone",
		          "type": "bytes"
		        },
		        {
		          "indexed": false,
		          "name": "line",
		          "type": "bytes"
		        },
		        {
		          "indexed": false,
		          "name": "point",
		          "type": "bytes"
		        }
		      ],
		      "name": "NewGeoHash",
		      "type": "event"
		    }
		  ];
		  
		var contract = web3.eth.contract(abi).at(hash);
		console.log(contract);
		contract.getGeoHashLength(function (error, result) {
			console.log(result.c[0]);
			var i;
			var hash = "";
			for(i=0; i<result.c[0]; i++){
				contract.getGeoHash.call(i, {}, function (error, result) {
					console.log(error, web3.toAscii(result));
					hash = "http://ipfs.io/ipfs/" + web3.toAscii(result);
					$.getJSON(hash, function(data){
						addDataToMap(data, map);
					});
				});
			}
		});
		return false;
		}
		else{
			$("#erreur").append("Warning: Hash not recognised");
			return false;
		}
	}

var map;
$(document).ready(function() {
	map = L.map('mapid');
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
	
	// Set the initial viewport of the map. Here we're centering on Savas Labs' hometown and zooming out a bit.
	map.setView([48.862442, 2.34], 12);

});