pragma solidity ^0.4.8;

contract GeoMatch{

    struct Geohash {
      bytes polygone;
      bytes line;
      bytes point;
    }

    uint numGeohash;
    mapping (uint => Geohash) globalHash;

  //Geohash[] globalHash;

  function GeoMatch(){
  }

  function isAlive() returns (bool success){
    return true;
  }

  function addGeoHash(bytes polygone, bytes line, bytes point) returns (uint geohashID){
    geohashID = numGeohash++;
    //Geohash geoHashTemp = Geohash(polygone, line, point);
    globalHash[geohashID] = Geohash(polygone, line, point);
    return geohashID;
  }
}
