const friends = [
    "",
];
const existingContractAddr = "0xAB06ba8382894823844A08DC34eE9f4F86052196";

async function main() {
  const nft = await hre.ethers.getContractAt("Jacob", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmTsqDy9bfSahjcy2ZAhBC3YREAeRW83JamZracfX815E3";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
