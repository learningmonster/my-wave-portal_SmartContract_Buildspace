const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  // const waveContract = await waveContractFactory.deploy();
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });

  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  let firstWaveTxn = await waveContract.wave("Hey you!!");
  await firstWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let secondWaveTxn = await waveContract
    .connect(randomPerson)
    .wave("How's it going?");
  await secondWaveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  console.log(`WaveCount=${waveCount.toNumber()}`);

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  // secondWaveTxn = await waveContract
  //   .connect(randomPerson)
  //   .wave("It's a nice day.");
  // await secondWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // secondWaveTxn = await waveContract
  //   .connect(randomPerson)
  //   .wave("Testing messages");
  // await secondWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Lot of testing.");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Testing1");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Testing2");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // secondWaveTxn = await waveContract.connect(randomPerson).wave("Test3");
  // await secondWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Test4");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Test5");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.connect(randomPerson).wave("Test6");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // firstWaveTxn = await waveContract.wave("Test7");
  // await firstWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // secondWaveTxn = await waveContract.connect(randomPerson).wave("Test9");
  // await secondWaveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // console.log(`WaveCount=${waveCount.toNumber()}`);

  // /*
  //  * Get Contract balance to see what happened!
  //  */
  // contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  // console.log(
  //   "Contract balance:",
  //   hre.ethers.utils.formatEther(contractBalance)
  // );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  await waveContract.withdrawFunds();

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
