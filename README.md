# 🏗 YouTube Tutorial Link: https://youtu.be/ntQnAa6khZw
![thumbnail linea](https://github.com/kinghonest45/LineaSmartContractTutorial/assets/174223028/4e1662c1-5443-4c52-b0d5-67671f08f02c)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## Smart contract

### FrogJump.sol:
```
// SPDX-LICENSE-IDENTIFIER:MIT
pragma solidity ^0.8.0;

interface IFrog{
    function name() external view returns (string memory);
    function jumps() external view returns (uint256);
}

interface IJumper{
    function jump() external;
}

contract FrogJump is IFrog ,IJumper{
    string public name;
    uint256 public jumps;

    constructor(string memory _name){
        name = _name;
    }

    function jump() public{
        jumps++;
    }


}
```

### _deploy_frogs.ts:

```
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
```
