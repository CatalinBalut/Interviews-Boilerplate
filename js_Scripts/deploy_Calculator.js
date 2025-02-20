// Import the necessary Hardhat libraries
const hre = require("hardhat");

async function main() {
    // Get the contract factory for the Calculator contract
    const Calculator = await hre.ethers.getContractFactory("Calculator");

    console.log("Deploying Calculator...");
    // Deploy the contract and wait for it to be mined
    const calculator = await (await Calculator.deploy()).waitForDeployment();

    console.log("Calculator deployed to:", await calculator.getAddress());
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
