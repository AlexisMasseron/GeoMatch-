var GeoMatch = artifacts.require("./GeoMatch.sol");

contract('GeoMatch', function (accounts) {

    var polygone = 'POLY-QmTjXvDjPtaSP2G1yiVwcugEMBaoVT4q9ZPxuQQBHsYgUw';
    var line = 'LINE-QmNr5ZsrfnK945coeMPZNXj9qHm8YyvdQRqUbgLTsHUnb1';
    var point = 'POINT-QmXVaEhjtfsCZ3pPNPf2LKR3U9rqEyNXY2TdxW4Ad9p37u';


    it("Deploy test", function () {

        var instance;

        return GeoMatch.new()
            .then(function (_instance) {
                instance = _instance;
                //console.log('Deploy test instance', instance)
                return instance.isAlive.sendTransaction();
            })
            .then(function (transactionHash) {
                //console.log("Deploy test", transactionHash);
                return instance.isAlive.call();
            })
            .then(function(result){
                //console.log(result);
                assert.isTrue(result);
            })
    });

    it('addGeoHash', function () {

        var instance;

        return GeoMatch.new()
            .then(function (_instance) {
                instance = _instance;
                return instance.addGeoHash.sendTransaction(polygone);
            })
            .then(function (transactionHash) {
                return instance.getGeoHash.sendTransaction(0);
            })
            .then(function (result){
                return instance.getGeoHash.call(0);
            })
            .then(function(result){
                console.log('getGeoHash result :', web3.toAscii(result));
                assert.equal(web3.toAscii(result), polygone);
            })
    })

    it('addGeoHash 2', function () {

        var instance;

        return GeoMatch.new()

            // POLYGONE
            .then(function (_instance) {
                instance = _instance;
                return instance.addGeoHash.sendTransaction(polygone);
            })


            // LINE
            .then(function(){
                return instance.addGeoHash.sendTransaction(line);
            })


            // POINT
            .then(function(){
                return instance.addGeoHash.sendTransaction(point);
            })

            .then(function () {
                return instance.getGeoHash.sendTransaction(0);
            })
            .then(function (){
                return instance.getGeoHash.call(0);
            })
            .then(function(result){
            assert.equal(web3.toAscii(result), polygone);
            })


            .then(function () {
                return instance.getGeoHash.sendTransaction(1);
            })
            .then(function (){
                return instance.getGeoHash.call(1);
            })
            .then(function(result){
                assert.equal(web3.toAscii(result), line);
            })


            .then(function () {
                return instance.getGeoHash.sendTransaction(2);
            })
            .then(function (){
                return instance.getGeoHash.call(2);
            })
            .then(function(result){
                assert.equal(web3.toAscii(result), point);
            })

    })

    /*
     it.skip('demo', function() {
     return MetaCoin.deployed().then(function(instance) {
     return instance.getBalance.call(accounts[0]);
     }).then(function(balance) {
     assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
     });
     })



     it.skip("should call a function that depends on a linked library", function() {
     var meta;
     var metaCoinBalance;
     var metaCoinEthBalance;

     return MetaCoin.deployed().then(function(instance) {
     meta = instance;
     return meta.getBalance.call(accounts[0]);
     }).then(function(outCoinBalance) {
     metaCoinBalance = outCoinBalance.toNumber();
     return meta.getBalanceInEth.call(accounts[0]);
     }).then(function(outCoinBalanceEth) {
     metaCoinEthBalance = outCoinBalanceEth.toNumber();
     }).then(function() {
     assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
     });
     });
     it.skip("should send coin correctly", function() {
     var meta;

     // Get initial balances of first and second account.
     var account_one = accounts[0];
     var account_two = accounts[1];

     var account_one_starting_balance;
     var account_two_starting_balance;
     var account_one_ending_balance;
     var account_two_ending_balance;

     var amount = 10;

     return MetaCoin.deployed().then(function(instance) {
     meta = instance;
     return meta.getBalance.call(account_one);
     }).then(function(balance) {
     account_one_starting_balance = balance.toNumber();
     return meta.getBalance.call(account_two);
     }).then(function(balance) {
     account_two_starting_balance = balance.toNumber();
     return meta.sendCoin(account_two, amount, {from: account_one});
     }).then(function() {
     return meta.getBalance.call(account_one);
     }).then(function(balance) {
     account_one_ending_balance = balance.toNumber();
     return meta.getBalance.call(account_two);
     }).then(function(balance) {
     account_two_ending_balance = balance.toNumber();

     assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
     assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
     });
     });
     */
});
