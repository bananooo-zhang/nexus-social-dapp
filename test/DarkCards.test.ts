import { expect } from "chai";
import { ethers, hre } from "hardhat";
import { deployContract } from "./utils/deployment";
import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import type { TheBlindArbiter } from "../types/TheBlindArbiter";

const KING = 13;
const ACE = 1;

describe("TheBlindArbiter", function () {
  let contract: TheBlindArbiter;
  let signer: SignerWithAddress;

  beforeEach(async function () {
    const signers = await ethers.getSigners();
    signer = signers[0];
    contract = await deployContract("TheBlindArbiter", signer) as unknown as TheBlindArbiter;

    await hre.fhevm.generatePublicKey({
      verifyingContract: await contract.getAddress(),
    });
  });

  it("should decrypt false when the claim is a lie", async function () {
    const encryptedRealCard = await hre.fhevm.encrypt8(KING);
    await contract.setupRound(encryptedRealCard, ACE);

    const tx = await contract.challenge();
    const receipt = await tx.wait();
    const optimisticResult = await contract.optimisticResult(receipt!.logs.map(l => l.data));
    const isHonest = await hre.fhevm.decrypt(optimisticResult);

    expect(isHonest).to.be.false;
  });

  it("should decrypt true when the claim is honest", async function () {
    const encryptedRealCard = await hre.fhevm.encrypt8(KING);
    await contract.setupRound(encryptedRealCard, KING);

    const tx = await contract.challenge();
    const receipt = await tx.wait();
    const optimisticResult = await contract.optimisticResult(receipt!.logs.map(l => l.data));
    const isHonest = await hre.fhevm.decrypt(optimisticResult);
    
    expect(isHonest).to.be.true;
  });
});
