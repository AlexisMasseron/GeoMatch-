pragma solidity ^0.4.8;

contract GeoMatch{

    struct Geohash {
      bytes polygone;
      bytes line;
      bytes point;
    }

    uint numGeohash;
    mapping (uint => Geohash) globalHash;

  event NewGeoHash(uint _value, bytes polygone, bytes line, bytes point);

  function GeoMatch(){
  }

  function isAlive() returns (bool success){
    return true;
  }

  function addGeoHash(bytes polygone, bytes line, bytes point) returns (uint geohashID){
    geohashID = numGeohash++;
    globalHash[geohashID] = Geohash(polygone, line, point);
    NewGeoHash(geohashID,  polygone,  line,  point);
    return geohashID;
  }

  function getGeoHash() returns (uint geohashID){
    return geohashID;
  }
}
