const GovernanceMothership = artifacts.require("GovernanceMothership");

module.exports = function (deployer) {
    const _token = '0x0317babef455a110054ae0aa3d4761d3a9a60523';

  deployer.deploy(GovernanceMothership, _token);
};
