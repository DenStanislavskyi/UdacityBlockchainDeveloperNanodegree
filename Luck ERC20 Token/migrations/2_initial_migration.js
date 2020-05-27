var LuckToken = artifacts.require("LuckToken");

module.exports = function(deployer) {
  deployer.deploy(LuckToken, "LuckToken", "LCT", 1, 1000000000);
};


