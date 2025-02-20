// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../contracts/Calculator.sol";

contract CalculatorTest is Test {
    Calculator calculator;

    function setUp() public {
        calculator = new Calculator();
    }

    function testAdd() public {
        uint256 result = calculator.add(2, 3);
        assertEq(result, 5);
    }

    function testSubtract() public {
        uint256 result = calculator.subtract(5, 3);
        assertEq(result, 2);
    }

    function testMultiply() public {
        uint256 result = calculator.multiply(2, 3);
        assertEq(result, 6);
    }

    function testDivide() public {
        uint256 result = calculator.divide(6, 3);
        assertEq(result, 2);
    }

    function testDivideByZero() public {
        vm.expectRevert("Division by zero is not allowed");
        calculator.divide(1, 0);
    }
}
