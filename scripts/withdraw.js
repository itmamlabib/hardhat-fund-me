const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("withdrawing from contract .....")

    const txResponse = await fundMe.withdraw()
    await txResponse.wait(1)

    const balance = await fundMe.provider.getBalance(deployer)
    console.log("withdrawn " + balance.toBigInt())
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
