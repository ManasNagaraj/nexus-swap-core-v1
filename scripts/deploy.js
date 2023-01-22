// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

async function main() {
  const Lock = await hre.ethers.getContractFactory('testContract');
  const lock = await Lock.deploy();

  var currentVal = await lock.viewVal();

  console.log(`current value for the variable is: ${currentVal}`);

  await lock.storeVal(420);
  currentVal = await lock.viewVal();
  console.log(`current value for the variable is: ${currentVal}`);
  console.log(`${lock.address}`);
  console.log(`First Contract deployed yyooohoooo!!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
