# Product Requirements Document (PRD) - "Nexus Social" MVP

> **Product Name:** Nexus Social (Platform) / Dark Cards (First MVP Game)
> **Version:** 1.2.2 (Submission for Zama Developer Program)
> **Date:** October 30, 2025

---

## 1. Vision & Background

### 1.1 Grand Vision
Our vision is to build a **fully trustless, decentralized on-chain social gaming platform—Nexus Social**. Leveraging Zama's Fully Homomorphic Encryption (FHE) technology, smart contracts will transform into "absolutely fair but blindfolded referees" capable of judging the truth without ever seeing the players' secrets. The platform's first game, **"Dark Cards,"** aims to pioneer a new era of trusted online social entertainment.

### 1.2 Game Overview & Full Rules
"Dark Cards" is a multiplayer online social deduction game where the core mechanics revolve around information asymmetry and psychological interaction between players.
- **Objective:** To be the first player to get rid of all your cards.
- **Gameplay (Full Rules):**
    1. **Dealing:** The system deals one or more decks of cards evenly to all players.
    2. **Playing & Claiming:** Players take turns playing cards. When playing, a player places 1 to N cards **face down** and **publicly claims** what those cards are (e.g., "I played two Kings"). The claim can be true or a bluff.
    3. **Challenging or Passing:** After any player makes a play and claim, any other player can choose to **"challenge."** If no one challenges, the turn passes to the next player to make their own play and claim.
    4. **Resolution:** When a challenge occurs, the face-down cards played by the challenged player are revealed.
        - **Challenge Successful:** If the claim was a bluff, the challenged player takes all the cards from the table. The challenger starts the new round.
        - **Challenge Failed:** If the claim was true, the challenger takes all the cards from the table. The challenged player starts the new round.
    5. **Victory:** The first player to run out of cards wins.

### 1.3 Core Problem & FHE Solution
This section directly addresses the **"Original tech architecture"** criterion of the Zama Developer Program.
- **Core Problem:** The soul of games like "Dark Cards" lies in the engaging interplay between "hidden information" (what my cards are) and "public claims." On a fully transparent environment like the blockchain, hiding information is nearly impossible, which has fundamentally prevented such games from being implemented on-chain. All existing online versions rely on a centralized server to hold player hands, introducing unavoidable trust risks.
- **FHE Architecture & Originality:** Our originality lies in being the first to use FHE technology to build an **"On-Chain Confidential Arbiter"** model, completely solving the core problem.
    - In our architecture, we use one of the core tools provided by FHEVM: the **Comparator**, specifically the `FHE.eq()` function.
    - **Application (Design):** When the system plays its "real hand," the card is **encrypted** on the front end before being sent to the smart contract. Its public "claim" is stored in plaintext. When a player initiates a challenge, the smart contract's core `challenge()` function is triggered. It calls `FHE.eq()` to compare the system's **encrypted hand** with its **plaintext claim** in a completely confidential state.
    - **Significance:** This is a **highly meaningful, non-template application of FHE**. It doesn't just encrypt data for storage; it leverages FHE's core feature—**computation on encrypted data**—to execute the game's most critical "judgment" logic. This "Confidential Arbiter" is something traditional blockchain technology cannot achieve and perfectly solves the problem of information hiding in a transparent environment, forming the cornerstone of our project's technical architecture.
    - **MVP Implementation Note:** To ensure an **absolutely stable and smooth public demo** for the Zama developer event, and given the early stage of the FHEVM frontend toolchain, we temporarily adopted **on-chain pseudo-random number generation** in the final deployed MVP contract to produce game results directly. However, the contract interface still retains FHE data types, clearly demonstrating the technical path for future FHE integration. This reflects our team's pragmatic balance between pursuing cutting-edge technology and ensuring product usability.

### 1.4 Target Market & User Personas
- **Core Scenario:** Online social events for crypto communities. Current Web3 community events face three major pain points:
    1. **Fragmented Platforms, Fragmented Experience:** Community members need to learn different platforms for various events, raising the barrier to entry and preventing the formation of a unified community identity.
    2. **Contributions Don't Persist, Value is Lost:** User participation data is difficult to track long-term, and their contributions become worthless after an event. Community managers rely on manual, error-prone, and opaque methods for data collection, often leading to skepticism from members.
    3. **High Trust Costs:** The fairness of games depends on the reputation of centralized platforms or organizers, lacking on-chain technical guarantees.
    "Nexus Social" perfectly addresses these issues, aiming to become the preferred platform for community events.
- **User Personas:**
    - **Community Members:** Actively participate in various Web3 community events, seeking fun and fair ways to earn rewards or improve their community standing.
    - **Social Gamers:** Look for simple, easy-to-learn entertainment tools to enjoy with friends, valuing social interaction and psychological gameplay.
    - **Community Managers:** From other projects, in urgent need of a convenient and simple platform to organize community events and increase user engagement.
    - **Growth Leads:** Require authentic, valuable on-chain activity data for growth strategies like airdrops and whitelist qualifications.

### 1.5 Business Model & Platform Strategy
This section addresses the **"Business potential"** criterion of the Zama Developer Program.

Our core strategy is to establish "Nexus Social" as the **premier social gaming platform for Web3 community events**. We offer not just a game, but a "Social-Event-as-a-Service" product tailored for community managers to enhance community cohesion and activity.

**Sustainable Growth Model:**
Many Web3 projects face the challenge of declining community engagement after their token launch. The growth model for "Nexus Social" fundamentally avoids this risk. Our core value proposition is to **provide a continuous social utility for all communities**. Therefore, our Daily Active Users (DAU) are not dependent on our own token's hype cycle. Instead, it directly reflects the vitality of our partner community ecosystem. Whether in a bull or bear market, as long as communities need to host events to activate their members, "Nexus Social" will be their go-to tool. This builds a healthy and resilient network effect, ensuring long-term user activity.

Our development path is divided into three stages:

**Stage 1: Go-to-Market - The Community Event Tool**
- **Core Product:** A fully functional, easy-to-integrate "Dark Cards" game room.
- **Market Entry:** Our initial growth will not rely on organic user acquisition but on targeted B2D (Business-to-DAO/Developer) partnerships. We will proactively collaborate with major DAOs, NFT projects, and community leaders, offering "Nexus Social" as an official, one-stop solution for community events.
- **Growth Flywheel:** Sponsoring projects will provide **commemorative NFTs** and **platform points** as incentives for "Dark Cards" tournaments. This not only brings in a highly engaged and valuable core user base but also quickly establishes "Nexus Social" as a synonym for **"convenient and simple"** social events in the Web3 world.

**Stage 2: Commercialization - Building a Sustainable Economy**
- **Core Revenue Streams:** As platform traffic grows, our commercialization will focus on two main areas:
    1. **Tournament Commissions:** We will provide technical support for "Dark Cards" tournaments with prize pools organized by communities or projects, taking a small percentage of the pool as a service fee.
    2. **Advertising Revenue:** With a large user base from diverse communities, the platform will possess significant traffic value. Members from Community A playing on the platform can see events or project information from Community B, creating a targeted and effective advertising channel.
- **In-Game Economy:**
    - **Token Betting:** After introducing a platform-native token, we will enable token-based betting, allowing players to place small wagers in games to increase excitement and engagement. A portion of this will be shared with the platform.
    - **NFT Assets (Secondary):** We will introduce collectible NFT-based card skins, table backgrounds, etc., as a secondary revenue stream.

**Stage 3: The Ultimate Vision - An Open Social Gaming Platform**
- **Platformization:** Once "Dark Cards" has successfully validated the market as a product, our ultimate goal is to evolve it into an open platform. We will modularize the market-tested "On-Chain Confidential Arbiter" engine and supporting components like the game lobby and account system, opening them up to all Web3 game developers.
- **Ecosystem Empowerment:** Developers will be able to leverage our platform to easily create and launch their own diverse social games based on hidden information and deception mechanics. "Nexus Social" will then become an incubator and infrastructure for social gaming innovation in Web3.

---

## 2. MVP Strategy & SWOT Analysis

### 2.1 Core Strategic Positioning
The core strategy for this MVP is to **validate the Product-Market Fit of "Nexus Social" as a Web3 community event tool**. Our goal is not just to build a dApp demo but to create a minimum viable product for a **"social event platform"** that accurately solves community management pain points and has strong network effect potential.

### 2.2 SWOT Analysis

**Strengths:**
- **Founder's Industry Resources & Influence:** The project founder has significant influence and extensive community/BD resources within the Web3 industry (e.g., deep involvement in KOL investment rounds for projects like Aster, Nillion), providing an unparalleled advantage for initial community partnerships and cold starts.
- **Deep Market Understanding:** We have a profound understanding of the pain points in Web3 community management, ensuring the product is designed to solve real-world problems rather than being a mere technical showcase.
- **Powerful Growth Flywheel Design:** We have designed an invitation and incentive mechanism with a natural advantage for community managers. When managers organize events on the platform, their community members automatically become part of their referral network. Continued participation from members will earn managers more points or platform benefits, strongly incentivizing KOLs to actively promote and use the platform, creating a powerful network effect.

**Opportunities:**
- **Large Existing Market & Strong Demand:** Mainstream Web3 communities (e.g., Monad, SaharaLabsAI) have a high frequency of demand for community events. Current solutions have significant drawbacks:
    1. **Fragmented Platforms:** Different communities use different gaming platforms, leading to a disjointed user experience.
    2. **Difficult Data Management:** Community events require tracking rankings and participation data, but existing platforms often lack the necessary data support, forcing organizers to spend significant effort on manual, error-prone data collection.
    3. **Trust Issues:** There is a risk of users faking participation proof to claim rewards, increasing verification costs.
- **Lack of a Standardized Solution:** The market lacks a standardized event platform designed for Web3 communities that combines fun, data management, and on-chain credentials. "Nexus Social" has the opportunity to be a pioneer in this field.

**Weaknesses:**
- **Limited Initial Technical Resources:** During the MVP phase, technical implementation will focus on core functionalities, leading to a gap in feature richness and performance compared to mature Web2 platforms.
- **FHE Technical Barrier:** As a cutting-edge technology, the development ecosystem and performance optimization for Fully Homomorphic Encryption are still evolving, which may pose challenges to rapid product iteration.

**Threats:**
- **Competition from Existing Web2 Tools:** Simple and easy-to-use Web2 social tools (like Discord's built-in games), despite lacking Web3 features, remain major competitors due to their convenience.
- **Entry of Large Web3 Platforms:** Established Web3 gaming or social platforms may add similar social features in the future, creating a significant competitive threat.

### 2.3 MVP Success Criteria
1.  **Product:** Successfully deliver a feature-complete dApp demo that clearly demonstrates the fun, fairness, and ease of use of "Nexus Social" as an event tool to community managers.
2.  **Market:** Leverage founder's resources to establish partnership intentions with at least 1-2 Web3 communities, inviting them to test the MVP as an option for their next community event.

---

## 3. MVP Core Features & Scope

To minimize technical complexity, the MVP focuses on a complete "claim-challenge" round with extremely simplified game rules.

### 3.1 MVP Game Rules
The MVP version is a **single-player challenge mode**, designed to let users experience the core interaction of our product in the most direct way.
- **Roles:** There is only one player role: **The Challenger**. Their opponent, the "claimer," is automatically played by the system (smart contract). This is a simulation of the full multiplayer game.
- **Objective:** The challenger's goal is to determine if the system's current "claim" is a lie and successfully "call the bluff."
- **Gameplay:**
    1.  **System's Play:** At the start of the game, the system automatically generates a **public "claim"** on-chain (e.g., "I played an Ace"). This claim could be true or a lie.
    2.  **Player's Challenge:** The user interface clearly displays the system's "claim." The player only needs to make one decision: click the **"Challenge!"** button.
    3.  **On-Chain Resolution:** When the player clicks "Challenge," the smart contract automatically and transparently verifies if the system's "claim" was true and returns the result via an event.
    4.  **Result Feedback:** The front end clearly displays the challenge result (e.g., "Challenge successful! The system was lying!") and automatically starts a new round, providing a continuous challenge experience.

### 3.2 Smart Contract (The Blind Arbiter)
- **State:** The contract stores key information for the current round:
    - `realCard`: The system's hidden "real hand."
    - `claimedCard`: The system's publicly claimed "card."
- **Function 1: `challenge()` (Public Function)**
    - **Caller:** Any player.
    - **Logic:**
        1. Verifies if the system's current `claimedCard` matches its `realCard`.
        2. Emits a `GameResult` event containing the outcome.
        3. Automatically sets up the next round's `realCard` and `claimedCard` using on-chain pseudo-randomness.
- **Event:** After a successful `challenge`, emits a `GameResult(address player, bool wasHonest, uint8 realCard, uint8 claimedCard)` event for the front end to capture the full result.

### 3.3 Frontend Interface (The Game Table)
- **Tech Stack:** The frontend is built with `Vite + React + TypeScript`, using `Wagmi` / `Viem` for blockchain interaction and `RainbowKit` for a smooth wallet connection experience.
- **UI/UX Standard:** The interface design follows a **"minimalist but professional"** principle. We have implemented a modern, responsive user interface to ensure clarity, aesthetics, and consistency, providing a high-quality experience for judges and users.
- **Core Flow:**
    1.  **Landing Page:** Professionally introduces the project's vision, the problems it solves, its technical solution, and its core advantages.
    2.  **Connect Wallet:** The page provides a standard "Connect Wallet" feature powered by `RainbowKit`.
    3.  **Main Game Interface:**
        - Clearly displays the system's current **public claim** (e.g., a large "System Claims: ACE (A)").
        - A visually prominent **"Challenge!"** button as the core interaction.
    4.  **Result Feedback:**
        - After the user clicks "Challenge" and waits for on-chain transaction confirmation, the page provides immediate and clear feedback (e.g., a celebratory pop-up with text: "Bluff caught! The system's real card was a K!").
        - After displaying the result, the system automatically refreshes for a new round of challenges.

---

## 4. MVP Tech Stack & Functional Verification

### 4.1 Tech Stack
- **Smart Contract:** Solidity, Hardhat, FHEVM Library (`@fhevm/solidity`)
- **Frontend:** Vite, React, TypeScript, Wagmi, Viem, RainbowKit

### 4.2 Functional Verification
To ensure contract robustness and meet the quality standards of the Zama Developer Program, we have conducted **end-to-end (E2E) functional verification through public testnet deployment**.
- **Verification Environment:** Sepolia Public Testnet.
- **Core Scenarios Verified:** We have confirmed the following two core scenarios through actual interaction and transactions:
    1.  **Scenario 1 (System Lies):** When the system's claimed card does not match its real card, the `challenge()` transaction succeeds, and the front end correctly receives and displays a "challenge successful" result.
    2.  **Scenario 2 (System is Honest):** When the system's claimed card matches its real card, the `challenge()` transaction succeeds, and the front end correctly receives and displays a "challenge failed" result.
- **Test Wallet & Transactions:** Related test transactions are publicly available on the Sepolia blockchain explorer.

---

## 5. Future Roadmap (The Grand Vision Roadmap)
Here is the planned feature iteration roadmap for Nexus Social, designed to progressively achieve our grand vision.

- **V1.1 (Game Core Enhancement):**
    - Implement the full "Dark Cards" game logic for a two-player mode, including a card deck, shuffling, dealing, and claiming.
    - Perform initial UI optimizations and code refactoring to build a foundation for future expansion.

- **V2.0 (Social & Incentives):**
    - Launch a multiplayer game lobby supporting 5-10 players in a single game.
    - Introduce a platform points system to track user participation and achievements.
    - Launch the exclusive invitation system for community managers to drive platform growth through incentives.

- **V3.0 (Economic Ecosystem Loop):**
    - Conduct the platform's initial Token Generation Event (TGE).
    - Launch a token betting system to deeply integrate the token into the game economy.

- **V-Next (Platform Ecosystem Expansion):**
    - Successively launch 3-5 new social games based on FHE or other Web3 features.
    - Ultimately, modularize the core functionalities and open them to third-party developers, becoming a decentralized social gaming platform.

---

## 6. Key Deliverables Checklist
To ensure the project meets the highest standards of the Zama Developer Program, this MVP delivers the following:
1. **Smart Contract:** `TheBlindArbiter.sol` contract code, deployed and open-source verified on the Sepolia testnet.
2. **Frontend Application:** A publicly accessible demo deployed on Vercel, featuring a professional landing page and a complete game flow.
3. **Functional Verification:** The core game logic's completeness and correctness have been verified through actual interaction on the Sepolia testnet.
4. **Project Documentation:** A high-quality `README.md` that clearly explains the project's vision, usage instructions, and business potential.
5. **Demo Video:** A well-produced 2-3 minute project introduction and demo video, serving as the core material for your product presentation. The video will include:
    - **30s Problem Statement:** Why does Web3 need a cheat-proof social gaming platform?
    - **30s FHE Solution:** How does the "Confidential Arbiter" of "Nexus Social" work?
    - **60s Product Demo:** A live demonstration of the front-end interface, completing a full "bluff-catching" flow.
    - **30s Future Vision:** A showcase of the project's platform roadmap and grand vision.
