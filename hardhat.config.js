require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-gas-reporter")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.8",
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: {
            default: 0
        },
        user: {
            default: 1
        }
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas_report.txt",
        noColors: true,
        currency: "USD"
        // coinmarketcap: process.env.CMC_API_KEY
    },
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337
        },
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
}
