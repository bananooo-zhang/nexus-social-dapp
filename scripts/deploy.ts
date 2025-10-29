import { ethers, network } from "hardhat";

async function main() {
  console.log(`正在准备部署到 ${network.name} 网络...`);
  console.log("使用的 RPC URL:", network.config.url);

  console.log("正在部署 TheBlindArbiter 合约...");

  const TheBlindArbiter = await ethers.getContractFactory("TheBlindArbiter");
  const contract = await TheBlindArbiter.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("✅ TheBlindArbiter 部署成功！");
  console.log("📍 合约地址:", address);
  
  // 显示第一局游戏信息
  const claimedCard = await contract.claimedCard();
  console.log("🎴 系统声称:", claimedCard.toString());
  console.log("\n🎮 现在可以在前端连接钱包并开始游戏了！");
  console.log("💡 记得更新 frontend/src/App.tsx 中的 CONTRACT_ADDRESS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

