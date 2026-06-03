// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Parametric Insurance
contract ParametricInsurance {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function createPolicy(bytes32 policyId) external {
        require(msg.sender == admin, "Only admin");
        // Policy creation logic would go here
    }
}