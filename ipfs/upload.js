const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Jacob",
      attributes: [
        {
          "trait_type": "Javascript ability",
          "value": "Fine"
        },
        {
          "trait_type": "Typescript ability",
          "value": "Poor"
        },
        {
          "trait_type": "Java ability",
          "value": "Good"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmPpWgmniaW7tomoVfsCGb8rGBKbtPAHyky1SbJP4HE9JT",
      description: "A very handsome man"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
