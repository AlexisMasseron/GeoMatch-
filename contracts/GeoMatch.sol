pragma solidity ^0.4.8;

contract GeoMatch{
  function GeoMatch(){}
  function isAlive() returns (bool success){return true;}

  event NewGeoHash(uint _value, bytes polygone, bytes line, bytes point);

  bytes[] public geoHash;

  function addGeoHash(bytes _geoHash) returns (bool){

    bytes memory geoFab = _geoHash;

    geoHash.push(geoFab);

    return true;
  }

  function getGeoHash(uint index) constant returns (bytes geohashID){
    return geoHash[index];
  }

  function getGeoHashLength() constant returns (uint){
    return geoHash.length;
  }
}
