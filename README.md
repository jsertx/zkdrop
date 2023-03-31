<br />
<div align="center">
  <img src="https://static.sismo.io/readme/top-main.png" alt="Logo" width="150" height="150" style="borderRadius: 20px">

  <h3 align="center">
    zkDrop
  </h3>

  <p align="center">
    Made by <a href="https://www.docs.sismo.io/" target="_blank">Sismo</a>
  </p>
  
  <p align="center">
    <a href="https://discord.gg/uAPtsfNrve" target="_blank">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
    </a>
    <a href="https://twitter.com/sismo_eth" target="_blank">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
    </a>
  </p>
  <a href="https://www.sismo.io/" target="_blank"></a>
</div>

ZkDrop is an application using the on-chain [zkConnect](https://docs.sismo.io/sismo-docs/technical-documentation/zkconnect) library to privately airdrop an ERC721 to all contributors to [The Merge](https://ethereum.org/en/upgrades/merge/), allowing them to easily register to famous ethereum conferences like [EthCC](https://www.ethcc.io/), [EthGlobal](https://ethglobal.com/), [Devcon](https://devcon.org/) and [Edcon](https://www.edcon.io/).
The codebase can be easily reused to privately airdrop any ERC721 to a list of addresses.

Here is a guide to integrate zkConnect in your own application: [https://zk-connect-guide.sismo.io/](https://zk-connect-guide.sismo.io/).


# Front-end
### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18.15.0, latest LTS version)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)


## Install dependencies

In a first terminal:

```sh
# Go to frontend folder
cd front

# Install dependencies
yarn

# Start server
yarn start
```

# ZKDrop Contract

In distinct terminal:

```sh
# Go to backend folder
cd contracts
```

## Install dependencies

[Install forge ](https://book.getfoundry.sh/getting-started/installation)

```bash
forge install
forge update # to update to the latest version of the solidity library (recommended)
```

## Setup your env variables

```bash
cp example.env .env
```

## Fork the Goerli network on a local network with anvil (comes with foundry)

```bash
# Run local network
anvil --fork-url https://rpc.ankr.com/eth_goerli

# you can also use an environment variable for the RPC_URL
anvil --fork-url $RPC_URL
```

Define your deployment mnemonic

```bash
forge script DeployZKDrop --rpc-url http://localhost:8545 --mnemonics "$MNEMONIC" --sender "$SENDER" --broadcast
```

<br/>
<img src="https://static.sismo.io/readme/bottom-main.png" alt="bottom" width="100%" >
````
