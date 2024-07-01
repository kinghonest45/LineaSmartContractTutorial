import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";


const deployFrogJump : DeployFunction = async function(hre: HardhatRuntimeEnvironment){
    const {deployer} = await hre.getNamedAccounts();
    const {deploy} = hre.deployments;

    await deploy("FrogJump",{
        from:deployer,
        args: ["Froggy"],
        log:true,
        autoMine:true,
    });
};


export default deployFrogJump;