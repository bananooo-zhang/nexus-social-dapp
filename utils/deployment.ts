import type { Signer } from "ethers";
import { ethers } from "hardhat";

export const deployContract = async (contractName: string, signer: Signer) => {
  const factory = await ethers.getContractFactory(contractName);
  const contract = await factory.connect(signer).deploy();
  await contract.waitForDeployment();
  return contract;
};
