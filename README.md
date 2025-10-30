# Nexus Social Dapp 🎲

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-brightgreen)](https://nexus-social-dapp.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**A social gaming platform for crypto communities, powered by Zama's Fully Homomorphic Encryption (FHE) technology.**

This project is a submission for the Zama Developer Program, aiming to solve the persistent challenges of community engagement and event management in the Web3 space.

---

## 🚀 Live Demo & Contract

-   **Live Dapp**: [**https://nexus-social-dapp.vercel.app/**](https://nexus-social-dapp.vercel.app/)
-   **Smart Contract on Sepolia**: [`0xc82996db14d66c70586E1670d44A0E89cED4aced`](https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced)

---

## 🎯 The Problem

Crypto communities often organize games and events to boost engagement, but they consistently face several issues:

1.  **📊 Data & Fairness Issues**: Manually tracking game results is prone to errors and can lead to disputes about fairness, damaging community trust.
2.  **💎 Lack of Persistent Value**: A user's participation and achievements are often lost after an event ends. Their contributions are not recorded, and their value is overlooked.
3.  **🧩 Fragmented Experience**: Different communities use different platforms, forcing users to learn new tools for each event and fragmenting their on-chain identity and reputation.

## ✨ The Nexus Social Solution

**Nexus Social** is not just a game; it's a **social gaming platform** designed to be the go-to choice for crypto community events.

-   **🧩 One-stop Gaming Hub**: We provide a unified platform for all community events. Users learn the ropes once and can seamlessly participate across different communities.
-   **📈 Traceable Contributions**: All gameplay is recorded on-chain, creating a transparent and immutable record of participation. This solves trust issues and serves as a proof of contribution.
-   **🌐 Cross-Community Identity**: A user's activity on Nexus Social builds their on-chain reputation. This reputation is persistent and portable, encouraging long-term engagement regardless of which community they are active in.
-   **🔐 FHE-Powered Fairness**: By leveraging Zama's FHE technology, we can perform confidential computations on-chain, ensuring game logic is executed with complete privacy and verifiable fairness. Our first game, a confidential card challenge, demonstrates this core capability.

---

## 🛠️ Tech Stack

-   **Blockchain**: Solidity, Hardhat, Ethers.js
-   **Confidentiality**: Zama FHEVM (`@fhevm/solidity`)
-   **Frontend**: React, TypeScript, Vite
-   **Wallet Integration**: RainbowKit, Wagmi, Viem
-   **Deployment**: Vercel (Frontend), Sepolia Testnet (Smart Contract)

---

## 🏃‍♂️ Getting Started: Running Locally

Follow these steps to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
-   [Yarn](https://yarnpkg.com/) or npm
-   A crypto wallet like MetaMask or OKX Wallet

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bananooo-zhang/nexus-social-dapp.git
    cd nexus-social-dapp
    ```

2.  **Install root dependencies:**
    ```bash
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    cd ..
    ```

4.  **Set up environment variables:**
    -   Create a `.env` file in the root directory by copying the example:
        ```bash
        cp .env.example .env
        ```
    -   Edit the `.env` file to add your Sepolia RPC URL and a private key for deployment.

### Running the Project

1.  **Start a local Hardhat node:**
    -   This command will start a local blockchain instance for testing.
    ```bash
    npx hardhat node
    ```

2.  **Deploy the smart contract to the local node:**
    -   In a new terminal window, run the deploy script.
    ```bash
    npx hardhat run scripts/deploy.ts --network localhost
    ```
    -   After deployment, copy the new contract address and update it in `frontend/src/App.tsx`.

3.  **Start the frontend application:**
    ```bash
    cd frontend
    npm run dev
    ```
    -   The application will be running at `http://localhost:5173`.

---

## 📂 Project Structure

```
nexus-social-dapp/
├── contracts/
│   └── TheBlindArbiter.sol   # The main smart contract for the game logic.
├── frontend/
│   ├── src/
│   │   ├── App.tsx           # The game page component.
│   │   ├── LandingPage.tsx   # The main landing page component.
│   │   └── main.tsx          # App entry point with wallet/router setup.
│   └── package.json          # Frontend dependencies.
├── scripts/
│   └── deploy.ts             # Script for deploying the smart contract.
├── .env.example              # Example environment variables file.
├── hardhat.config.ts         # Hardhat configuration.
└── package.json              # Root project dependencies.
```
