pragma solidity ^0.4.4;

contract GeoMatch{

  function GeoMatch(){

    struct Geohash{
      bytes polygone;
      bytes line;
      bytes point;
    }

    Geohash[] globalHash;

    globalHash.polygone = addPolygone();
    globalHash.line = addLine();
    globalHash.point = addPoint();

    return globalHash;

  }

  function addPolygone(){
    return [];
  }

  function addLine(){
    return [];
  }

  function addPoint(){
    return [];
  }


}
