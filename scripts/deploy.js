const hardhatAux = require("hardhat");

async function main() {
    // We get the contract to deploy
    const FrogFactory= await hardhatAux.ethers.getContractFactory("FrogFactory");


    const contract = await FrogFactory.deploy( "FrogFactory","FROG","ipfs://QmdnAmYQQwnF2dfBWaJ7SKn62GqunuQFfXmCy77L7oTLiA/","ipfs://QmRKuM5KHDx3r3wuVJzMCgJcd2GXNdrTSPZGi7sNg4E2Gt/hidden_metadata.json");
  
    await contract.deployed();
  
    console.log("Contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });