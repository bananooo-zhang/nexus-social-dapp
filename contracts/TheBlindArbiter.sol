// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.24;

import {FHE, ebool, euint8} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

contract TheBlindArbiter is SepoliaConfig {
    address public owner;
    uint8 private realCard;      // 真实的牌（隐藏）
    uint8 public claimedCard;    // 系统声称的牌（公开）
    uint256 private nonce;

    event GameResult(address indexed player, bool wasHonest, uint8 realCard, uint8 claimedCard);

    constructor() {
        owner = msg.sender;
        // 初始化第一局游戏
        _setupNewRound();
    }

    // 内部函数：自动生成新一局
    function _setupNewRound() private {
        nonce++;
        // 使用区块信息生成伪随机数
        realCard = uint8((uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, nonce))) % 13) + 1);
        claimedCard = uint8((uint256(keccak256(abi.encodePacked(block.timestamp, nonce))) % 13) + 1);
    }

    // 玩家挑战
    function challenge() public returns (bool) {
        require(claimedCard != 0, "No active round");

        // 记录本局信息
        uint8 currentClaim = claimedCard;
        uint8 currentReal = realCard;
        
        // 判断系统是否诚实
        bool wasHonest = (currentReal == currentClaim);

        // 发出事件，告诉玩家结果
        emit GameResult(msg.sender, wasHonest, currentReal, currentClaim);

        // 自动开始新一局
        _setupNewRound();

        return wasHonest;
    }

    // 手动设置游戏（仅限 owner，用于测试）
    function setupRound(euint8 encryptedCard, uint8 claimed) public {
        require(msg.sender == owner, "Only owner");
        // 为了保持接口兼容，但 MVP 版本我们简化了
        claimedCard = claimed;
        realCard = claimed; // 简化版本
    }
}
