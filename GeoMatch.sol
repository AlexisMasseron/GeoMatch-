pragma solidity ^0.4.4;

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
    return true
  }

  function sendHash(){
    addPolygone();
    addLine();
    addPoint();
    return globalHash;
  }

  function addGeoHash(bytes polygone, bytes line, bytes point){
    geoHash geoHashTemp = geoHash(polygone, line, point);
    globalHash.push(geoHashTemp);
  }
}
