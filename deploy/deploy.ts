import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployed = await deploy("TheBlindArbiter", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log(`TheBlindArbiter contract: `, deployed.address);
};
export default func;
func.id = "deploy_the_blind_arbiter"; // id required to prevent reexecution
func.tags = ["TheBlindArbiter"];
