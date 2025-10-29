import { ethers } from "hardhat";
import { createInstance, getPubKey, initFhevm } from "fhevmjs";
import { TheBlindArbiter } from "../types/TheBlindArbiter";

const KING = 13;
const ACE = 1;

async function main() {
  console.log("Starting the final test script...");

  const signers = await ethers.getSigners();
  const signer = signers[0];
  
  console.log("Deploying contract...");
  const factory = await ethers.getContractFactory("TheBlindArbiter");
  const contract = (await factory.connect(signer).deploy()) as TheBlindArbiter;
  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();
  console.log("Contract deployed at:", contractAddress);

  console.log("Initializing FHEVM instance...");
  await initFhevm(ethers.provider);
  const network = await ethers.provider.getNetwork();
  const chainId = +network.chainId.toString();
  const publicKey = await getPubKey({ chainId, with_progress: false });
  const fhevm = await createInstance({ chainId, publicKey });

  console.log("Generating public key for the contract...");
  fhevm.generatePublicKey({
    verifyingContract: contractAddress,
  });

  console.log("--- Test Case 1: The claim is a lie ---");
  console.log("Encrypting real card (KING)...");
  const encryptedKing = await fhevm.encrypt8(KING);
  console.log("Setting up round with a lie (Real: KING, Claimed: ACE)...");
  await contract.setupRound(encryptedKing, ACE);
  console.log("Player challenges...");
  const tx1 = await contract.challenge();
  const receipt1 = await tx1.wait();
  console.log("Challenge transaction confirmed.");
  console.log("Decrypting result from logs...");
  const isHonest1 = await fhevm.decrypt(contractAddress, receipt1.logs[0].data);
  console.log("Decrypted result:", isHonest1);
  if (isHonest1) {
    throw new Error("Test Case 1 FAILED: Expected false, got true");
  }
  console.log("✅ Test Case 1 PASSED");

  console.log("\n--- Test Case 2: The claim is honest ---");
  console.log("Encrypting real card (KING)...");
  const encryptedKing2 = await fhevm.encrypt8(KING);
  console.log("Setting up round with an honest claim (Real: KING, Claimed: KING)...");
  await contract.setupRound(encryptedKing2, KING);
  console.log("Player challenges...");
  const tx2 = await contract.challenge();
  const receipt2 = await tx2.wait();
  console.log("Challenge transaction confirmed.");
  console.log("Decrypting result from logs...");
  const isHonest2 = await fhevm.decrypt(contractAddress, receipt2.logs[0].data);
  console.log("Decrypted result:", isHonest2);
  if (!isHonest2) {
    throw new Error("Test Case 2 FAILED: Expected true, got false");
  }
  console.log("✅ Test Case 2 PASSED");
  
  console.log("\n🎉 All tests passed successfully! 🎉");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
