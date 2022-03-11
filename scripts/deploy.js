async function main() {
  const JacobNFT = await hre.ethers.getContractFactory("Jacob");
  const nft = await JacobNFT.deploy();

  await nft.deployed();

  console.log("JacobNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
