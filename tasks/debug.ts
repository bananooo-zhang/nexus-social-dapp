import { task } from "hardhat/config";
import "dotenv/config";

task("debug:env", "Prints the loaded environment variables")
  .setAction(async () => {
    console.log("\n--- 正在诊断环境变量 ---");
    
    const privateKey = process.env.SEPOLIA_PRIVATE_KEY;
    const rpcUrl = process.env.ALCHEMY_SEPOLIA_URL || process.env.ANKR_SEPOLIA_URL;

    if (privateKey && privateKey.length > 0) {
      console.log("✅ SEPOLIA_PRIVATE_KEY 已加载。");
      console.log(`   - 长度: ${privateKey.length} 位`);
      if (privateKey.startsWith('0x')) {
        console.log("   - ❌ 警告: 私钥以 '0x' 开头，这通常是错误的。请移除 '0x'。");
      } else {
        console.log("   - ✅ 格式看起来正确 (没有 '0x' 开头)。");
      }
    } else {
      console.log("❌ 错误: 未能加载 SEPOLIA_PRIVATE_KEY。请检查你的 .env 文件。");
    }
    
    if (rpcUrl && rpcUrl.length > 0) {
      console.log("✅ RPC URL 已加载。");
      console.log(`   - URL: ${rpcUrl}`);
    } else {
      console.log("❌ 错误: 未能加载 ALCHEMY_SEPOLIA_URL 或 ANKR_SEPOLIA_URL。");
    }
    console.log("------------------------\n");
  });
