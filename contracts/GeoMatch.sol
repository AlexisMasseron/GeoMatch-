pragma solidity ^0.4.8;

contract GeoMatch{
  function GeoMatch(){}
  function isAlive() returns (bool success){return true;}

  event NewGeoHash(uint _value, bytes polygone, bytes line, bytes point);

  bytes[] geoHash;

  function addGeoHash(bytes _geoHash) returns (bytes){

    bytes memory geoFab = _geoHash;

    geoHash.push(geoFab);

    return geoFab;
  }

  function getGeoHash() returns (uint geohashID){
    return geohashID;
  }
}
