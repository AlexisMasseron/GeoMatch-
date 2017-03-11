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

  function sendHash(){
    addPolygone();
    addLine();
    addPoint();
    return globalHash;
  }

  function addPolygone(){
    globalHash.polygone.push("QmNr5ZsrfnK945coeMPZNXj9qHm8YyvdQRqUbgLTsHUnb1", "QmXVaEhjtfsCZ3pPNPf2LKR3U9rqEyNXY2TdxW4Ad9p37u");
    return new Promise  (
      function(resolve, reject){
        resolve(globalHash.polygone.push() );
        reject(console.log('error pushing the polygone in the array'));
      }
    )
  }

  function addLine(){
    globalHash.line.push("QmWHGnYtCkjgeevw9udPgoYb51KUA32TcNuhSVymSFgHej", "QmPof8rDuRPCYc2BgEhP1dDNXPtPCzFKfGHunTc74npypx");
    return new Promise  (
      function(resolve, reject){
        resolve(globalHash.line.push() );
        reject(console.log('error pushing the line in the array'));
      }
    )
  }

  function addPoint(){

    globalHash.line.push("QmZpoCrgWntmxBQL5RAEWy4Y9LXMrna4eS8dyBvxhkvowz", "QmSmy1jcEgewCiJVKFHabANScUF7Mn3GcWxbzgfbR9jVJR");
    return new Promise  (
      function(resolve, reject){
        resolve(globalHash.line.push() );
        reject(console.log('error pushing the point the array'));
      }
    )
  }


}
