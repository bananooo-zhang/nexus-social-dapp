// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {FHE, ebool, euint8, externalEuint8} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

contract TheBlindArbiter is SepoliaConfig {
    event ChallengeResult(address indexed player, bool wasBluffCaught);

    constructor() {}

    // The signature is now correct based on competitor analysis.
    // `externalEuint8` is a struct and does not need the `calldata` keyword.
    function challenge(externalEuint8 encryptedRealCard, bytes calldata proof, uint8 claimedCard) public returns (bool) {
        // Use FHE.fromExternal to convert the externally provided encrypted value
        // into a usable euint8 handle within the contract.
        euint8 realCard = FHE.fromExternal(encryptedRealCard, proof);

        // Perform the confidential "not equal" check.
        // wasBluff = true means the claimed card is different from the real card (bluff caught!)
        ebool wasBluff = FHE.ne(realCard, FHE.asEuint8(claimedCard));
        
        // Allow the caller to decrypt the result
        FHE.allow(wasBluff, msg.sender);

        // For the event, we emit a non-encrypted boolean
        // In a real game, you might want to keep this encrypted too
        // But for demo purposes, we'll emit true to indicate transaction success
        emit ChallengeResult(msg.sender, true);
        
        // Return true to indicate the transaction succeeded
        return true;
    }
}
