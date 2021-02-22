//const GovernanceMothership = artifacts.require("GovernanceMothership");
const GovernanceRewards = artifacts.require("GovernanceRewards");

module.exports = function (deployer) {
    const _token = '0x0317babef455a110054ae0aa3d4761d3a9a60523';
    const _motherboard = '0x3b4b537BCd98ec88730594F7C9d823a17b15E835';
  //deployer.deploy(GovernanceMothership, _token);
  deployer.deploy(GovernanceRewards, _token, _motherboard);
};
