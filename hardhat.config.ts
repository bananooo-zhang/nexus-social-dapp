import "@fhevm/hardhat-plugin";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "dotenv/config";
import type { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";

import "./tasks/debug";

// 使用一个公开的、仅供测试的私钥
const SEPOLIA_PRIVATE_KEY = "0x465d722c4e31d0ce6b89a853eaedc98b599ebcfa53467df2dcaf87a70c5b349e";
const SEPOLIA_RPC_URL = "https://rpc.ankr.com/eth_sepolia/e91a963d47b4af04730c341946c7f6d32c5bed6f03ae7d2fbebaadf1659efd09";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
};

export default config;
