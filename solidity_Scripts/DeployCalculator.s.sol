// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {Script, console} from "forge-std/Script.sol";
import {Calculator} from "../contracts/Calculator.sol";

contract DeployCalculator is Script {
    Calculator public calculator;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Deploy the Calculator contract
        Calculator calculator = new Calculator();

        vm.stopBroadcast();
    }
}
