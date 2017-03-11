pragma solidity ^0.4.4;

contract GeoMatch{

    struct Geohash {
      bytes polygone;
      bytes line;
      bytes point;
    }
    
    Geohash[] globalHash;
    
  function GeoMatch(){

    globalHash.polygone = addPolygone();
    globalHash.line = addLine();
    globalHash.point = addPoint();

    return globalHash;

  }

  function addPolygone(){
    return ["QmNr5ZsrfnK945coeMPZNXj9qHm8YyvdQRqUbgLTsHUnb1", "QmXVaEhjtfsCZ3pPNPf2LKR3U9rqEyNXY2TdxW4Ad9p37u"];
  }

  function addLine(){
    return ["QmWHGnYtCkjgeevw9udPgoYb51KUA32TcNuhSVymSFgHej", "QmPof8rDuRPCYc2BgEhP1dDNXPtPCzFKfGHunTc74npypx"];
  }

  function addPoint(){
    return ["QmZpoCrgWntmxBQL5RAEWy4Y9LXMrna4eS8dyBvxhkvowz", "QmSmy1jcEgewCiJVKFHabANScUF7Mn3GcWxbzgfbR9jVJR"];
  }


}
