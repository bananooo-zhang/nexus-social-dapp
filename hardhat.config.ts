import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-deploy";

// Ensure that environment variables are set
if (!process.env.ALCHEMY_SEPOLIA_URL) {
  throw new Error("Please set your ALCHEMY_SEPOLIA_URL in a .env file");
}
if (!process.env.SEPOLIA_PRIVATE_KEY) {
  throw new Error("Please set your SEPOLIA_PRIVATE_KEY in a .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      live: false,
      saveDeployments: true,
      tags: ["local"],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
      saveDeployments: true,
      tags: ["staging"],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;

