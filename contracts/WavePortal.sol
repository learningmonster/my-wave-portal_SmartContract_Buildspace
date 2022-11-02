// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address payable owner;

    /* 
     *  Custom event to be raised at select points (such as when a user successfully sends a wave)
     */
    event NewWave(address indexed from, uint256 timestamp, string message);

    /* 
     *  Custom event to be raised when contract funds withdrawn
     */
    event FundsWithdrawn(address indexed from, uint256 timestamp, string message);

    /*
     * Created a struct here named Wave.
     * A struct is basically a custom datatype 
     * where we can customize what we want to hold inside it.
     */
    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    /*
     * Declared a variable waves that lets me store an array of structs.
     * This is what lets me hold all the waves anyone ever sends to me!
     */
    Wave[] waves;

    constructor() payable {
        console.log("Yo yo, I am a contract and I am smart.");
        console.log("It's great to be alive!");

        owner = payable(msg.sender);
    }

    mapping(address => uint) waveCountsByAddress;

    /*
     * Changed the wave function a little here and
     * now it requires a string called _message. This is the message our user
     * sends us from the frontend!
     */
    function wave(string memory _message) public {
        totalWaves += 1;
        waveCountsByAddress[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
        console.log("They have waved %d times!", waveCountsByAddress[msg.sender]);
        console.log("They sent a message: %s", _message);

        /*
         * Store the wave data in the array.
         */
        waves.push(Wave(msg.sender, _message, block.timestamp));

        /*
         * Emit an event to indicate successful completion of the wave operation
         */
        emit NewWave(msg.sender, block.timestamp, _message);

        /*
         * Send prize money to the person who waved.
         */
        uint256 prizeAmount = 0.00000001 ether;
        require(
            prizeAmount <= address(this).balance,
            "Trying to withdraw more money than the contract has."
        );
        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to withdraw money from contract.");
    }

    /*
     * Added a function getAllWaves which will return the struct array, waves, to us.
     * This will make it easy to retrieve the waves from our website!
     */
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function withdrawFunds() public {
        require(msg.sender == owner, "Only the owner can call this function");

        (bool success, ) = (owner).call{value: address(this).balance}("");
        require(success, "Failed to withdraw money from contract.");

        /*
         * Emit an event to indicate that funds were withdrawn
         */
        emit FundsWithdrawn(msg.sender, block.timestamp, "Funds Withdrawn");

    }

}