async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')

  // Deploy contracts
  const token = await Token.deploy()
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
