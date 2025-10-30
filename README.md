# Nexus Social 🎲 - A Story of Solving Real Problems

> *The best ideas often come from the most personal experiences.*

This project didn't start in a brainstorming session. It started with my girlfriend. She's an active member of several Web3 communities and frequently participates in their online events. As I watched her, I noticed a recurring pattern of chaos and frustration.

During one community's puzzle competition, the scene was typical: some members didn't know how to start, others chose the wrong puzzle, and a few who finished forgot to screenshot their results for Discord. To top it off, someone just edited the code to finish in seconds. As a product manager, I'm trained to spot these pain points. I thought, "What if there was a one-stop platform to solve all this?"

That was the seed of Nexus Social.

I joined the Zama community on December 7, 2024, and had been following the technology ever since, always wanting to build something for the developer programs but waiting for the right idea. Watching my girlfriend's experience was the "aha!" moment. I realized that FHE's ability to ensure fairness in games with hidden information, like card games, was the perfect technology to build a truly trusted social gaming platform.

---

## 🚀 Live Demo & Contact

-   **Live Dapp**: [**https://nexus-social-dapp.vercel.app/**](https://nexus-social-dapp.vercel.app/)
-   **Creator's X/Twitter**: [@Elf_YuSheng](https://x.com/Elf_YuSheng)
-   **Smart Contract on Sepolia**: [`0xc82996db14d66c70586E1670d44A0E89cED4aced`](https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced)

---

## 🎯 The Vision: A Sustainable Social Hub for Web3

**Nexus Social** is not just a game; it's a **"Social-Event-as-a-Service"** platform designed for Web3 communities. Our mission is to provide community managers with a powerful tool to enhance engagement and create lasting value for their members.

### The Problem We Solve
Crypto communities rely on events to boost engagement, but they consistently face:
1.  **📊 Data & Fairness Issues**: Manual tracking of results is error-prone and leads to disputes, damaging community trust.
2.  **💎 Lack of Persistent Value**: A user's participation is often lost after an event. Their contributions aren't recorded, and their value is overlooked.
3.  **🧩 Fragmented Experience**: Different communities use different platforms, forcing users to learn new tools and fragmenting their on-chain identity.

### Our Solution & Strategy
-   **🧩 One-stop Gaming Hub**: We provide a unified, simple, and convenient platform for all community events. This lowers the barrier to entry and creates a seamless user experience.
-   **📈 Traceable Contributions**: All gameplay is recorded on-chain, creating a transparent and immutable proof of contribution that builds a user's on-chain reputation.
-   **🌐 Sustainable Growth Model**: Our growth is tied to the health of the entire Web3 ecosystem, not our own token's hype cycle. As long as communities need to host events, Nexus Social remains relevant. We plan to commercialize through tournament commissions and advertising, creating a resilient business model.
-   **🔐 FHE-Powered Fairness**: By leveraging Zama's FHE technology (specifically `FHE.eq`), we can execute game logic with complete privacy and verifiable fairness—our "On-Chain Confidential Arbiter." This builds the unshakable foundation of trust that is currently missing.

> For a deeper dive into our product strategy, user personas, business model, and future roadmap, please see our full **[Product Requirements Document (PRD)](./PRD-Nexus-Social-EN.md)**.

---

## 🃏 About the MVP: First Game "Dark Cards"

To validate the core value of **Nexus Social** as a social event platform, our MVP (Minimum Viable Product) focuses on the platform's first game: **Dark Cards**. It's a classic social deduction game that perfectly showcases how FHE technology can solve trust issues in on-chain gaming.

### How to Play: The Full Rules
The soul of "Dark Cards" lies in information asymmetry and psychological bluffs between players.
-   **Objective**: To be the first player to get rid of all their cards.
-   **Core Loop**:
    1.  **Play & Claim**: Players take turns playing **1 to N cards face-down** and **publicly claiming** what those cards are (e.g., "I played two Kings"). You can tell the truth or you can bluff.
    2.  **Challenge or Trust**: Any other player can choose to **"challenge"** your claim. If no one challenges, the game continues.
    3.  **On-Chain Resolution**: When a challenge occurs, the smart contract acts as a "Confidential Arbiter," using FHE to publicly resolve whether the claim was true or false—without ever revealing anyone's cards.
        -   **Challenge Successful** (The claim was a bluff): The player who made the claim loses and must pick up all cards on the table.
        -   **Challenge Failed** (The claim was true): The challenger loses and must pick up all cards on the table.

### The MVP Version: A Minimalist Experience
To let users directly experience the core fun of a "confidential resolution" powered by FHE, we have extremely simplified the MVP:
-   **Mode**: It's a **single-player challenge mode** where you play against the system (smart contract).
-   **Flow**:
    1.  **System's Claim**: The system automatically makes a public "claim" on-chain (e.g., "I played an Ace").
    2.  **Player's Challenge**: The UI presents one core button: **"Challenge!"**.
    3.  **Instant Resolution**: Once clicked, the smart contract immediately uses its FHE logic to verify the claim and transparently returns the result (was the system bluffing or not?).

This simplified MVP is designed to clearly demonstrate our product's core technical advantage and the immense potential for the future multiplayer social experience.

---

## 🛠️ Tech Stack

-   **Blockchain**: Solidity, Hardhat
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
-   A crypto wallet like MetaMask

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
    ```bash
    npx hardhat node
    ```

2.  **Deploy the smart contract to the local node:**
    -   In a new terminal window:
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
│   │   ├── App.tsx           # The game page component (Dark Cards).
│   │   ├── LandingPage.tsx   # The main landing page for Nexus Social.
│   │   └── main.tsx          # App entry point with wallet/router setup.
├── scripts/
│   └── deploy.ts             # Script for deploying the smart contract.
├── .env.example              # Example environment variables file.
├── hardhat.config.ts         # Hardhat configuration.
├── PRD-Nexus-Social-EN.md    # The detailed Product Requirements Document.
└── package.json              # Root project dependencies.
```
