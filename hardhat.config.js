const { task } = require('hardhat/config');

require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */

task(
  'accounts',
  'Gives account address in the hardhat development env',
  () => {}
);

module.exports = {
  solidity: '0.8.17',
};
