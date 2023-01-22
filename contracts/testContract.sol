// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract testContract{
    
    uint256 private someNumber;

    function storeVal (uint256 inputVal) public {
        someNumber = inputVal;
    }

    function  viewVal() public view returns (uint256){
        return someNumber;
    }

}
