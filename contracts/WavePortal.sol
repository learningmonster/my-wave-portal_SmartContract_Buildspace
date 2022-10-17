// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint) waveCountsByAddress;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart.");
        console.log("It's great to be alive!");
    }

    function wave() public {
        totalWaves += 1;
        waveCountsByAddress[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
        console.log("They have waved %d times!", waveCountsByAddress[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}