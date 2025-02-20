const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let calculator;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  describe("Addition", function () {
    it("Should return the correct sum of two numbers", async function () {
      expect(await calculator.add(2, 3)).to.equal(5);
    });
  });

  describe("Subtraction", function () {
    it("Should return the correct difference of two numbers", async function () {
      expect(await calculator.subtract(5, 3)).to.equal(2);
    });
  });

  describe("Multiplication", function () {
    it("Should return the correct product of two numbers", async function () {
      expect(await calculator.multiply(2, 3)).to.equal(6);
    });
  });

  describe("Division", function () {
    it("Should return the correct quotient of two numbers", async function () {
      expect(await calculator.divide(6, 3)).to.equal(2);
    });

    it("Should revert when dividing by zero", async function () {
      await expect(calculator.divide(1, 0)).to.be.revertedWith("Division by zero is not allowed");
    });
  });
});
