pragma solidity ^0.4.8;

contract GeoMatch{

    struct Geohash {
      bytes polygone;
      bytes line;
      bytes point;
    }

  Geohash[] globalHash;

  function GeoMatch(){
  }

  function isAlive() returns (bool success){
    return true;
  }

  function addGeoHash(bytes polygone, bytes line, bytes point){
    Geohash geoHashTemp = Geohash(polygone, line, point);
    globalHash.push(geoHashTemp);
  }
}
